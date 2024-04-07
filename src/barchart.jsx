import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Typography } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EmployeeAgeDistribution = () => {
  const [agegroups, setAgeGroups] = useState(null);
  const [selectedGender, setSelectedGender] = useState('age_groups'); // Default to male

  useEffect(() => {
    fetchAgeGroupsFromAPI()
      .then(data => setAgeGroups(data))
      .catch(error => console.error('Error fetching age groups:', error));
  }, []);

  // Function to fetch age group data from the provided API endpoint
  async function fetchAgeGroupsFromAPI() {
    try {
      const response = await fetch('https://dev.ikramovna.me/api/v1/age-dynamics');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data from API');
    }
  }

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const generateChartData = (agegroups, gender) => {
    if (!agegroups || !agegroups[gender]) return null;

    const sortedAgeGroups = Object.keys(agegroups[gender]).sort((a, b) => {
      // Custom sorting function for age groups
      if (a === '60 dan') return 1; // '60 dan' should be last
      if (b === '60 dan') return -1;
      return parseInt(a) - parseInt(b);
    });

    const genderData = agegroups[gender];
    const chartDatas = sortedAgeGroups.map(ageRange => ({
      name: ageRange,
      value: genderData[ageRange] || 0 // Set value to 0 if no data is available for that age range
    }));

    return {
      labels: sortedAgeGroups,
      datasets: [
        {
          data: chartDatas.map(data => data.value),
          backgroundColor: ["#95A4FC", "#BAEDBD", "#1C1F21", "#B1E3FF", "#FFE999"],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          barThickness: 40,
        },
      ],
    };
  };

  const chartData = generateChartData(agegroups, selectedGender);

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
        display: false
      },
      
    },
  };

  return (
    <div>
      <Typography sx={{textAlign:"center",fontWeight:"600",paddingTop:"10px"}}>Employee Age Distribution</Typography>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: "10px", paddingBottom: "10px", textAlign: "center" }}>
        <button onClick={() => handleGenderChange('age_groups')} style={buttonStyle}>All Statistics</button>
        <button onClick={() => handleGenderChange('male')} style={buttonStyle}>Male</button>
        <button onClick={() => handleGenderChange('woman')} style={buttonStyle}>Woman</button>
      </div>
      <div style={{ height: "330px", width: "100%", marginLeft: "0px", marginRight: "0px" }}>
        {chartData && <Bar height={0} style={{width:"100%"}} width={500} data={chartData} options={options} />}
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

export default EmployeeAgeDistribution;