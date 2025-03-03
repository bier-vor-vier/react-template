import {useAuth} from "../features/auth/components/AuthProvider.tsx";
export const useIsAuthenticated = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated;
};
