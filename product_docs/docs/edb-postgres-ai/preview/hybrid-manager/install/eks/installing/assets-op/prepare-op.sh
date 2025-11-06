#!/bin/bash
echo "HM Operator values.yaml preparation\n"

# Import the eks-default-env file
source ./default-env.sh

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


cp hm-default.yaml hm-values.yaml

# Prepare values.yaml for EKS

export AES_256_KEY=$(openssl rand -base64 32)

# if AUTHENTICATION_PASSWORD_HASH is not set, generate it
if [ -z "$AUTHENTICATION_PASSWORD_HASH" ]; then
  echo "Generating password hash - please ensure you remove the password from your history"
  export AUTHENTICATION_PASSWORD_HASH=$(echo -n $AUTHENTICATION_PASSWORD | htpasswd -BinC 10 admin | cut -d: -f2)
else 
  echo "Using prehashed password"
fi

if [[ "$EDB_PLATFORM_VERSION" == v1.2.* ]]; then
    echo "EDB Platform version is v1.2.*"
    yq -i '.spec.imageRegistry = env(CONTAINER_REGISTRY_URI) |
    .spec.componentsParameters.upm-istio-gateway.cookie_aeskey = env(AES_256_KEY) | 
    .spec.globalParameters.portal_domain_name = env(PORTAL_DOMAIN_NAME) |
    .spec.globalParameters.storage_class = env(STORAGE_CLASS) |
    .spec.componentsParameters.transporter-data-operator.fips_enabled = (env(TRANSPORTER_FIPS_ENABLED)|tostring) |
    .spec.componentsParameters.transporter-rw-service.domain_name = env(TRANSPORTER_RW_SERVICE_DOMAIN_NAME) |
    .spec.componentsParameters.transporter-dp-agent.rw_service_url= "https://"+env(TRANSPORTER_RW_SERVICE_DOMAIN_NAME)+"/transporter" |
    .spec.componentsParameters.upm-beacon.server_host= env(BEACON_SERVICE_DOMAIN_NAME) |
    .spec.pgai.portal.authentication.staticPasswords[0].email=env(AUTHENTICATION_EMAIL) |
    .spec.pgai.portal.authentication.staticPasswords[0].hash=env(AUTHENTICATION_PASSWORD_HASH) |
    .spec.pgai.portal.authentication.staticPasswords[0].username=env(AUTHENTICATION_USER) |
    .spec.pgai.portal.authentication.staticPasswords[0].userID="c5998173-a605-449a-a9a5-4a9c33e26df" |
    .spec.beaconAgent.provisioning.imagesetDiscoveryContainerRegistryURL= env(IMAGESET_REGISTRY_URI) |
    .spec.beaconAgent.provisioning.imagesetDiscoveryAuthenticationType= env(IMAGESET_AUTHTYPE) |
    .spec.beaconAgent.location=env(LOCATION_NAME)' hm-values.yaml
fi

echo "Your hm-values.yaml file is ready"

