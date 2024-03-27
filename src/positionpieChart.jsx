/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const DoughnutChart = () => {
  const chartRef = useRef();
  const [positionData, setPositionData] = useState({});

  useEffect(() => {
    const getPositions = async () => {
      try {
        const { data } = await axios.get("https://dev.ikramovna.me/api/v1/position");
        setPositionData(data.position_statistics);
      } catch (error) {
        console.log(error);
      }
    };

    getPositions();

  }, []);

  useEffect(() => {
    if (Object.keys(positionData).length === 0) return; // Wait until data is fetched

    const sortedData = Object.entries(positionData).sort((a, b) => b[1] - a[1]);
    const top20 = sortedData.slice(0, 10);
    const otherCount = sortedData.slice(10).reduce((acc, [_, count]) => acc + count, 0);
    const labels = top20.map(([position, _]) => position);
    const counts = top20.map(([_, count]) => count);

    if (otherCount > 0) {
      labels.push('Others');
      counts.push(otherCount);
    }

    const chartData = {
      labels: labels,
      datasets: [{
        data: counts,
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
          "#ff9089"
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

  }, [positionData]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "150px", marginTop: "45px" }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default DoughnutChart;
