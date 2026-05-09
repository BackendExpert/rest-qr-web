import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children, roles }) => {
    const { auth, loading } = useAuth();

    if (loading) return null;

    if (!auth?.token) {
        return <Navigate to="/" replace />;
    }

    if (roles && !roles.includes(auth.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default PrivateRoute;