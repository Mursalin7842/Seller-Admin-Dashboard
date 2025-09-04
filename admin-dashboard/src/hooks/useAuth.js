import { useKeycloak } from '@react-keycloak/web';

const useAuth = () => {
  const { keycloak, initialized } = useKeycloak();

  return {
    isLoggedIn: keycloak.authenticated,
    isInitialized: initialized,
    user: keycloak.tokenParsed,
    logout: keycloak.logout,
  };
};

export default useAuth;
