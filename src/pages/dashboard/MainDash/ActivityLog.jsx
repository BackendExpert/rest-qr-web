import React from 'react'
import { FaClipboardList, FaStar, FaUser } from 'react-icons/fa6'

const ActivityLog = () => {
    const activity = [
        {
            id: 1,
            name: "Jehan",
            role: "Member",
            activity: "Placed a new food order with extra cheese and spicy toppings",
            act_time: "10:00 AM",
            icon: FaUser
        },
        {
            id: 2,
            name: "Nimal",
            role: "Customer",
            activity: "Left a five star review after enjoying the seafood pasta dinner",
            act_time: "11:30 AM",
            icon: FaStar
        },
        {
            id: 3,
            name: "Kasun",
            role: "Admin",
            activity: "Updated restaurant menu items and added three brand new desserts",
            act_time: "01:15 PM",
            icon: FaClipboardList
        },
        {
            id: 4,
            name: "Sahan",
            role: "Admin",
            activity: "Approved new user registrations and verified restaurant partner accounts",
            act_time: "02:40 PM",
            icon: FaClipboardList
        },
    ]

    return (
        <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm transition-all duration-300">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-black">
                        Recent Activity
                    </h1>
                </div>

                <a
                    href=""
                    className="px-4 py-2 rounded-xl bg-orange-50 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                    View More
                </a>
            </div>

            {/* Activity List */}
            <div>
                {
                    activity.map((data, index) => {
                        const Icon = data.icon

                        return (
                            <div
                                className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-b-0 hover:bg-orange-50/40 rounded-xl px-2 transition-all duration-300"
                                key={data.id}
                            >
                                {/* Icon */}
                                <div className="bg-orange-100 p-3 rounded-xl text-orange-500">
                                    <Icon size={18} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h1 className="text-lg font-semibold text-black">
                                            {data.name}
                                        </h1>

                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                                            {data.role}
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-600 mt-1">
                                        {data.activity}
                                    </p>

                                    <p className="text-xs text-gray-400 mt-2">
                                        {data.act_time}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ActivityLog