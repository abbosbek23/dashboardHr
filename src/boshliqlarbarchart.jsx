// import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';

// const data = [
//     {
//         group: "O`zbeklar",
//         percentage: 89.43,
//         count: 237,
//       },
//       {
//         group: "Ruslar",
//         percentage: 2.26,
//         count: 6,
//       },
//       {
//         group: "Tatarlar",
//         percentage: 0.38,
//         count: 1,
//       },
//       {
//         group: "Tojiklar",
//         percentage: 2.26,
//         count: 6,
//       },
//       {
//         group: "Qozoqlar",
//         percentage: 2.64,
//         count: 7,
//       },
//       {
//         group: "Turkman",
//         percentage: 0.38,
//         count: 1,
//       },
//       {
//         group: "Qirg'iz",
//         percentage: 0,
//         count: 0,
//       },
//       {
//         group: "Koreys",
//         percentage: 0,
//         count: 0,
//       },
//       {
//         group: "Boshqalar",
//         percentage: 2.26,
//         count: 6,
//       }
// ];

const BarChartComponent = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Backenddan ma'lumotlarni olib kelinadigan funktsiya
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev.ikramovna.me/api/v1/nationalities');
        const jsonData = await response.json();
        setData(jsonData.rahbarlar);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // Ma'lumotlarni olib kelish
  }, []); // use

  console.log(data);  
  
  return (
    <ResponsiveContainer width="100%" height={380}>
      <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis type="number" />
        <YAxis type="category" dataKey="group" />
        <Tooltip />
        <Legend />
        <Bar dataKey="percentage" fill="#8884d8" name="Percentage" />
        <Bar dataKey="count" fill="#82ca9d" name="Count" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
