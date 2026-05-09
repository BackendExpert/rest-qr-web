import React, { useState } from "react";
import Dropdown from "../../../component/Form/Dropdown";
import topitemdata from "./TopItemData";
import { FaStar } from "react-icons/fa6";
import DefaultButton from "../../../component/Buttons/DefaultButton";


const TopItems = () => {

    const dropdownmenu = [
        { name: "Last Week", value: "last_week" },
        { name: "Last Month", value: "last_month" },
        { name: "All the Time", value: "all_time" },
    ];

    const [selected, setSelected] = useState("last_week");

    const filteredItems = topitemdata
        .filter((item) => item.type.includes(selected))
        .slice(0, 4);
    return (
        <div className="w-full md:py-4 py-6">

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-xl font-bold text-gray-800">
                    Trending Menu
                </h1>

                <div className="w-[180px]">

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

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5">

                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 bg-white border border-orange-100 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
                    >
                        <div className="">
                            <img
                                src={item.image}
                                className="w-full h-40 object-cover rounded-xl"
                                alt={item.name}
                            />
                        </div>

                        <div className="pt-2">
                            <h2 className="font-semibold text-gray-800">
                                {item.name}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {item.submenu}
                            </p>

                            <div className="flex justify-between mt-3">
                                <p className="text-gray-600 text-sm">
                                    <div className="flex">
                                        <FaStar size={16}/>
                                        <p className="px-1">{item.ratings}</p>
                                    </div>
                                </p>
                                <p className="text-orange-500 font-bold">
                                    $ {item.price}
                                </p>

                            </div>
                        </div>
                    </div>
                ))}

                <div className="">
                    <a href="">
                        <DefaultButton 
                            type="button"
                            label="View More Trending Menu"
                        />
                    </a>
                </div>

            </div>

        </div>
    );
};

export default TopItems;