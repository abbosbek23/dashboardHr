/* eslint-disable react/prop-types */
// import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EmployeeAgeDistribution = ({ agegroups }) => {
  const chartDatas = agegroups ? Object.entries(agegroups).map(([ageRange, value]) => ({ name: ageRange, value: value })) : [];
  // console.log(chartDatas.map(data=>data.value));
  const chartData = {
    labels: ['30', '30-40', '40-50', '50-60', '60 +'],
    datasets: [
      {
        label: 'Employee age dynamics',
        data: chartDatas.map(data => data.value),
        backgroundColor: ["#95A4FC", "#BAEDBD", "#1C1F21", "#B1E3FF", "#FFE999"],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barThickness: 35,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    elements: {
      bar: {
        borderRadius: 5,
        borderWidth: 1,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Employee Age Distribution',
      },
    },
  };

  return (
    <div style={{ height: "278px", width: "283px" }}>
      <Bar height={0} data={chartData} options={options} />
    </div>
  );
};

export default EmployeeAgeDistribution;
