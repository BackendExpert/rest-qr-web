import React, { useState } from 'react'
import LineChart from '../../../component/Charts/LineChart'
import Dropdown from '../../../component/Form/Dropdown';
import PieChart from '../../../component/Charts/PieChart';
import BarChart from '../../../component/Charts/BarChart';
import OrderTypes from './OrderTypes';


const ChartData = () => {
    const dropdownmenu = [
        { name: "Last Week", value: "last_week" },
        { name: "Last Month", value: "last_month" },
        { name: "All the Time", value: "all_time" },
    ];

    const [selected, setSelected] = useState("last_week");
    const [pieselected, setPieSelected] = useState("last_week")
    const [orderselected, setOrderSelected] = useState("last_week")

    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const todayIndex = (new Date().getDay() + 6) % 7;

    return (
        <div className='md:mr-3'>
            <div className="xl:flex">
                <div className="xl:w-2/3 w-full mr-2">

                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between mx-4">
                            <div className="">
                                <p className="text-gray-500">Total Revenue</p>
                                <h1 className="text-2xl font-bold">$ 185,550</h1>
                            </div>
                            <div className="">
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
                        <div className="">
                            <LineChart
                                linetitle={['Income', 'Expenses']}
                                xaxis={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                                yaxis={[
                                    [120, 200, 150, 280, 190, 220, 310, 260, 180, 290, 340, 400],
                                    [80, 140, 210, 160, 300, 250, 200, 280, 320, 210, 260, 350],
                                ]}
                                linecolor={["#f97316", "#333333"]}
                            />
                        </div>

                    </div>

                    <div className="bg-white p-4 rounded-lg mt-4">
                        <div className="flex justify-between mx-4">
                            <div className="">
                                <p className="text-gray-500 2xl mt-4">Orders Overview</p>
                            </div>
                            <div className="">
                                <Dropdown
                                    label={
                                        dropdownmenu.find(d => d.value === orderselected)?.name
                                    }
                                    items={dropdownmenu.map((item) => ({
                                        name: item.name,
                                        onClick: () => setOrderSelected(item.value),
                                    }))}
                                />
                            </div>
                        </div>
                        <div className="">
                            <BarChart
                                label={labels}
                                data={[120, 200, 150, 300, 200, 750, 1220]}
                                color="#f97316"
                                selectedlabel={labels[todayIndex]}
                            />
                        </div>

                    </div>
                </div>
                <div className="xl:w-1/3 w-full xl:mt-0 mt-4 ">
                    <div className="xl:block md:flex">
                        <div className="xl:w-full md:w-1/2 bg-white rounded-lg p-3 xl:ml-2">
                            <div className="flex justify-between">
                                <div className="p-4">
                                    <p className="text-xl font-semibold">Top Categories</p>
                                </div>
                                <div className="">
                                    <Dropdown
                                        label={
                                            dropdownmenu.find(d => d.value === pieselected)?.name
                                        }
                                        items={dropdownmenu.map((item) => ({
                                            name: item.name,
                                            onClick: () => setPieSelected(item.value),
                                        }))}
                                    />
                                </div>
                            </div>
                            <PieChart
                                label={["SeaFoods", "Beverages ", "Dessert", "Pasta"]}
                                data={[400, 200, 200, 200]}
                                titlecolors={["#fd6d1c", "#ffcda3", "#ffede2", "#343434"]}
                            />
                        </div>

                        <div className="xl:w-full h-full md:w-1/2 bg-white rounded-lg p-3 xl:ml-2 md:ml-4 xl:mt-4 mt-4">
                            <div className="flex justify-between">
                                <div className="p-4">
                                    <p className="text-xl font-semibold">Top Categories</p>
                                </div>
                                <div className="">
                                    <Dropdown
                                        label={
                                            dropdownmenu.find(d => d.value === pieselected)?.name
                                        }
                                        items={dropdownmenu.map((item) => ({
                                            name: item.name,
                                            onClick: () => setPieSelected(item.value),
                                        }))}
                                    />
                                </div>
                            </div>
                            <div className="">
                                <OrderTypes />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChartData