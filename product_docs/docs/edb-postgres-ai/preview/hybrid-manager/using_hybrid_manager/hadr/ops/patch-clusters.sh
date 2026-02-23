#! /usr/bin/env bash
set -eou pipefail

if [ -z ${OLD_BACKUP_ID+x} ]
then
    echo "OLD_BACKUP_ID must be set!"
    exit 1
fi

OLD_CONFIG_DIR=old-cluster-configs
NEW_CONFIG_DIR=new-cluster-configs

mkdir -p $OLD_CONFIG_DIR
mkdir -p $NEW_CONFIG_DIR

function download_config {
    OUTPUT_PATH=$OLD_CONFIG_DIR/$2-$1-config.yaml
    kubectl get cluster -n "$2" "$1" -o yaml > "$OUTPUT_PATH"
    echo "$OUTPUT_PATH"
}

function patch_config {
    OUTPUT_PATH=$NEW_CONFIG_DIR/$(basename $1)
    cp "$1" "$OUTPUT_PATH"
    yq -i e '.spec.bootstrap = {"recovery": {
        "database": .spec.bootstrap.initdb.database,
        "owner": .spec.bootstrap.initdb.owner,
        "source": .metadata.name,
        "secret": .spec.bootstrap.initdb.secret
    }}' "$OUTPUT_PATH"
    # Try to get destinationPath from cluster config, fallback to ObjectStore if not available
    DESTINATION_PATH=$(yq e '.spec.backup.barmanObjectStore.destinationPath' "$OUTPUT_PATH" 2>/dev/null)
    CLUSTER_NAME=$(yq e '.metadata.name' "$OUTPUT_PATH")
    CLUSTER_NAMESPACE=$(yq e '.metadata.namespace' "$OUTPUT_PATH")

    # Check if cluster has been migrated to CNPG-I barman plugin
    IS_MIGRATED=false
    if [ -z "$DESTINATION_PATH" ] || [ "$DESTINATION_PATH" = "null" ]; then
        IS_MIGRATED=true
        # Cluster has been migrated to CNPG-I barman plugin, get destinationPath from ObjectStore CR
        DESTINATION_PATH=$(kubectl -n "$CLUSTER_NAMESPACE" get objectstores.barmancloud.cnpg.io "$CLUSTER_NAME" -o yaml 2>/dev/null | yq e '.spec.configuration.destinationPath' -)
    fi

    # Transform the destinationPath
    TRANSFORMED_PATH=$(echo "$DESTINATION_PATH" | sed 's|edb-internal-backups/.*/databases|edb-internal-backups/databases|')

    # Configure externalClusters according to migration status
    if [ "$IS_MIGRATED" = true ]; then
        # Cluster has been migrated to CNPG-I barman plugin
        # Create a new ObjectStore CR for recovery with the transformed path
        RESTORE_OBJECTSTORE_NAME="${CLUSTER_NAME}-restore"

        # Get the existing ObjectStore CR and modify it for recovery
        kubectl -n "$CLUSTER_NAMESPACE" get objectstores.barmancloud.cnpg.io "$CLUSTER_NAME" -o yaml 2>/dev/null | \
        yq e ".metadata.name = \"$RESTORE_OBJECTSTORE_NAME\" |
               del(.metadata.uid) |
               del(.metadata.annotations) |
               del(.metadata.resourceVersion) |
               del(.metadata.creationTimestamp) |
               del(.metadata.generation) |
               del(.metadata.ownerReferences) |
               del(.status) |
               .spec.configuration.destinationPath = \"$TRANSFORMED_PATH\"" - | \
        kubectl apply -f - 2>/dev/null || echo "Warning: Failed to create restore ObjectStore CR for $CLUSTER_NAME"

        # Configure externalClusters to use the new ObjectStore CR
        RESTORE_OS_NAME="$RESTORE_OBJECTSTORE_NAME" CLUSTER_NAME_VAR="$CLUSTER_NAME" yq -i e '.spec.externalClusters = [{
            "plugin": {
                "name": "barman-cloud.cloudnative-pg.io",
                "parameters": {
                    "barmanObjectName": strenv(RESTORE_OS_NAME),
                    "serverName": strenv(CLUSTER_NAME_VAR)
                }
            },
            "name": .spec.bootstrap.recovery.source
        }]' "$OUTPUT_PATH"
    else
        # Cluster has not been migrated yet, use barmanObjectStore
        DEST_PATH="$TRANSFORMED_PATH" yq -i e '.spec.externalClusters = [{
            "barmanObjectStore": {
                "destinationPath": strenv(DEST_PATH),
                "wal": {"maxParallel": 8}
            },
            "name": .spec.bootstrap.recovery.source
        }]' "$OUTPUT_PATH"
    fi
    # Handle credentials based on migration status
    if [ "$IS_MIGRATED" = false ]; then
        # Non-migrated cluster: get credentials from cluster spec
        GOOGLE_CREDS=$(yq e '.spec.backup.barmanObjectStore.googleCredentials' "$OUTPUT_PATH" 2>/dev/null)
        S3_CREDS=$(yq e '.spec.backup.barmanObjectStore.s3Credentials' "$OUTPUT_PATH" 2>/dev/null)

        # Apply Google credentials if available
        if [ "$GOOGLE_CREDS" != "null" ] && [ -n "$GOOGLE_CREDS" ]; then
            echo "$GOOGLE_CREDS" | yq e '. as $creds | load("'$OUTPUT_PATH'") | .spec.externalClusters.0.barmanObjectStore.googleCredentials = $creds' - > "${OUTPUT_PATH}.tmp" && mv "${OUTPUT_PATH}.tmp" "$OUTPUT_PATH"
        fi
        # Apply S3 credentials if available
        if [ "$S3_CREDS" != "null" ] && [ -n "$S3_CREDS" ]; then
            echo "$S3_CREDS" | yq e '. as $creds | load("'$OUTPUT_PATH'") | .spec.externalClusters.0.barmanObjectStore.s3Credentials = $creds' - > "${OUTPUT_PATH}.tmp" && mv "${OUTPUT_PATH}.tmp" "$OUTPUT_PATH"
        fi
    fi
    yq -i e '. as $root | with(.spec.inheritedMetadata.annotations;
        ."appliance.enterprisedb.com/storage-prefixes" = (
            (."appliance.enterprisedb.com/storage-prefixes" // "" | split(",") | map(select(. != ""))) as $existing |
            ([
                "edb-internal-backups",
                strenv(OLD_BACKUP_ID),
                "databases",
                $root.metadata.name
            ] | join("/")) as $new_prefix |
            ($existing + [$new_prefix] | unique | join(","))
        ))' "$OUTPUT_PATH"
    yq -i e 'del(.status)' "$OUTPUT_PATH"
}

# Note that:
# - We exclude customer clutsers (which start with "p-") because we are dealing with HM internal clusters only here.
# - We exclude the stats-collector-db because it's just telemetry that doesn't belong to the new system (see UPM-78389).
for CLUSTER in $(kubectl get clusters -A -o json | jq -rc '.items.[].metadata | select((.name | test("^p-") | not) and (.name != "stats-collector-db")) | {"name": .name, "namespace": .namespace}')
do
    NAME=$(echo "${CLUSTER}" | jq -rc '.name')
	NAMESPACE=$(echo "${CLUSTER}" | jq -rc '.namespace')
    echo "Patching $NAME in namespace $NAMESPACE"
    CONFIG=$(download_config "$NAME" "$NAMESPACE")
    patch_config "$CONFIG"
done
