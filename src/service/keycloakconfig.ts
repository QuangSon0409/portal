import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  realm: `${import.meta.env.VITE_APP_KEYCLOAK_REALM}`,
  clientId: `${import.meta.env.VITE_APP_KEYCLOAK_CLIENT_ID}`,
  url: `${import.meta.env.VITE_APP_KEYCLOAK_URL}`,
});

export default keycloak;
