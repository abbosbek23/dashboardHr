/* eslint-disable react-hooks/rules-of-hooks */
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/system';

// const data = [
//   {
//     group: 'O`zbeklar',
//     percentage: 93.47,
//     count: 616,
//   },
//   {
//     group: 'Ruslar',
//     percentage: 0.61,
//     count: 4,
//   },
//   {
//     group: 'Tatarlar',
//     percentage: 0.61,
//     count: 4,
//   },
//   {
//     group: 'Tojiklar',
//     percentage: 1.06,
//     count: 7,
//   },
//   {
//     group: 'Qozoqlar',
//     percentage: 0.91,
//     count: 6,
//   },
//   {
//     group: 'Turkman',
//     percentage: 0,
//     count: 0,
//   },
//   {
//     group: 'Qirg\'iz',
//     percentage: 0,
//     count: 0,
//   },
//   {
//     group: 'Koreys',
//     percentage: 0,
//     count: 0,
//   },
//   {
//     group: 'Boshqalar',
//     percentage: 3.34,
//     count: 22,
//   },
// ];



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
    <Box>    <ResponsiveContainer width="100%" height={300}>
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
