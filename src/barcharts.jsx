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
      barThickness: 22,
      borderRadius:5
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
  };

  return (
    <div>
      <div style={{ paddingTop: "10px", paddingLeft: "10px",textAlign:"center"}}>
        <select onChange={(e) => handleGenderChange(e.target.value)} style={{ padding: '3px', borderRadius: '5px', borderColor: '#ccc', fontSize: '14 px' }}>
          <option value="default">All Statistics</option>     
          <option value="male">Male</option>
          <option value="woman">Female</option>
        </select>
      </div>
      <div style={{ height: '200px', width: "90%", marginLeft: "0px", marginRight: "0px" }}>
        <Bar data={chartConfig} width={330} options={options} />
      </div>
    </div>
  );
};

export default LanguageChart;
