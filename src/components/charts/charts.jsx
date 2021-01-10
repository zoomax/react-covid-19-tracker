import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api/index";
import styles from "./charts.module.css";

export default function Charts({ data, country }) {
  const [dailyData, setDailyData] = useState(() => []);
  useEffect(() => {
    const getChartData = async function () {
      setDailyData(await fetchDailyData());
    };
    getChartData();
  }, []);

  console.log(data)
  
  return (
    <div className={styles.container}>
      {!country ? dailyData.length > 0 ?
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "rgba(0,0,250, 0.6)",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "rgba(250,0,0, 0.6)",
              backgroundColor: "red",
              fill: true,
            },
          ],
        }}
      />
    : 
     null :  <Bar
     data={{
       labels: ["infected", "Recovered", "Deaths"],
       datasets: [
         {
           label: "people",
           backgroundColor: [
             "rgba(0,0,250 , 0.6)",
             "rgba(0,250,0 , 0.6)",
             "rgba(250,0,0 , 0.6)",
           ],
           data: [data.confirmed.value, data.recovered.value, data.deaths.value],
         },
       ],
     }}
     options={{
       legend: { display: false },
       title: {
         display: true,
         text: "Current state in " + country,
       },
     }}
   />}
    </div>
  );
}
