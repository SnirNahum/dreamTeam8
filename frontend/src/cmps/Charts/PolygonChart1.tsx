import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const PolygonChart1 = ({ player1, player2 }: any) => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      title: {
        text: "Overview",
        align: "center",
        style: {
          fontSize: "15px",
          fontWeight: "bold",
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
        size: 5,
        hover: {
          size: 8,
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
        categories: ["Goals", "Yellow cards","Clean sheets","Assists"],
        labels: { rotate: 180 },
      },
      yaxis: {
        tickAmount: 4,
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
    const updatedSeries = generateSeriesData(player1, player2);

    setChartData({
      series: updatedSeries,
    });
  }, [player1, player2]);

  const generateSeriesData = (player1, player2) => {
    const seriesData = [
      {
        name: player1.web_name,
        data: [
          player1.goals_scored,
          player1.yellow_cards,
          player1.clean_sheets,
          player1.assists,
        ],
      },
      {
        name: player2.web_name,
        data: [
          player2.goals_scored,
          player2.yellow_cards,
          player2.clean_sheets,
          player2.assists,
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

export default PolygonChart1;
