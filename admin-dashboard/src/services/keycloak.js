import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'https://172.233.253.98:8443/',
  realm: 'Shop-management',
  clientId: 'admin-dashboard',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
