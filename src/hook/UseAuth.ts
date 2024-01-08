import { useState, useEffect, useRef } from "react";
import keycloak from "../service/UserService";


const useAuth = () => {
    const isRun = useRef(false);
    const [token, setToken] = useState<string | undefined>();
    const [keycloakValue, setKeycloakValue] = useState<any>(null)
    const [isLogin, setLogin] = useState<boolean>(false);

    const initializeKeycloak = async () => {
        try {
            await keycloak.init({
                onLoad: "login-required",
            });

            const authenticated: any = keycloak.authenticated;
            setLogin(authenticated);

            if (authenticated) {
                console.log("User is authenticated");
                setKeycloakValue(keycloak)
                setToken(keycloak.token);
                localStorage.setItem("serviceToken", JSON.stringify(keycloak.token));
            } else {
                console.log("User is not authenticated");
            }
        } catch (error) {
            console.error("Keycloak initialization error:", error);
        }
    };
    useEffect(() => {

        if (!isRun.current) {
            isRun.current = true;
            initializeKeycloak();
        } else {
            const authenticated: any = keycloak.authenticated;
            setLogin(authenticated);

            if (authenticated) {
                console.log("User is authenticated");
                // Update token only if keycloak.token changes
                if (keycloak.token !== token) {
                    setToken(keycloak.token);
                    localStorage.setItem("serviceToken", JSON.stringify(keycloak.token));
                }
            } else {
                console.log("User is not authenticated");
            }
        }
    }, [token]);
    const logout: any = () => {
        initializeKeycloak();
        setLogin(false);
        keycloakValue.logout()

    }

    return [isLogin, token, logout, keycloakValue];
};

export default useAuth;
