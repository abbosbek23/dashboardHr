import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarchartHorizontal = () => {
  const [educations, setEducations] = useState({});

  useEffect(() => {
    const getLanguageInfo = async () => {
      try {
        const { data } = await axios.get("https://dev.ikramovna.me/api/v1/language/info");
        // console.log(data);
        setEducations(data.education);
      } catch (error) {
        // console.log(error);
      }
    };
    getLanguageInfo();
  }, []);

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 0,
        borderRadius: 10,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    title: {
      display: false,
      text: 'Education level distribution',
      fontSize: 30 // Title ning font o'lchami 30px
    },
  };

  const labels = ["Bachelor", "Master", "Incomplete Higher", "High", "Medium Special"];
  const chartDatas = educations ? Object.entries(educations).map(([ageRange, value]) => ({ name: ageRange, value: value })) : [];
  const data = {
    labels,
    datasets: [
      {
        label: 'Education level distribution',
        data: chartDatas.map(data => data.value),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: ["#BAEDBD", "#95A4FC", "#FFE999", "#B1E3FF", "#C6C7F8"],
        barThickness: 15,
        width:'100%'
      },
    ],
  };

  return (
    <div style={{ height: "200px", width: "100%", marginTop:"10px", marginLeft: "10px", marginRight: "0px" }}>
      <Bar style={{ marginLeft: "0px", marginRight: "0px" }} height={220} width={400} data={data} options={options} />
    </div>
  );
};

export default BarchartHorizontal;
