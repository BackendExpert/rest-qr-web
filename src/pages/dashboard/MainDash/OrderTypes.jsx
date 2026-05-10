import React from 'react'
import { MdBrunchDining, MdFastfood } from "react-icons/md";
import { FaUserShield } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

const OrderTypes = () => {

    const orders = [
        {
            id: 1,
            icon: MdBrunchDining,
            title: "Dining",
            value: 500
        },
        {
            id: 2,
            icon: MdFastfood,
            title: "Take Away",
            value: 1200
        }
    ]

    const userorders = [
        {
            id: 1,
            icon: FaUserShield,
            title: "Members",
            value: 4500
        },
        {
            id: 2,
            icon: FaUsers,
            title: "Guest Users",
            value: 3200
        }
    ]

    const ordersTotal = orders.reduce((sum, item) => sum + item.value, 0);
    const usersTotal = userorders.reduce((sum, item) => sum + item.value, 0);

    const ItemCard = ({ icon, title, presentage, value }) => {
        const Icon = icon;

        return (
            <div className="flex items-center gap-3 w-full p-3 bg-white rounded-lg">

                <div className="bg-[#ffede2] p-2 rounded-lg">
                    <Icon size={22} className="text-orange-500" />
                </div>

                <div className="flex-1">

                    <div className="flex justify-between items-center">
                        <h1 className="text-sm font-medium">
                            {title} <span className='text-gray-500 ml-4'>{presentage}%</span>
                        </h1>

                        <p className="font-bold text-gray-900">
                            {value}
                        </p>
                    </div>

                    <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                        <div
                            className="h-2 bg-orange-500 rounded-full"
                            style={{ width: `${presentage}%` }}
                        />
                    </div>

                </div>

            </div>
        )
    }

    return (
        <div className="space-y-3">


            <div>
                {
                    orders.map((data, index) => {
                        return (
                            <div key={index}>
                                <ItemCard
                                    icon={data.icon}
                                    title={data.title}
                                    value={data.value}
                                    presentage={Math.round((data.value / ordersTotal) * 100)}
                                />
                            </div>
                        )
                    })
                }
            </div>


            <div>
                {
                    userorders.map((data, index) => {
                        return (
                            <div key={index}>
                                <ItemCard
                                    icon={data.icon}
                                    title={data.title}
                                    value={data.value}
                                    presentage={Math.round((data.value / usersTotal) * 100)}
                                />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default OrderTypes