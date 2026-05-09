import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../../services/api";
import DefaultButton from "../../component/Buttons/DefaultButton";
import { useAuth } from "../../context/AuthContext";


let isRequestSent = false;

const VerifyLink = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const { login } = useAuth()

    const [loading, setLoading] = useState(true);
    const [verified, setVerified] = useState(false);
    const [user, setUser] = useState(null);

    const token = searchParams.get("token");

    useEffect(() => {
        if (!token) {
            navigate("/");
            return;
        }

        if (isRequestSent) return;
        isRequestSent = true;

        const fetchVerifyData = async () => {
            try {
                const res = await API.get(
                    `/auth/verify-authlink?token=${token}`
                );

                if (res.data.success) {
                    login(res.data.accessToken)
                    localStorage.removeItem("token");
                    setUser(res.data.user); 
                    setVerified(true);
                }
            } catch (err) {
                console.log(err);
                navigate("/");
            } finally {
                setLoading(false);
            }
        };

        fetchVerifyData();
    }, [token, navigate]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center text-lg font-semibold">
                Verifying...
            </div>
        );
    }

    if (!verified) return null;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-4">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 text-center border border-orange-100">

                <h1 className="text-2xl font-extrabold text-orange-500 mb-4">
                    ✅ Verification Successful
                </h1>

                {user && (
                    <div className="bg-orange-50 rounded-xl p-4 text-left text-sm text-gray-700 mb-6 space-y-2">
                        <p><span className="font-semibold">Email:</span> {user.email}</p>
                        <p><span className="font-semibold">Role:</span> {user.role?.role}</p>
                        <p><span className="font-semibold">Last Login:</span> {new Date(user.last_login).toLocaleString()}</p>
                    </div>
                )}

                <DefaultButton
                    onClick={() => navigate("/dashboard")}
                    label="Continue to Dashboard 🚀"
                />
            </div>
        </div>
    );
};

export default VerifyLink;