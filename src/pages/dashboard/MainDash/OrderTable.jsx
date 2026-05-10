import React, { useState } from 'react'
import DefaultInput from '../../../component/Form/DefaultInput'
import Dropdown from '../../../component/Form/Dropdown';
import DefaultButton from '../../../component/Buttons/DefaultButton';

const OrderTable = () => {
    const dropdownmenu = [
        { name: "Last Week", value: "last_week" },
        { name: "Last Month", value: "last_month" },
        { name: "All the Time", value: "all_time" },
    ];

    const [selected, setSelected] = useState("last_week");

    const orders = [
        { id: "#1001", amount: 1200, customer: "John Doe", status: "Paid" },
        { id: "#1002", amount: 850, customer: "Sarah Lee", status: "Pending" },
        { id: "#1003", amount: 430, customer: "Mike Ross", status: "Paid" },
        { id: "#1004", amount: 980, customer: "Emma Stone", status: "Cancelled" },
        { id: "#1005", amount: 1500, customer: "David John", status: "Paid" },
    ];

    return (
        <div className='bg-white p-4 rounded-lg'>
            <div className="md:flex justify-between">
                <div className="">
                    <h1 className="text-xl text-gray-500">Recent Orders</h1>
                </div>
                <div className="md:flex">
                    <div className="">
                        <DefaultInput
                            placeholder={"Search Orders"}
                        />
                    </div>
                    <div className="mx-4 md:my-0 my-4">
                        <Dropdown
                            label={
                                dropdownmenu.find(d => d.value === selected)?.name
                            }
                            items={dropdownmenu.map((item) => ({
                                name: item.name,
                                onClick: () => setSelected(item.value),
                            }))}
                        />
                    </div>
                    <div className="md:my-0 my-2">
                        <a href="">
                            <DefaultButton
                                type='button'
                                label='View More Orders'
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-100">

                <table className="w-full text-sm">

                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                        <tr>
                            <th className="p-4 text-left">Order ID</th>
                            <th className="p-4 text-left">Customer</th>
                            <th className="p-4 text-left">Amount</th>
                            <th className="p-4 text-left">Status</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">

                        {orders.map((order, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 transition-all duration-200"
                            >

                                <td className="p-4 font-medium text-gray-800">
                                    {order.id}
                                </td>

                                <td className="p-4 text-gray-600">
                                    {order.customer}
                                </td>

                                <td className="p-4 font-semibold text-gray-800">
                                    ${order.amount}
                                </td>

                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === "Paid"
                                        ? "bg-green-100 text-green-600"
                                        : order.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : "bg-red-100 text-red-600"
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default OrderTable