import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import dot from "./assets/dot2.svg"
import dots from "./assets/dot.svg"
import { useEffect, useState } from 'react';
import axios from 'axios';
const GenderPieChart = () => {

  const [genderCounts, setGenderCounts] = useState({})
  const [genderPercentage, setGenderPercentage] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://dev.ikramovna.me/api/v1/gender")
        setGenderCounts(data.counts)
        console.log(data);
        setGenderPercentage(data.percentages)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  console.log(genderPercentage);

  const data = {
    labels: ['Man', 'Woman'],
    datasets: [
      {
        data: [genderCounts['ЭРКАК'] || 0, genderCounts['АЁЛ'] || 0],
        backgroundColor: ['#95A4FC', '#FF4747'],
        hoverBackgroundColor: ['#95A4FC', '#FF4747'],
        borderSkipped: 'bottom', // Open the borders at the bottom
        borderAlign: 'inner', // Align the border to the inner part of the segment
      },
    ],
  };

  const options = {
    elements: {
      arc: {
        borderWidth: 2, // Width of the border
        borderColor: '#F7F9FB', // Color of the border
        borderRadius: 15, // Radius of the border
      },
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };
  const roundedGenderCounts = {
    'ЭРКАК': parseFloat(genderPercentage['ЭРКАК']).toFixed(2),
    'АЁЛ': parseFloat(genderPercentage['АЁЛ']).toFixed(2)
  };

  return (
    <div style={{ width: '250px', height: '150px', marginTop: "38px" }}>
      <Doughnut data={data} options={options} />
      <Box sx={{ display: "flex", marginTop: "30px" }}>
        <Box display={"flex"} sx={{ alignItems: "center" }}>
          <img src={dot} width={6} height={6} style={{ marginRight: "10px", marginLeft: "0px" }} alt="ellipse" />
          <Typography sx={{
            color: "#1C1F21",
            fontFamily: "Poppins,sans-serif",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal"
          }}>Man</Typography>
          <Typography>{roundedGenderCounts['ЭРКАК'] ? `${roundedGenderCounts['ЭРКАК']}%` : ''}</Typography>
        </Box>
        <Box display={"flex"} sx={{ alignItems: "center" }}>
          <img src={dots} width={6} height={6} style={{ marginRight: "10px", marginLeft: "10px" }} alt="ellipse" />
          <Typography sx={{
            color: "#1C1F21",
            fontFamily: "Poppins,sans-serif",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal"
          }}>Woman</Typography>
          <Typography>{roundedGenderCounts['АЁЛ'] ? `${roundedGenderCounts['АЁЛ']}%` : ''}</Typography>
        </Box>
      </Box>
    </div>)
};
export default GenderPieChart;
