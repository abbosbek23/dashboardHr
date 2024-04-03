// import { useState, useEffect } from 'react';
// import axios from 'axios';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbarstatistics from './navbarstatistics';

const rawData = [
  {
    "General": "02.09.1995",
    "In the banking system": "23.04.2001",
    "In the same banking system": "18.02.2015",
    "In position": "23.07.2021"
  },
  // Other data points...
];

const Experience = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://dev.ikramovna.me/api/v1/working-expirence'
  //       );
  //       setData(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const transposeData = () => {
  //   if (!data || data.length === 0) return [];

  //   const transposedData = Object.keys(data[0]).map((key) => {
  //     const entry = { name: key };
  //     data.forEach((item) => {
  //       entry[item.General] = item[key];
  //     });
  //     return entry;
  //   });

  //   return transposedData;
  // };
  const processedData = rawData.map(dataPoint => {
    return Object.entries(dataPoint).map(([position, date]) => ({ date, position }));
  });
  

  return (
    <>
      <Navbarstatistics />
      <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart
          data={processedData.flat()} // Flatten the array
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Render lines dynamically based on the keys in the data */}
          {Object.keys(rawData[0]).map((position, index) => (
            <Line key={index} type="monotone" dataKey={position} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  );
};

export default Experience;
