#!/bin/bash
echo "HM Helm values.yaml preparation\n"


# If EDB_PLATFORM_VERSION is not set, error and exit
if [ -z "$EDB_PLATFORM_VERSION" ]; then
  echo "EDB_PLATFORM_VERSION is not set, please set it to the version of EDB Platform you are deploying"
  exit
fi

# Test for the presence of yq
if ! command -v yq &> /dev/null
then
    echo "yq could not be found, please install it"
    exit
fi

# Import the eks-default-env file
source ./default-env.sh

# Test for presence of helm repo
value=`helm repo list -o yaml | yq eval 'contains([{ "name":"edbpgai"}])' -`
if [[ "$value" == "false" ]]; then
  echo "EDB Platform Helm repository not found, adding in now"
  helm repo add edbpgai "https://downloads.enterprisedb.com/${EDB_SUBSCRIPTION_TOKEN}/pgai-platform/helm/charts/"
fi

# Always update the helm repo

helm repo update
helm show values edbpgai/edbpgai-bootstrap --version $EDB_PLATFORM_VERSION > values.yaml
echo "\n\n"

# Prepare version dependent values 

export AES_256_KEY=$(openssl rand -base64 32)

if [[ "$EDB_PLATFORM_VERSION" == v1.2.* ]]; then
    echo "EDB Platform version is v1.2.*"
    yq -i '.bootstrapImageName = env(CONTAINER_REGISTRY_URI)+"/edbpgai-bootstrap/bootstrap-"+env(EDB_TARGET_PLATFORM) |
    .bootstrapImageTag=env(EDB_PLATFORM_VERSION) |
    del(.bootstrapImage) |
    .parameters.upm-istio-gateway.cookie_aeskey = env(AES_256_KEY) | 
    del(.parameters.upm-beacon-ff-base) |
    .beaconAgent.provisioning.imagesetDiscoveryContainerRegistryURL= env(IMAGESET_REGISTRY_URI) |
    .containerRegistryURL = env(CONTAINER_REGISTRY_URI)' values.yaml
fi

# Prepare values.yaml for EKS

# if AUTHENTICATION_PASSWORD_HASH is not set, generate it
if [ -z "$AUTHENTICATION_PASSWORD_HASH" ]; then
  echo "Generating password hash - please ensure you remove the password from your history"
  export AUTHENTICATION_PASSWORD_HASH=$(echo -n $AUTHENTICATION_PASSWORD | htpasswd -BinC 10 admin | cut -d: -f2)
else 
  echo "Using prehashed password"
fi

yq -i '.system = env(EDB_TARGET_PLATFORM) |
.parameters.global.portal_domain_name = env(PORTAL_DOMAIN_NAME) |
.parameters.transporter-rw-service.domain_name = env(TRANSPORTER_RW_SERVICE_DOMAIN_NAME) |
.parameters.transporter-dp-agent.rw_service_url= "https://"+env(TRANSPORTER_RW_SERVICE_DOMAIN_NAME)+"/transporter" |
.parameters.upm-beacon.server_host= env(BEACON_SERVICE_DOMAIN_NAME) |
.pgai.portal.authentication.staticPasswords[0].email=env(AUTHENTICATION_EMAIL) |
.pgai.portal.authentication.staticPasswords[0].hash=env(AUTHENTICATION_PASSWORD_HASH) |
.pgai.portal.authentication.staticPasswords[0].username=env(AUTHENTICATION_USER) |
.pgai.portal.authentication.staticPasswords[0].userID="c5998173-a605-449a-a9a5-4a9c33e26df" |
.beaconAgent.location=env(LOCATION_NAME)' values.yaml

echo "Your values.yaml file is ready"

