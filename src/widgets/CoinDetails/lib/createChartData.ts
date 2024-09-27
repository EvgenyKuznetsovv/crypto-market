import ChartData from "../../../features/LinerChart/ui/types";
import { AssetHistoryData } from "../../../shared/api/types";

const formattedDate = (rawDate: string) => {
  const date = new Date(rawDate);

  return date.toLocaleString("ru-RU", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
  });
};

export function createChartData(historyData: AssetHistoryData[]): ChartData {
  const last50Values = historyData.slice(-50);

  return {
    labels: last50Values.map((d) => formattedDate(d.date)),
    datasets: [
      {
        label: `Цена`,
        data: last50Values.map((d) => +d.priceUsd),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
        borderWidth: 1,
      },
    ],
  };
}
