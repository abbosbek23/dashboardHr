/* eslint-disable react-hooks/rules-of-hooks */
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/system';

const BarChartComponent = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Backenddan ma'lumotlarni olib kelinadigan funktsiya
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev.ikramovna.me/api/v1/nationalities');
        const jsonData = await response.json();
        setData(jsonData.hodimlar);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // Ma'lumotlarni olib kelish
  }, []); // use
  return (
    <Box>    
      
      <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis type="number" />
        <YAxis type="category" dataKey="group" />
        <Tooltip />
        <Legend />
        <Bar dataKey="percentage" fill="#8884d8" name="Percentage" />
        <Bar dataKey="count" fill="#82ca9d" name="Count" />
      </BarChart>
    </ResponsiveContainer>
    </Box>

  );
};

export default BarChartComponent;
