import React, { useEffect, useRef, useState } from "react";
import {
    LayoutDashboard,
    ClipboardList,
    ShoppingBag,
    Users,
    Settings,
    Bell,
    FileText,
    ChevronDown,
    ChevronRight,
    Flame,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const DashSide = () => {
    const [openMenu, setOpenMenu] = useState("Orders");

    const location = useLocation();
    const menuRef = useRef(null);

    const toggleMenu = (name) => {
        setOpenMenu(openMenu === name ? null : name);
    };

    // ✅ FIX 1: Scroll sidebar to top (optional)
    useEffect(() => {
        if (menuRef.current) {
            menuRef.current.scrollTop = 0;
        }
    }, [location.pathname]);

    // ✅ FIX 2: Scroll MAIN PAGE to top (this is what you actually want)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const menus = [
        {
            title: "MAIN MENU",
            items: [
                {
                    name: "Dashboard",
                    icon: <LayoutDashboard size={18} />,
                    link: "/dashboard",
                },
                {
                    name: "Orders",
                    icon: <ClipboardList size={18} />,
                    submenu: [
                        { name: "All Orders", link: "/dashboard/orders" },
                        { name: "Pending Orders", link: "/dashboard/order/pending" },
                        { name: "Completed Orders", link: "/dashboard/order/completed" },
                    ],
                },
                {
                    name: "Foods",
                    icon: <ShoppingBag size={18} />,
                    submenu: [
                        { name: "All Foods", link: "/dashboard/foods" },
                        { name: "Add Food", link: "/dashboard/food/create" },
                        { name: "Categories", link: "/dashboard/food/categories" },
                    ],
                },
                {
                    name: "Customers",
                    icon: <Users size={18} />,
                    link: "/dashboard/customers",
                },
                {
                    name: "Reports",
                    icon: <FileText size={18} />,
                    link: "/dashboard/reports",
                },
                {
                    name: "Notifications",
                    icon: <Bell size={18} />,
                    link: "/dashboard/notifications",
                },
                {
                    name: "Settings",
                    icon: <Settings size={18} />,
                    link: "/dashboard/settings",
                },
            ],
        },
    ];

    return (
        <div className="w-full h-screen bg-white border-r border-orange-100 flex flex-col overflow-hidden">

            {/* Scrollbar style */}
            <style>
                {`
                    ::-webkit-scrollbar {
                        width: 4px;
                    }
                    ::-webkit-scrollbar-thumb {
                        background: #f97316;
                        border-radius: 20px;
                    }
                    * {
                        scrollbar-width: thin;
                    }
                `}
            </style>

            {/* Logo */}
            <div className="px-5 py-5 border-b border-orange-100 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-orange-500 flex items-center justify-center">
                        <Flame className="text-white" size={22} />
                    </div>

                    <div>
                        <h1 className="text-lg font-bold text-gray-800">
                            Restaurant
                        </h1>
                        <p className="text-xs text-gray-400">
                            Admin Panel
                        </p>
                    </div>
                </div>
            </div>

            {/* Menus */}
            <div
                ref={menuRef}
                className="flex-1 overflow-y-auto px-3 py-4"
            >
                {menus.map((section, index) => (
                    <div key={index}>
                        <h2 className="text-[11px] tracking-[2px] font-semibold text-gray-400 mb-3 px-3">
                            {section.title}
                        </h2>

                        <div className="space-y-1">
                            {section.items.map((item, i) => (
                                <div key={i}>

                                    {item.submenu ? (
                                        <>
                                            <button
                                                onClick={() => toggleMenu(item.name)}
                                                className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-gray-700 hover:bg-orange-50 transition-all"
                                            >
                                                <div className="flex items-center gap-3">
                                                    {item.icon}
                                                    <span className="text-sm font-medium">
                                                        {item.name}
                                                    </span>
                                                </div>

                                                {openMenu === item.name ? (
                                                    <ChevronDown size={16} />
                                                ) : (
                                                    <ChevronRight size={16} />
                                                )}
                                            </button>

                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${
                                                    openMenu === item.name
                                                        ? "max-h-[300px] opacity-100 mt-1"
                                                        : "max-h-0 opacity-0"
                                                }`}
                                            >
                                                <div className="ml-5 border-l border-orange-100 pl-3 space-y-1">
                                                    {item.submenu.map((sub, subIndex) => (
                                                        <NavLink
                                                            key={subIndex}
                                                            to={sub.link}
                                                            className={({ isActive }) =>
                                                                `block px-3 py-2 rounded-lg text-sm transition ${
                                                                    isActive
                                                                        ? "bg-orange-500 text-white"
                                                                        : "text-gray-500 hover:bg-orange-50"
                                                                }`
                                                            }
                                                        >
                                                            {sub.name}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <NavLink
                                            to={item.link}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition ${
                                                    isActive
                                                        ? "bg-orange-500 text-white"
                                                        : "text-gray-700 hover:bg-orange-50"
                                                }`
                                            }
                                        >
                                            {item.icon}
                                            {item.name}
                                        </NavLink>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-orange-100 shrink-0">
                <div className="bg-orange-500 rounded-xl p-3 text-white">
                    <p className="text-sm font-semibold">
                        Restaurant Pro
                    </p>
                    <p className="text-xs opacity-90 mt-1">
                        Smart management system
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashSide;