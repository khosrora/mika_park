"use client";
import SkDiv from "@/app/components/loading/SkDiv";
import { convertGraph, convertGraphSingle } from "@/utils/functions";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { useEffect, useRef, useState } from "react";
import { getElementsAtEvent, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ chart }) {
  const [level, setLevel] = useState(0);
  const [firstData, setFirstData] = useState();

  const chartRef = useRef();

  const onClick = (e) => {
    if (level === 1) {
      const res = convertGraph(chart.charts);
      setFirstData(res);
      setLevel(0);
    } else {
      const clickData = getElementsAtEvent(chartRef.current, e);
      if (clickData.length > 0) {
        // const dataSet = clickData[0].datasetIndex;
        const index = clickData[0].index;
        const res = convertGraphSingle(chart.charts, index);
        setFirstData(res);
        setLevel(1);
      }
    }
  };

  useEffect(() => {
    if (!!chart) {
      const res = convertGraph(chart.charts);
      setFirstData(res);
    }
  }, [chart]);

  if (!firstData) return <SkDiv />;
  return (
    <div className="h-[20rem]">
      <div className="flex justify-center items-start">
        <h1> {chart.label} </h1>
      </div>
      <Pie data={firstData} onClick={onClick} ref={chartRef} />
    </div>
  );
}

export default PieChart;
