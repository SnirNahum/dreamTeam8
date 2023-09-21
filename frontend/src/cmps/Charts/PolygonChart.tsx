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
          fontFamily: undefined,
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
          "Involvment",
          "Goals",
          "Points next",
          "Points now",
          "Assists",
          "Pts/Per game",
        ],
        labels: { rotate: 90 },
      },
      yaxis: {
        tickAmount: 6,
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
          player1.expected_goal_involvements_per_90,
          player1.expected_goals_per_90,
          player1.ep_next,
          player1.ep_this,
          player1.expected_assists_per_90,
          player1.points_per_game,
        ],
      },
      {
        name: player2.web_name,
        data: [
          player2.expected_goal_involvements_per_90,
          player2.expected_goals_per_90,
          player2.ep_next,
          player2.ep_this,
          player2.expected_assists_per_90,
          player2.points_per_game,
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
