/* eslint-disable no-unused-vars */
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js"

import {Pie} from "react-chartjs-2"

import React from 'react'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

function PieCharts2() {

   const data = {
    labels:["Erkak","Ayol"],
    datasets: [
        {
            label: 'Jinslar bo`yicha ma`lumotlar',
            data: [
              { label: 'ЭРКАК'+" "+"77%", count: 719, percentage: 77.89815817984832 },
              { label: 'АЁЛ'+" "+"23%", count: 204, percentage: 22.10184182015168 },
            ],
            backgroundColor: ['#95A4FC', '#FF4747'], // Har bir jinsga mos ranglar
            borderColor: ['#FFF', '#FFF'], // Har bir jinsga mos ranglar
            borderWidth: 5,
            hoverBackgroundColor: ['#95A4FA', '#FB4747'],
          },
      ],
   }
   const options = {}

  return (
    <div>
        PieCharts2
    <div style={{width:"500px",padding:"20px"}}>
     <Pie
    data={{
      labels: data.datasets[0].data.map(item => item.label),
      datasets: [
        {
            label: data.datasets[0].label,
            data: data.datasets[0].data.map(item => item.count),
            backgroundColor: data.datasets[0].backgroundColor,
            borderColor: data.datasets[0].borderColor,
            borderWidth: data.datasets[0].borderWidth,
            hoverBackgroundColor: data.datasets[0].hoverBackgroundColor,
          },
      ],
    }}
  />
    </div>
    </div>
  ) 
}

export default PieCharts2