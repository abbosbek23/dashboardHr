import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import dot from "./assets/dot2.svg";
import dots from "./assets/dot.svg";
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'chart.js/auto';

const GenderPieChart = () => {
  const [genderData, setGenderData] = useState({
    male: { count: 0, percentage: 0 },
    female: { count: 0, percentage: 0 }
  });

  useEffect(() => {
    const fetchGenderData = async () => {
      try {
        const response = await axios.get("https://dev.ikramovna.me/api/v1/gender");
        const data = response.data;
        setGenderData({
          male: { count: data.male.count, percentage: data.male.percentage },
          female: { count: data.woman.count, percentage: data.woman.percentage }
        });
      } catch (error) {
        console.error('Error fetching gender data:', error);
      }
    };

    fetchGenderData();
  }, []);

  const options = {
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: '#F7F9FB',
        borderRadius: 10,
      },
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const roundedGenderPercentages = {
    'male': parseFloat(genderData.male.percentage).toFixed(2),
    'female': parseFloat(genderData.female.percentage).toFixed(2)
  };

  return (
    <div style={{ width: '280px', height: '230px', marginTop: "30px" }}>
      <Doughnut
        data={{
          labels: ['Man', 'Woman'],
          datasets: [
            {
              data: [genderData.male.count, genderData.female.count],
              backgroundColor: ['#95A4FC', '#FF4747'],
              hoverBackgroundColor: ['#95A4FC', '#FF4747'],
              borderSkipped: 'bottom',
              borderAlign: 'inner',
            },
          ],
        }}
        options={options} />
      <Box sx={{ display: "flex", marginTop: "30px" }}>
        <Box display={"flex"} sx={{ alignItems: "center" }}>
          <img src={dot} width={6} height={6} style={{ marginRight: "10px", marginLeft: "0px" }} alt="ellipse" />
          <Typography sx={{
            color: "#1C1F21",
            fontFamily: "Poppins,sans-serif",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginRight:"5px"
          }}>Man</Typography>
          <Typography>{roundedGenderPercentages['male'] ? `${roundedGenderPercentages['male']}%` : ''}</Typography>
        </Box>
        <Box display={"flex"} sx={{ alignItems: "center" }}>
          <img src={dots} width={6} height={6} style={{ marginRight: "10px", marginLeft: "10px" }} alt="ellipse" />
          <Typography sx={{
            color: "#1C1F21",
            fontFamily: "Poppins,sans-serif",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginRight:"5px"
          }}>Woman</Typography>
          <Typography>{roundedGenderPercentages['female'] ? `${roundedGenderPercentages['female']}%` : ''}</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default GenderPieChart;
