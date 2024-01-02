import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    realm: "sonbq",
    clientId: "sonbq-portal",
    url: `${import.meta.env.VITE_APP_IAM}`
});

export default keycloak