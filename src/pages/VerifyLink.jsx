import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../services/api";

let isRequestSent = false;

const VerifyLink = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [verified, setVerified] = useState(false);

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
                    localStorage.setItem(
                        "accessToken",
                        res.data.accessToken
                    );

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
    }, [token]);

    if (loading) return <div>Verifying...</div>;
    if (!verified) return null;

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <h1 className="text-2xl font-bold text-green-600">
                ✅ Verification Successful
            </h1>

            <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-80 transition"
            >
                Continue to Dashboard
            </button>
        </div>
    );
};

export default VerifyLink;