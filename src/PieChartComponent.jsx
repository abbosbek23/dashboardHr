import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'chart.js/auto';

const MalesPieChart = () => {
  const [ageData, setAgeData] = useState({
    '0-19': 0,
    '20-30': 0,
    '31-40': 0,
    '41-50': 0,
    '51 and above': 0
  });

  const backgroundColor = ['#95A4FC', '#FF4747', "#baedbd", "yellow"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dev.ikramovna.me/api/v1/age-gender");
        const data = response.data;
        setAgeData(data.male); // Male data for pie chart
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    elements: {
        arc: {
          borderWidth: 2,
          borderColor: '#FFF',
          borderRadius: 10,
        },
      },
      plugins: {
        legend: {
          display: false
        }
      },

    responsive: true,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Males by Age',
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          const datasetLabel = data.datasets[tooltipItem.datasetIndex].label;
          const dataLabel = data.labels[tooltipItem.index];
          const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          const percentage = Math.round((value / data.datasets[tooltipItem.datasetIndex].data.reduce((a, b) => a + b)) * 100);
          return `${datasetLabel} - ${dataLabel}: ${value} (${percentage}%)`;
        },
      },
    },
  };

  return (
    <div style={{ width: '280px', height: '450px', marginTop: "30px" }}>
      <Doughnut
        data={{
          labels: Object.keys(ageData),
          datasets: [
            {
              data: Object.values(ageData),
              backgroundColor: backgroundColor,
              hoverBackgroundColor: backgroundColor,
              borderSkipped: 'bottom',
              borderAlign: 'inner',
            },
          ],
        }}
        options={options}
        type="pie" // Pie tipini qo'shing
      />
      <Box sx={{ display: "flex", marginTop: "30px",width:"90%",flexWrap:"wrap"}}>
        {Object.entries(ageData).map(([label], index) => (
          <Box key={index} display={"flex"} sx={{ alignItems: "center" }}>
            <div style={{ width:'5px', height: '5px',borderRadius:"50%", marginRight: "5px", marginLeft: index % 2 === 0 ? "0px" : "10px", backgroundColor: backgroundColor[index % backgroundColor.length] }} />
            
            <Box sx={{alignItems:"center"}}><Typography sx={{
              width:"80px",  
              color: "#1C1F21",
              fontFamily: "Poppins,sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginRight: "10px",
              whiteSpace:"no-wrap"
            }}>{label}</Typography>
            {/* <Typography>{count}</Typography> */}
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default MalesPieChart;
