import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const DashFooter = () => {
    const year = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "https://zenson.ai/" },
        { name: "Documentation", href: "#" },
        { name: "Support", href: "#" },
        { name: "Terms of Service", href: "#" },
    ];

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                {/* Left: Logo & Info */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <h1 className="text-indigo-600 font-bold text-lg">Energy API</h1>
                    <p className="text-gray-500 text-sm md:ml-2">
                        &copy; {year} Energy Analytics Platform. All rights reserved.
                    </p>
                </div>

                {/* Center: Quick Links */}
                <div className="flex flex-wrap gap-4">
                    {quickLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            className="text-gray-500 text-sm hover:text-indigo-600 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right: Social Icons */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-600 transition"
                    >
                        <FaTwitter className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-600 transition"
                    >
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-600 transition"
                    >
                        <FaGithub className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Bottom small note */}
            <div className="border-t border-gray-100 mt-4 py-2">
                <p className="text-center text-gray-400 text-xs">
                    Designed with ❤️ zenson.ai
                </p>
            </div>
        </footer>
    );
};

export default DashFooter;