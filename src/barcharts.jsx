import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const LanguageChart = () => {
  const [proficiencyData, setProficiencyData] = useState(null);

  useEffect(() => {
    // Fetch data from backend
    fetch('https://dev.ikramovna.me/api/v1/language/info')
      .then(response => response.json())
      .then(data => setProficiencyData(data.language_proficiency))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Check if proficiencyData is null or undefined
  if (!proficiencyData) {
    return <div>Loading...</div>; // Return a loading indicator while data is being fetched
  }

  // Extracting labels and data from proficiencyData
  const languages = Object.keys(proficiencyData);
  const proficiencyLevels = Object.keys(proficiencyData[languages[0]]);
  const chartData = proficiencyLevels.map((level) => ({
    label: level,
    data: languages.map((lang) => proficiencyData[lang][level]),
  }));

  // Chart Configuration
  const chartConfig = {
    labels: languages,
    datasets: proficiencyLevels.map((level, index) => ({
      label: level,
      data: chartData[index].data,
      backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color for bars
      borderColor: 'rgba(54, 162, 235, 1)', // Blue color for border
      borderWidth: 1,
      barThickness: 7,
    })),
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    height: 80,
    width: 300,
  };

  return (
    <div style={{ height: '230px', width: "280px", marginLeft: "0px", marginRight: "0px" }}>
      {/* Adjust the height here */}
      <Bar data={chartConfig} width={330} options={options} />
    </div>
  );
};

export default LanguageChart;
