import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CloudCheck, CloudCogIcon } from "lucide-react";
import { BiSolidDashboard, } from "react-icons/bi";
import { FaHandHoldingWater, FaDollarSign, FaCogs } from "react-icons/fa";
import { MdOutlineCo2, MdOutlineEnergySavingsLeaf } from "react-icons/md";

import defultUser from "../../assets/User.png";
import { useAuth } from "../../context/AuthContext";

const DashSide = ({ closeSidebar }) => {
    const { auth } = useAuth();
    const location = useLocation();





    const [openMenu, setOpenMenu] = useState(null);

    const navItems = [
        {
            section: "Main",
            items: [
                {
                    name: "Dashboard",
                    icon: <BiSolidDashboard />,
                    submenu: [
                        { name: "Dashboard", link: "/dashboard" },
                        { name: "Analytics", link: "/dashboard/analytics" },
                    ],
                    roles: ["super_admin", "system_admin", "user"],
                },
            ],
        },
        {
            section: "Cost",
            items: [
                {
                    name: "Energy Cost",
                    icon: <FaDollarSign />,
                    submenu: [
                        { name: "Cost Overview", link: "/dashboard/cost/analytics" },
                        { name: "Meter-wise Cost", link: "/dashboard/cost/meter" },

                    ],
                    roles: ["super_admin", "system_admin", "user"],
                },
            ],
        },
        {
            section: "other",
            items: [
                {
                    name: "Settings",
                    icon: <FaCogs />,
                    // submenu: [
                    //     { name: "Cost Overview", link: "/dashboard/cost/analytics" },
                    //     { name: "Meter-wise Cost", link: "/dashboard/cost/meter" },

                    // ],
                    roles: ["super_admin", "system_admin", "user"],
                },
            ],
        },
    ];

    // Flatten + filter by role
    const sections = navItems.map((section) => ({
        ...section,
        items: section.items.filter((item) =>
            item.roles.includes(auth?.role)
        ),
    }));

    // Auto open submenu
    useEffect(() => {
        sections.forEach((section) => {
            section.items.forEach((item, index) => {
                if (item.submenu) {
                    const match = item.submenu.find((sub) =>
                        location.pathname.startsWith(sub.link)
                    );
                    if (match) setOpenMenu(item.name);
                }
            });
        });
    }, [location.pathname]);

    const toggleSubmenu = (name) => {
        setOpenMenu(openMenu === name ? null : name);
    };

    return (
        <aside className="h-screen w-72 bg-white flex flex-col px-4 py-5 border-r border-indigo-100">

            {/* LOGO */}
            <div className="mb-10 px-2">
                <div className="flex items-center gap-3">

                    {/* ICON BADGE */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600">
                        <CloudCogIcon className="h-5 w-5" />
                    </div>

                    {/* TEXT */}
                    <div className="flex flex-col leading-tight">
                        <span className="text-base font-semibold text-gray-800 tracking-tight">
                            Energy API
                        </span>
                        <span className="text-xs text-indigo-500 font-medium">
                            Analytics Platform
                        </span>
                    </div>
                </div>
            </div>

            {/* NAV */}
            <div className="flex-1 overflow-y-auto space-y-6">

                {sections.map((section, sIndex) => (
                    <div key={sIndex}>
                        {/* SECTION TITLE */}
                        <p className="text-[11px] font-semibold text-gray-400 uppercase px-2 mb-2">
                            {section.section}
                        </p>

                        <div className="space-y-1">
                            {section.items.map((item, i) => {
                                const isActiveParent =
                                    item.submenu &&
                                    item.submenu.some((sub) =>
                                        location.pathname.startsWith(sub.link)
                                    );

                                return (
                                    <div key={i}>
                                        {item.submenu ? (
                                            <>
                                                {/* PARENT */}
                                                <button
                                                    onClick={() =>
                                                        toggleSubmenu(item.name)
                                                    }
                                                    className={`group relative flex items-center justify-between w-full px-3 py-2.5 rounded-xl transition ${openMenu === item.name || isActiveParent
                                                        ? "bg-indigo-50 text-indigo-600"
                                                        : "text-gray-500 hover:bg-gray-100"
                                                        }`}
                                                >
                                                    {/* LEFT INDICATOR */}
                                                    {(isActiveParent || openMenu === item.name) && (
                                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-indigo-600 rounded-r"></span>
                                                    )}

                                                    <div className="flex items-center gap-3">
                                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600">
                                                            {item.icon}
                                                        </span>
                                                        <span className="text-sm font-medium">
                                                            {item.name}
                                                        </span>
                                                    </div>

                                                    <ChevronDown
                                                        className={`w-4 h-4 transition-transform ${openMenu === item.name
                                                            ? "rotate-180"
                                                            : ""
                                                            }`}
                                                    />
                                                </button>

                                                {/* SUBMENU */}
                                                <AnimatePresence>
                                                    {openMenu === item.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="ml-11 mt-1 space-y-1 overflow-hidden"
                                                        >
                                                            {item.submenu.map((sub, j) => (
                                                                <NavLink
                                                                    key={j}
                                                                    to={sub.link}
                                                                    onClick={closeSidebar}
                                                                    className={({ isActive }) =>
                                                                        `block px-3 py-1.5 rounded-md text-sm transition ${isActive
                                                                            ? "text-indigo-600 font-medium"
                                                                            : "text-gray-500 hover:text-indigo-600"
                                                                        }`
                                                                    }
                                                                >
                                                                    {sub.name}
                                                                </NavLink>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <NavLink
                                                to={item.link}
                                                onClick={closeSidebar}
                                                className={({ isActive }) =>
                                                    `group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${isActive
                                                        ? "bg-indigo-50 text-indigo-600"
                                                        : "text-gray-500 hover:bg-gray-100"
                                                    }`
                                                }
                                            >
                                                {({ isActive }) => (
                                                    <>
                                                        {isActive && (
                                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-indigo-600 rounded-r"></span>
                                                        )}

                                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600">
                                                            {item.icon}
                                                        </span>

                                                        <span className="text-sm font-medium">
                                                            {item.name}
                                                        </span>
                                                    </>
                                                )}
                                            </NavLink>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* USER */}
            <div className="mt-6">
                <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <img
                        src={defultUser}
                        alt="User"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate">
                            {auth?.user?.username || "User"}
                        </p>
                        <p className="text-xs text-indigo-500 capitalize">
                            {auth?.role}
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default DashSide;