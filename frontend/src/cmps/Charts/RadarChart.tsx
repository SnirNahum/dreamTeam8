import { useEffect } from "react";
import RadarController from "chart.js/auto";
import data1 from "../../services/data.json";

const RadarChart = () => {
  useEffect(() => {
    const aaa = data1.elements;

    const data = {
      labels: ["ex.goals", "ex.assits", "ex.involvements", "ex.conceded"],
      datasets: [
        {
          label: aaa[426].web_name,
          data: [
            aaa[426].expected_goals,
            aaa[426].expected_assists,
            aaa[426].expected_goal_involvements,
            aaa[426].expected_goals_conceded,
          ],
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
        {
          label: aaa[414].web_name,
          data: [
            aaa[414].expected_goals,
            aaa[414].expected_assists,
            aaa[414].expected_goal_involvements,
            aaa[414].expected_goals_conceded,
          ],
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBackgroundColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(54, 162, 235)",
        },
      ],
    };

    const chart = new RadarController(document.getElementById("radarChart"), {
      type: "radar",
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div style={{ width: "375px" }}>
      <canvas id="radarChart"></canvas>
    </div>
  );
};

export default RadarChart;
