import { createContext, useContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode"; 
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: null,
        id: null,
        user: null,
        role: null,
    });


    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            const decoded = jwtDecode(storedToken);
            const email = decoded.user || "";
            const username = email.split("@")[0]; 
            setAuth({
                token: storedToken,
                id: decoded.sub,
                user: { id: decoded.sub, email, username },
                role: decoded.role,
            });
        }
    }, []);


    const login = (token) => {
        const decoded = jwtDecode(token);
        localStorage.setItem("token", token);
        const email = decoded.user || "";
        const username = email.split("@")[0];
        setAuth({
            token,
            id: decoded.sub,
            user: { id: decoded.sub, email, username },
            role: decoded.role,
        });
    };

    // Logout function
    const logout = (navigate) => {
        localStorage.removeItem("token");
        setAuth({ token: null, id: null, user: null, role: null });
        navigate("/", { replace: true });
        window.location.reload();
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);