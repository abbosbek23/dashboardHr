import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Transfer = () => {
  const [transferData, setTransferData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev.ikramovna.me/api/v1/transfer');
        const jsonData = await response.json();
        setTransferData(jsonData.counts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const processData = () => {
    const totalCount = Object.values(transferData).reduce((total, count) => total + count, 0);
    return Object.keys(transferData).map(year => ({
      year,
      count: transferData[year],
      percentage: ((transferData[year] / totalCount) * 100).toFixed(2),
    }));
  };

  return (
    <div style={{  width: '100%', height: '400px',marginLeft:'0px',marginRight:"0px",paddingTop:"10px"}}>
      <h2 style={{ textAlign: 'center',fontSize:"18px",fontFamily:"Inter,sans-serif"}}>Exchange of positions between 2020-2023</h2>
      <BarChart
        width={450}
        height={400}
        data={processData()}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip content={({ payload }) => {
  if (payload && payload.length) {
    const { year, count, percentage } = payload[0].payload;
    return (
      <div style={{ backgroundColor: 'white', padding: '5px' }}>
        <p>{year}</p>
        <p>Count: {count}</p>
        <p>Percentage: {percentage}%</p>
      </div>
    );
  }
  return null;
}} />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" barSize={40} />
      </BarChart>
    </div>
  );
};

export default Transfer;