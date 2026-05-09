import { createContext, useContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: null,
        id: null,
        email: null,
        username: null,
        role: null,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");

        if (storedToken) {
            try {
                const decoded = jwtDecode(storedToken);
                const email = decoded.user || "";
                const username = email.split("@")[0];

                setAuth({
                    token: storedToken,
                    id: decoded.sub,
                    email,
                    username,
                    role: decoded.role,
                });
            } catch (err) {
                localStorage.removeItem("token");
            }
        }

        setLoading(false);
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);

        const decoded = jwtDecode(token);
        const email = decoded.user || "";
        const username = email.split("@")[0];

        setAuth({
            token,
            id: decoded.sub,
            email,
            username,
            role: decoded.role,
        });
    };

    const logout = (navigate) => {
        localStorage.removeItem("token");
        setAuth({
            token: null,
            id: null,
            email: null,
            username: null,
            role: null,
        });
        navigate("/", { replace: true });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);