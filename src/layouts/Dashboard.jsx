import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DashNav from "../component/Dashboard/DashNav";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
import DashSide from "../component/Dashboard/DashSide";
import DashFooter from "../component/Dashboard/DashFooter";

const Dashboard = () => {
    const { auth } = useAuth();
    const [open, setOpen] = useState(false);

    let userdashtext = "User";

    if (auth?.role === "super_admin") {
        userdashtext = "Super Admin";
    } else if (auth?.role === "system_admin") {
        userdashtext = "System Admin";
    }

    return (
        <div className="w-full flex bg-[#ffeee2]">

            {/* mobile menu button */}
            <button
                onClick={() => setOpen(true)}
                className="xl:hidden fixed top-4 left-4 z-50 w-11 h-11 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg"
            >
                <TiThMenu size={22} />
            </button>

            {/* overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 xl:hidden"
                />
            )}

            {/* SIDEBAR */}
            <div
                className={`fixed xl:sticky top-0 left-0 z-50 w-[290px] h-screen bg-white border-r border-orange-100 transform transition-transform duration-300 
                ${open ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}
            >
                <div className="h-full flex flex-col">

                    <DashSide />

                    <button
                        onClick={() => setOpen(false)}
                        className="xl:hidden absolute top-4 right-4 text-gray-600"
                    >
                        <MdOutlineClose size={24} />
                    </button>

                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#f9f5f0]">

                <DashNav />

                <div className="flex-1 mx-6 ">
                    <Outlet />
                </div>

                <div className="mt-2">
                    <DashFooter />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;