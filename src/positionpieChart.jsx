/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const DoughnutChart = () => {
  const chartRef = useRef();
  const [positionData, setPositionData] = useState({});
  const [currentData, setCurrentData] = useState({});
  const [gender, setGender] = useState('default');

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
  
    const counts = Object.values(currentData.counts);
    const totalCount = counts.reduce((total, count) => total + count, 0); // Calculate total count
    const percentages = counts.map(count => ((count / totalCount) * 100).toFixed(2)); // Calculate percentages
  
    const labels = Object.keys(currentData.counts);
    let otherCount = 0;
  
    // Check if any count is less than or equal to 24, if so, add it to otherCount
    counts.forEach((count, index) => {
      if (count <= 5) {
        otherCount += count;
        delete currentData.counts[labels[index]]; // Remove the label from counts
      }
    });
  
    // Add Others category if otherCount is greater than 0
    if (otherCount > 0) {
      currentData.counts['Others'] = otherCount;
    }
  
    const chartData = {
      labels: Object.keys(currentData.counts),
      datasets: [{
        label: 'Counts',
        data: Object.values(currentData.counts),
        backgroundColor: [
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
        ],
      }, {
        label: 'Percentages',
        data: percentages,
        backgroundColor: [
          "#FFA07A",
          '#FFD700',
          '#ADFF2F',
          "#00CED1",
          "#4682B4",
          "#9370DB",
          "#FF69B4",
          "#FF6347",
          "#20B2AA",
          "#7FFF00",
        ],
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
            borderRadius: 5, // Radius of the border
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
    <div >
      <div style={{textAlign:"center",padding:"10px 0"}}>
        <select onChange={(e) => handleDataChange(e.target.value)} style={{ padding: '3px', borderRadius: '5px', borderColor: '#ccc', fontSize: '14px' }}>
          <option value="default">All Statistics</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        </div>
      <div style={{ height: "210px", width: "230px", marginTop: "15px" }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default DoughnutChart;
