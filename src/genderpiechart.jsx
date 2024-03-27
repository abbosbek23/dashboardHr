// import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['ЭРКАК', 'АЁЛ','ЭРКАК Фоиз','АЁЛ Фоиз'],
  datasets: [
    {
      data: [719, 204, 77.89815817984832, 22.10184182015168],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    },
  ],
};

const GenderPieChart = () => (
  <div style={{ width: '400px', height: '400px' }}>
    <Doughnut data={data} />
  </div>
);

export default GenderPieChart;
