import React from 'react'

const DashFooter = () => {
    return (
        <footer className="w-full px-8 py-5">

            <div className="flex flex-col md:flex-row items-center justify-between gap-3">

                <p className="text-sm text-gray-400 font-medium text-center md:text-left">
                    Copyright &copy; {new Date().getFullYear()} Jehan Restaurants —
                    Developed & Maintained by{" "}
                    <a
                        href="https://www.blackalphalabs.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-orange-500 transition-all duration-300"
                    >
                        BlackAlphaLabs PVT.Ltd
                    </a>
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold tracking-wide">

                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

                    <span>
                        DASHBOARD VERSION v1.0.0
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default DashFooter