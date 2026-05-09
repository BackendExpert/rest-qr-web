import React from 'react'
import { FaUsers, FaClipboardList, FaDollarSign } from "react-icons/fa6";

const CardData = () => {

    const dashdata = [
        {
            id: 1,
            name: "Total Customers",
            icon: FaUsers,
            total: 1520,
        },
        {
            id: 2,
            name: "Total Orders",
            icon: FaClipboardList,
            total: 48592,
        },
        {
            id: 3,
            name: "Total Income",
            icon: FaDollarSign,
            total: 258420,
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {
                dashdata.map((data, index) => {
                    const Icon = data.icon

                    return (
                        <div
                            key={index}
                            className="bg-white p-5 rounded-xl border border-orange-100 flex items-center hover:scale-[1.02] transition-all duration-300"
                        >

                            <div className="bg-orange-500 p-4 rounded-xl flex items-center justify-center">
                                <Icon size={28} className="text-white" />
                            </div>

                            <div className="ml-5 w-full">

                                <p className="text-gray-500 text-sm font-medium tracking-wide">
                                    {data.name}
                                </p>

                                <div className="flex justify-between items-center mt-1">

                                    {
                                        data.name === "Total Income" ?
                                            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                                                $ {Number(data.total || 0).toLocaleString()}.00
                                            </h1>
                                            :
                                            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                                                {Number(data.total || 0).toLocaleString()}
                                            </h1>
                                    }

                                </div>

                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default CardData