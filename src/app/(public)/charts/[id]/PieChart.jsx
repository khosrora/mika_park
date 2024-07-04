"use client";
import React, { useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, getElementsAtEvent } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["کارهای انجام شده", "کارهای انجام نشده"],
  datasets: [
    {
      label: "ارقام به درصد ثبت شده اند",
      data: [12, 19],
      backgroundColor: ["#071952", "#A91D3A"],
      borderColor: ["#071952", "#A91D3A"],
      borderWidth: 1,
    },
  ],
};

export const dataDone = {
  labels: ["آسفالت کشی", "پارکینگ", "پارک", "باشگاه", "کافی شاپ"],
  datasets: [
    {
      label: "٪",
      data: [20, 20, 20, 30, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const dataTask = {
  labels: ["اتاق", "دیوارکشی", "لوله کشی", "آسانسور", "برق کشی"],
  datasets: [
    {
      label: "٪",
      data: [20, 20, 20, 20, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function PieChart({ chart }) {

  const [dataGraph, setDataGraph] = useState(data);
  const chartRef = useRef();
  const onClick = (e) => {
    const clickData = getElementsAtEvent(chartRef.current, e);
    if (clickData.length > 0) {
      const dataSet = clickData[0].datasetIndex;
      const index = clickData[0].index;
      console.log(dataSet);
      console.log(index);
      if (index === 0) {
        setDataGraph(dataDone);
      } else {
        setDataGraph(dataTask);
      }
    }
  };
  return (
    <div className="h-[20rem]">
      <Pie data={dataGraph} onClick={onClick} ref={chartRef} />
    </div>
  );
}

export default PieChart;
