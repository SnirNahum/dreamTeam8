import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const PolygonChart = ({ player1, player2 }: any) => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        height: 0,
        type: "radar",
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Expected Stats",
        align: "center",
        style: {
          fontSize: "20px",
          fontWeight: "regular",
          fontFamily:'Helvetica',
          color: "brown",
        },
      },
      plotOptions: {
        radar: {
          size: 130,
          offsetX: 3,
          offsetY: 0,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"],
            },
          },
        },
      },
      colors: ["#fee22c", "#a31751"],
      markers: {
        size: 4,
        hover: {
          size: 10,
        },
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
      xaxis: {
        categories: [
          "Pts/Per game",
          "Last game Pts",
          "Goals scored",
          "Total Pts.",

        ],
        labels: { rotate: 90 },
      },
      yaxis: {
        tickAmount: 4,
        labels: {
          // minWidth: 50,
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
    const updatedSeries = generateSeriesData(player1, player2);

    setChartData({
      series: updatedSeries,
    });
  }, [player1, player2]);

  // Function to generate series data based on player props
  const generateSeriesData = (player1, player2) => {
    // Implement your logic to generate series data based on player props
    const seriesData = [
      {
        name: player1.web_name,
        data: [
          player1.points_per_game,
          player1.event_points,
          player1.goals_scored,
          player1.clean_sheets,
        ],
      },
      {
        name: player2.web_name,
        data: [
          player2.points_per_game,
          player2.event_points,
          player2.goals_scored,
          player2.clean_sheets,
        ],
      },
    ];

    return seriesData;
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options || {}}
        series={chartData.series || {}}
        type="radar"
        height={350}
      />
    </div>
  );
};

export default PolygonChart;
