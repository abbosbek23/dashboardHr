import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const LanguageChart = () => {
  const [proficiencyData, setProficiencyData] = useState(null);
  const [selectedGender, setSelectedGender] = useState('default');

  useEffect(() => {
    // Fetch data from backend
    fetch('https://dev.ikramovna.me/api/v1/language')
      .then(response => response.json())
      .then(data => setProficiencyData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  // Check if proficiencyData is null or undefined
  if (!proficiencyData) {
    return <div>Loading...</div>; // Return a loading indicator while data is being fetched
  }

  const genderData = selectedGender === 'default' ? proficiencyData.default : proficiencyData[selectedGender];

  // Extracting labels and data from proficiencyData
  const languages = Object.keys(genderData);
  const proficiencyLevels = Object.keys(genderData[languages[0]]);
  const chartData = proficiencyLevels.map((level) => ({
    label: level,
    data: languages.map((lang) => genderData[lang][level]),
  }));

  // Chart Configuration
  const chartConfig = {
    labels: languages,
    datasets: proficiencyLevels.map((level, index) => ({
      label: level,
      data: chartData[index].data,
      backgroundColor: ['#95A4FC','rgba(149, 164, 252, 0.70)','rgba(149, 164, 252, 0.35)'], // Blue color for bars
      borderColor: 'rgba(54, 162, 235, 1)', // Blue color for border
      borderWidth: 1,
      barThickness: 40,
      borderRadius: 5,
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
        text: 'Language Proficiency Distribution',
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    height: 80,
    width: 260,
    animation: {
      duration: 1000, // Add animation to the bars
    },
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px',marginTop:"10px" }}>
        <button onClick={() => handleGenderChange('default')} style={buttonStyle}>All Statistics</button>
        <button onClick={() => handleGenderChange('male')} style={buttonStyle}>Male</button>
        <button onClick={() => handleGenderChange('woman')} style={buttonStyle}>Female</button>
      </div>
      <div style={{ height: '380px', width: "100%", marginLeft: "0px", marginRight: "0px" }}>
        <Bar data={chartConfig} width={330} options={options} />
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '5px',
  border: 'none',
  marginRight: '10px',
  marginLeft: '10px',
  backgroundColor: '#fff',
  color: '#000',
  cursor: 'pointer',
};

export default LanguageChart;
