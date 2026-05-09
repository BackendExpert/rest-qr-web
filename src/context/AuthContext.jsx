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

    const parseToken = (token) => {
        const decoded = jwtDecode(token);

        const email = decoded.email || "";
        const username = email ? email.split("@")[0] : "";

        return {
            token,
            id: decoded.sub || null,
            email,
            username,
            role: decoded.role || null,
        };
    };

    useEffect(() => {
        const storedToken = localStorage.getItem("token");

        if (storedToken) {
            try {
                setAuth(parseToken(storedToken));
            } catch (err) {
                localStorage.removeItem("token");
            }
        }

        setLoading(false);
    }, []);

    const login = (token) => {
        try {
            localStorage.setItem("token", token);
            setAuth(parseToken(token));
        } catch (err) {
            console.error("Invalid token on login", err);
        }
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