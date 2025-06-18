# exports for EKS
export EDB_PLATFORM_VERSION="v1.2.0"
export CONTAINER_REGISTRY_URI="docker.enterprisedb.com/pgai-platform"
export IMAGESET_REGISTRY_URI=$CONTAINER_REGISTRY_URI
export IMAGESET_AUTHTYPE="token"
export PORTAL_DOMAIN_NAME="portal.foo.network"
export TRANSPORTER_RW_SERVICE_DOMAIN_NAME="transporter.foo.network"
export BEACON_SERVICE_DOMAIN_NAME="beacon.foo.network"
export AUTHENTICATION_EMAIL="owner@mycompany.com"
export AUTHENTICATION_USER="owner@mycompany.com"
export LOCATION_NAME="default-location"
export STORAGE_CLASS="gp2"
export TRANSPORTER_FIPS_ENABLED=false

# Set a password hash for the user or pass a password to have it hashed for you.
# If you pass a password, you will need to remove it from your history.
# You can hash a password using the following command:
# echo -n "password" | htpasswd -BinC 10 admin | cut -d: -f2
#

# export AUTHENTICATION_PASSWORD="password"
# If setting AUTHENTICATION_PASSWORD_HASH, ensure it is single quoted to prevent variable expansion (e.g. $2y$10$...).
export AUTHENTICATION_PASSWORD_HASH='$2y$10$vKOAXfLHbeV1OQxMpxlLdOIwnX.JAN.ZrD9ZU//ocrNQwhQIMtXhy'

