import React from "react";
import ReactECharts from "echarts-for-react";

const BarChart = ({
    label = [],
    data = [],
    color = "#f97316",
    selectedlabel = "",
}) => {

    const fadeColor = (hex, opacity = 0.3) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const seriesData = label.map((item, index) => ({
        value: data[index] || 0,

        itemStyle: {
            color:
                item === selectedlabel
                    ? color
                    : fadeColor(color, 0.25),
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
            top: "8%",
            containLabel: true,
        },

        xAxis: {
            type: "category",
            data: label,
            axisLine: {
                lineStyle: {
                    color: "#d1d5db",
                },
            },
            axisLabel: {
                color: "#6b7280",
            },
        },

        yAxis: {
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#d1d5db",
                },
            },
            splitLine: {
                lineStyle: {
                    color: "#f3f4f6",
                },
            },
            axisLabel: {
                color: "#6b7280",
            },
        },

        series: [
            {
                type: "bar",
                barWidth: "40%",
                data: seriesData,
                itemStyle: {
                    borderRadius: [6, 6, 0, 0],
                },
            },
        ],
    };

    return (
        <div className="w-full h-[350px] bg-white rounded-2xl p-4">
            <ReactECharts
                option={option}
                style={{ height: "100%", width: "100%" }}
            />
        </div>
    );
};

export default BarChart;