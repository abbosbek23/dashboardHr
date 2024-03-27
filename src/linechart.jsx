import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const labels = ["2017","2018","2019","2020","2021"]

const options = {
    plugins:{
        legend:{
            position:"bottom"
        }
    }
}

export const data = {
    labels,
    datasets : [
        {
            label:"React",
            data:[32,44,25,72,90],
            backgroundColor:"#033b74",
            borderColor:"#033b74"
        },
        {
            label:"Angular",
            data:[20,34,45,12,70],
            backgroundColor:"#F44236",
            borderColor:"#F44236"
        },
        {
            label:"Vue",
            data:[12,64,35,41,60],
            backgroundColor:"#FFCA29",
            borderColor:"#FFCA29"
        },
    ]
}

const LineChart = () => {
  return(
   <div style={{width:"400px",height:"300px"}}>
    <Line options={options} data={data}/>
   </div>
  )
}
export default LineChart