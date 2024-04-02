/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const DoughnutChart = () => {
  const chartRef = useRef();
  const [positionData, setPositionData] = useState({});
  const [currentData, setCurrentData] = useState({});
  const [percentages, setPercentages] = useState([]);
  const [backgroundColors, setBackgroundColors] = useState([]);

  useEffect(() => {
    const getPositions = async () => {
      try {
        const { data } = await axios.get("https://dev.ikramovna.me/api/v1/position");
        setPositionData(data);
        setCurrentData(data.default); // Set default data initially
      } catch (error) {
        console.log(error);
      }
    };

    getPositions();

  }, []);

  const handleDataChange = (gender) => {
    setCurrentData(positionData[gender]);
  };

  useEffect(() => {
    if (Object.keys(currentData).length === 0) return;

    let counts = Object.values(currentData.counts);
    counts = counts.filter(count => count > 10); // Drop data below 24
    const totalCount = counts.reduce((total, count) => total + count, 0); // Calculate total count
    const percentages = counts.map(count => ((count / totalCount) * 100).toFixed(2)); // Calculate percentages

    setPercentages(percentages);

    const labels = Object.keys(currentData.counts);
    const filteredLabels = labels.filter((label, index) => currentData.counts[label] > 10); // Filter out labels with counts below 24
    const colors = [ // Define background colors based on data
      "#FF4747",
      '#FFCB83',
      '#00ce7b',
      "#A1E3CB",
      "#95A4FC",
      "#C6C7F8",
      "#BAEDBD",
      "#B1E3FF",
      "#A8C5DA",
      "#ff9089",
    ];
    setBackgroundColors(filteredLabels.map((label, index) => ({ label, color: colors[index] })));

    const chartData = {
      labels: filteredLabels,
      datasets: [{
        label: 'Counts',
        data: filteredLabels.map(label => currentData.counts[label]),
        backgroundColor: colors,
      }],
    };

    const config = {
      type: 'doughnut',
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        elements: {
          arc: {
            borderWidth: 5, // Width of the border
            borderColor: '#F7F9FB', // Color of the border
            borderRadius: 8, // Radius of the border
          },
        },
      },
    };

    const myChart = new Chart(chartRef.current, config);

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };

  }, [currentData]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <button onClick={() => handleDataChange('default')} style={buttonStyle}>All Statistics</button>
        <button onClick={() => handleDataChange('male')} style={buttonStyle}>Male</button>
        <button onClick={() => handleDataChange('female')} style={buttonStyle}>Female</button>
      </div>
      <div style={{ height: "220px", width: "230px", marginTop: "15px", position: 'relative' }}>
        <canvas ref={chartRef} />
      </div>
      <div style={{ width:"450px", display:"flex",flexWrap:"wrap",marginTop:"10px"}}>
        {backgroundColors.map(({ label, color }, index) => (
          <div key={index} style={{marginTop:"10px", marginRight: '5px',  backgroundColor: color, padding: '5px', borderRadius: '5px', color: '#fff' }}> {percentages[index]}%</div>
        ))}
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '5px',
  border: 'none',
  marginRight: '10px',
  backgroundColor: '#FFF',
  color: '#000',
  cursor: 'pointer',
};

export default DoughnutChart;
