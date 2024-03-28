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

  const handleGenderChange = (gender) => {
    setGender(gender);
  };

  return (
    <div>
      <div style={{textAlign:"center",padding:"10px 0"}}>
      <select onChange={(e) => handleGenderChange(e.target.value)} style={{ padding: '3px', borderRadius: '5px', borderColor: '#ccc', fontSize: '14px' }}>
        <option value="default">All Statistics</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      </div>
      <Bar
        height={300}
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

export default BarChartComponent;
