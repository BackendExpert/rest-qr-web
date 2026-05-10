import React from "react";
import ReactECharts from "echarts-for-react";

const PieChart = ({
    label = [],
    data = [],
    titlecolors = [],
}) => {

    const seriesData = label.map((name, index) => ({
        name,
        value: data[index] || 0,
        itemStyle: {
            color: titlecolors[index] || "#f97316",
        },
    }));

    const option = {
        tooltip: {
            trigger: "item",
            formatter: () => "", 
        },

        legend: {
            show: false,
        },

        series: [
            {
                name: "Pie",
                type: "pie",
                radius: ["40%", "70%"],
                center: ["50%", "45%"],

                avoidLabelOverlap: false,

                itemStyle: {
                    borderRadius: 6,
                    borderColor: "#fff",
                    borderWidth: 2,
                },

                label: {
                    show: false, 
                },

                labelLine: {
                    show: false,
                },

                emphasis: {
                    label: {
                        show: false, 
                    },
                },

                data: seriesData,
            },
        ],
    };

    return (
        <div className="w-full h-[350px] bg-white rounded-2xl p-4 flex flex-col overflow-hidden">

    
            <div className="flex-1">
                <ReactECharts
                    option={option}
                    style={{ height: "100%", width: "100%" }}
                />
            </div>

    
            <div className="grid grid-cols-2 gap-4 mt-2">

                {label.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">

                        <div
                            className="w-3 h-3 rounded-sm"
                            style={{
                                backgroundColor: titlecolors[index] || "#000",
                            }}
                        />

                        <span className="text-sm text-gray-700 font-medium">
                            {item}: {data[index]}
                        </span>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default PieChart;