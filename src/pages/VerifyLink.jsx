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

            {/* 
            
            {
  "success": true,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OWZlMGIxZTI3NGU1MDQ1NzE5ZWM5OWQiLCJlbWFpbCI6ImprYW5keW11c2ljQGdtYWlsLmNvbSIsInJvbGUiOiJtZW1iZXIiLCJpYXQiOjE3NzgyNTY3NDMsImV4cCI6MTc3ODM0MzE0M30.IRRVe62zzwH7BXkU_NwfuEUxcHqGkkfO0awgVJjTtLc",
  "user": {
    "_id": "69fe0b1e274e5045719ec99d",
    "email": "jkandymusic@gmail.com",
    "role": {
      "_id": "69fe03e67e4bc6fdd2b0a462",
      "role": "member",
      "permissions": [
        "order:create"
      ]
    },
    "last_login": "2026-05-08T16:12:23.720Z",
    "login_ip": "127.0.0.1",
    "account_stats": true,
    "createdAt": "2026-05-08T16:11:10.259Z",
    "updatedAt": "2026-05-08T16:12:23.721Z",
    "__v": 0
  }
}
            
            */}

            
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