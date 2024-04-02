import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChartComponent = () => {
  const [gender, setGender] = useState('default');
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev.ikramovna.me/api/v1/nationalities');
        const jsonData = await response.json();
        setData(jsonData[gender]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [gender]);

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <div>
      <div style={{ textAlign: "center", padding: "10px 0" }}>
        <button onClick={() => handleGenderChange('default')} style={buttonStyle}>All Statistics</button>
        <button onClick={() => handleGenderChange('male')} style={buttonStyle}>Male</button>
        <button onClick={() => handleGenderChange('female')} style={buttonStyle}>Female</button>
      </div>
      <Bar
        height={350}
        width={450}
        data={{
          labels: Object.keys(data),
          datasets: [{
            label: 'Count',
            backgroundColor: '#82ca9d',
            data: Object.values(data).map(item => item.count),
          }, {
            label: 'Percentage',
            backgroundColor: '#8884d8',
            data: Object.values(data).map(item => item.percent)
          }]
        }}
        options={{
          indexAxis: 'y', // Set the horizontal axis
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },

          },
        }}
      />
    </div>
  );
};

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '5px',
  border: 'none',
  marginRight: '10px',
  backgroundColor: '#fff',
  color: '#000',
  cursor: 'pointer',
};

export default BarChartComponent;
