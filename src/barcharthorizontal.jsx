import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarchartHorizontal = () => {
  const [educations, setEducations] = useState({});

  useEffect(() => {
    const getLanguageInfo = async () => {
      try {
        const { data } = await axios.get("http://64.227.121.87/api/v1/language/info");
        // console.log(data);
        setEducations(data.education);
      } catch (error) {
        // console.log(error);
      }
    };
    getLanguageInfo();
  }, []);

//   console.log(educations);

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 0,
        borderRadius: 10,
      },
    },
    responsive: true,
    legend: {
      labels: {
        fontSize: 23 // Labelning font o'lchami 23px
      }
    },
    title: {
      display: true,
      text: 'Education level distribution',
      fontSize: 30 // Title ning font o'lchami 30px
    },
  };

  const labels = ["Bachelor", "Master", "Incomplete Higher", "High", "Medium Special"];
  const chartDatas = educations ? Object.entries(educations).map(([ageRange, value]) => ({ name: ageRange, value: value })) : [];
//   console.log(chartDatas.map(data => data.value));
  const data = {
    labels,
    datasets: [
      {
        label: 'Education level distribution',
        data: chartDatas.map(data => data.value),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: ["#BAEDBD", "#95A4FC", "#FFE999", "#B1E3FF", "#C6C7F8"],
        barThickness: 15,
      },
    ],
  };

  return (
    <div style={{ height: "188px", width: "462px", marginLeft: "0px", marginRight: "0px" }}>
      <Bar style={{ marginLeft: "0px", marginRight: "0px" }} data={data} options={options} />
    </div>
  );
};

export default BarchartHorizontal;
