import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const PolygonChart1 = ({ player1, player2 }: any) => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        toolbar: {
          width: "20px",
          height: "50",
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: [],
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ",",
              headerCategory: "category",
              headerValue: "value",
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString();
              },
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: undefined,
            },
          },
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Expected Stats",
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
        categories: ["ict_index", "influence", "creativity", "threat"],
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
          player1.ict_index / 10,
          player1.influence / 10,
          player1.creativity / 10,
          player1.threat / 10,
        ],
      },
      {
        name: player2.web_name,
        data: [
          player2.ict_index / 10,
          player2.influence / 10,
          player2.creativity / 10,
          player2.threat / 10,
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
