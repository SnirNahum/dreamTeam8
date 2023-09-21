import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import data1 from "../../services/data.json";

const PolygonChart = ({ player1, player2 }) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: player1.web_name,
        data: [20, 10, 40, 20, 50],
      },
      {
        name: player2.web_name,
        data: [60, 45, 70, 5, 30],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
      },

      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        radar: {
          size: 130,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"],
            },
          },
        },
      },
      colors: ["#FF4560", "#008FFB"],
      markers: {},
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
      xaxis: {
        categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      },
      yaxis: {
        tickAmount: 6,
        labels: {
          formatter: function (val: any, i: number) {
            if (i % 2 === 0) {
              return val;
            } else {
              return "";
            }
          },
        },
      },
    },
  });

  useEffect(() => {
    // Use useEffect to fetch data when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  const fetchData = () => {
    const fetchedData = data1.elements;

    // Update the state while preserving the existing properties
    setChartData((prevChartData) => ({
      ...prevChartData,
      series: chartData.series,
      options: chartData.options,
    }));
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radar"
        height={350}
      />
    </div>
  );
};

export default PolygonChart;
