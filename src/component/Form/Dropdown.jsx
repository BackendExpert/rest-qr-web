import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ label, icon: Icon, items = [] }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative w-full bg-white rounded-lg shadow">


            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-orange-600 hover:bg-orange-50 transition-all duration-300 group"
            >
                <div className="flex items-center gap-3">
                    {Icon && (
                        <Icon className="text-orange-500 group-hover:scale-110 transition-all" size={18} />
                    )}

                    <span className="font-medium text-sm">
                        {label}
                    </span>
                </div>

                <ChevronDown
                    size={18}
                    className={`text-orange-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && (
                <div className="absolute right-0 mt-3 w-64 bg-white border border-orange-100 rounded-2xl overflow-hidden shadow-lg z-50 animate-fadeIn">

                    <div className="p-2">

                        {items.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    item.onClick?.();
                                    setOpen(false);
                                }}
                                className="w-full text-left px-3 py-2 rounded-lg text-sm text-orange-500 hover:bg-orange-50 hover:text-orange-600 transition-all"
                            >
                                {item.name}
                            </button>
                        ))}

                    </div>

                </div>
            )}

        </div>
    );
};

export default Dropdown;