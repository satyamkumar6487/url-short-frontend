import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale, Legend);

const Graph = ({ graphData }) => {
  // Safe mapping
  const labels = graphData?.map((item) => item.date) || [];
  const userPerDay = graphData?.map((item) => item.clicks) || [];

  const data = {
    labels: labels.length > 0 ? labels : [""], // fallback empty
    datasets: [
      {
        label: "Total Clicks",          // label for legend
        data: userPerDay.length > 0 ? userPerDay : [0], // fallback empty
        backgroundColor: "#3b82f6",
        borderColor: "#1D2327",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // full container height
    plugins: {
      legend: {
        display: true,
        position: 'top',            // label top
        labels: {
          boxWidth: 20,             // small box
          boxHeight: 10,            // small height
          padding: 10,
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Clicks: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Number of Clicks" },
      },
      x: {
        title: { display: true, text: "Date" },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;

































