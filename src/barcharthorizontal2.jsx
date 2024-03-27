import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = () => { 
  const [data, setData] = useState(null);

  useEffect(() => {
    // Backenddan ma'lumotlarni olish uchun so'rovni yuborish
    fetch('http://64.227.121.87/api/v1/nationalities')
      .then(response => response.json())
      .then(data => setData(data[0]))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  // Ma'lumotlar
  const labels = ["O'zbeklar", "Ruslar", "Tatarlar", "Tojiklar", "Qozoqlar", "Boshqalar"];
  const dataValues = [
    data['ozbeklar_percent'],
    data['ruslar_percent'],
    data['tatarlar_percent'],
    data['tojiklar_percent'],
    data['qozoqlar_percent'],
    data['boshqalar_percent']
  ];

  // Grafikni yaratish
  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Foizlar',
      data: dataValues,
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  // Tooltip uchun ma'lumotlar
  const options = {
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          const label = data.labels[tooltipItem.index];
          const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return `${label}: ${value}%`;
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default Chart;
