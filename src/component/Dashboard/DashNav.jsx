import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
    FaCog,
    FaUserCircle,
    FaSignOutAlt,
    FaBell,
} from "react-icons/fa";
import UserImage from "../../assets/User.png";

const DashNav = () => {
    const { auth } = useAuth();
    const [open, setOpen] = useState(false);
    const panelRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="w-full px-6 py-4">
            <div className="flex items-center justify-between">

                <div className="xl:ml-0 ml-12">
                    <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
                    <p className="text-xs text-gray-500">
                        Welcome back, <span className="text-orange-500 font-medium">{auth?.username}</span>
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className=" md:flex hidden">
                        <button className="relative w-10 h-10 rounded-full bg-orange-50 hover:bg-orange-100 transition flex items-center justify-center">
                            <FaBell className="text-orange-500" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
                        </button>

                        <button className="ml-4 w-10 h-10 rounded-full bg-orange-50 hover:bg-orange-500 transition flex items-center justify-center group">
                            <FaCog className="text-orange-500 group-hover:text-white transition" />
                        </button>
                    </div>


                    <div className="relative" ref={panelRef}>

                        <div
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-3 cursor-pointer px-3 py-1 rounded-full hover:bg-orange-50 transition"
                        >
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold text-gray-800">{auth?.username}</p>
                                <p className="text-xs text-gray-500">{auth?.role}</p>
                            </div>

                            <img
                                src={UserImage}
                                className="w-9 h-9 rounded-full border-2 border-orange-400 shadow-sm"
                                alt="user"
                            />
                        </div>

                        {open && (
                            <div className="absolute z-999 right-0 mt-3 w-72 bg-white border border-orange-100 shadow rounded-2xl overflow-hidden animate-fadeIn">

                                <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-4 text-white">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={UserImage}
                                            className="w-12 h-12 rounded-full border-2 border-white"
                                        />
                                        <div>
                                            <p className="font-semibold">{auth?.username}</p>
                                            <p className="text-xs opacity-90">{auth?.email || "user@email.com"}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-2">

                                    <a href="/dashboard/profile">
                                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-50 transition">
                                            <FaUserCircle className="text-orange-500" />
                                            <span className="text-sm">My Profile</span>
                                        </button>
                                    </a>

                                    <a href="/dashboard/settings">
                                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-50 transition">
                                            <FaCog className="text-orange-500" />
                                            <span className="text-sm">Settings</span>
                                        </button>
                                    </a>

                                    <div className="my-2 border-t border-orange-100" />

                                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 text-red-500 transition">
                                        <FaSignOutAlt />
                                        <span className="text-sm">Logout</span>
                                    </button>
                                </div>

                                <div className="text-xs text-center text-gray-400 py-2 border-t border-orange-100">
                                    Jehan Restaurants • Secure Dashboard
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashNav;