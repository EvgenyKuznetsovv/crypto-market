import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

import ChartData from "./types";

Chart.register(...registerables);

export const LinerChart = ({ chartData }: { chartData: ChartData }) => {
  return (
    <Line
      data={chartData}
      options={{
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Дата",
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "USD",
            },
          },
        },
      }}
    />
  );
};
