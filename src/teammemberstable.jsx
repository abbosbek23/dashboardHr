import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DismissalLineChart = () => {
  const [dismissalData, setDismissalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dev.ikramovna.me/api/v1/dismissal");
        setDismissalData(response.data);
      } catch (error) {
        console.error('Error fetching dismissal data:', error);
      }
    };

    fetchData();
  }, []);

  if (!dismissalData) {
    return <div>Loading...</div>;
  }

  const reasons = Object.keys(dismissalData.reasons_by_year);
  const years = Object.keys(dismissalData.reasons_by_year[reasons[0]]);

  const chartData = years.map(year => {
    const dataEntry = { year };
    reasons.forEach(reason => {
      dataEntry[reason] = dismissalData.reasons_by_year[reason][year];
    });
    return dataEntry;
  });

  return (
    <div>
      <div style={{textAlign:"center"}}>
        <h4 style={{fontFamily:"Poppins,sans-serif"}}>Voluntary and Involuntary Turnover</h4>
      </div>
    <LineChart
      width={700}
      height={350}
      data={chartData}
      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      {reasons.map((reason, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey={reason}
          stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color
        />
      ))}
    </LineChart>
    </div>
  );
};

export default DismissalLineChart;
