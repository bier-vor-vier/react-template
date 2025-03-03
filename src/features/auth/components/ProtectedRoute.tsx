import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./AuthProvider.tsx";

const ProtectedRoute = () => {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? <Outlet/> : <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

export default ProtectedRoute;
