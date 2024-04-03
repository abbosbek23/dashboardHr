import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const Distrubutionbyreasons = () => {
  const [reasonsData, setReasonsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev.ikramovna.me/api/v1/dismissal');
        const jsonData = await response.json();
        setReasonsData(jsonData.reasons_by_year);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const processData = (reason) => {
    const years = Object.keys(reasonsData[reason] || {});
    const data = {
      labels: years,
      datasets: [
        {
          label: reason,
          backgroundColor: ["#95A4FC",
          '#FFCB83',
          '#00ce7b',
          "#A1E3CB",],
          borderColor: 'white',
          borderWidth: 1,
          hoverBackgroundColor: ["#95A4FC",
          '#FFCB83',
          '#00ce7b',
          "#A1E3CB",],
          hoverBorderColor: 'white',
          data: years.map(year => reasonsData[reason][year] || 0),
        },
      ],
    };

    return data;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between',}}>
      <div style={{ margin: '20px auto', width: '300px', height: '300px' }}>
        <h2 style={{ textAlign: 'center',fontSize:"18px",fontFamily:"Inter, sans-serif"}}>According to their wishes</h2>
        <Bar
          data={processData('According to their wishes')}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true,
                },
              }],
            },
          }}
        />
      </div>
      <div style={{ margin: '20px auto', width: '300px', height: '300px' }}>
        <h2 style={{ textAlign: 'center',fontSize:"18px",fontFamily:"Inter, sans-serif" }}>Contract over</h2>
        <Bar
          data={processData('Contract  over')}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true,
                },
              }],
            },
          }}
        />
      </div>
      <div style={{ margin: '20px auto', width: '300px', height: '300px' }}>
        <h2 style={{ textAlign: 'center',fontSize:"18px",fontFamily:"Inter, sans-serif" }}>Others</h2>
        <Bar
          data={processData('Others')}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true,
                },
              }],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Distrubutionbyreasons;
