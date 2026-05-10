import React from "react";
import ReactECharts from "echarts-for-react";

const LineChart = ({
    linetitle = [],
    xaxis = [],
    yaxis = [],
    linecolor = [],
}) => {

    const series = yaxis.map((data, index) => ({
        data,
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        lineStyle: {
            width: 3,
            color: linecolor[index] || "#f97316",
        },
        itemStyle: {
            color: linecolor[index] || "#f97316",
        },
        areaStyle: {
            opacity: 0.08,
            color: linecolor[index] || "#f97316",
        },
    }));

    const option = {
        tooltip: {
            trigger: "axis",
        },
        grid: {
            left: "3%",
            right: "3%",
            bottom: "3%",
            top: "10%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: xaxis,
            axisLine: {
                lineStyle: { color: "#d1d5db" },
            },
            axisLabel: {
                color: "#6b7280",
            },
        },
        yAxis: {
            type: "value",
            axisLine: {
                lineStyle: { color: "#d1d5db" },
            },
            splitLine: {
                lineStyle: { color: "#f3f4f6" },
            },
            axisLabel: {
                color: "#6b7280",
            },
        },
        series,
    };

    return (
        <div className="w-full h-[350px] bg-white rounded-2xl relative p-2">


            <div className="absolute top-2 right-2 flex items-center gap-4 z-30 bg-white px-3 py-1 mb-20">

                {linetitle?.map((title, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div
                            className="w-3 h-3 rounded-sm"
                            style={{
                                backgroundColor: linecolor[index] || "#000",
                            }}
                        />
                        <p className="text-sm font-medium text-black">
                            {title}
                        </p>
                    </div>
                ))}

            </div>

            {/* CHART */}
            <div className="w-full h-full">
                <ReactECharts
                    option={option}
                    style={{ height: "100%", width: "100%" }}
                />
            </div>

        </div>
    );
};

export default LineChart;