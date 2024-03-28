import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TransferLineChart = () => {
  const [transferData, setTransferData] = useState(null);

  useEffect(() => {
    const fetchTransferData = async () => {
      try {
        const response = await axios.get('https://dev.ikramovna.me/api/v1/transfer');
        setTransferData(response.data);
      } catch (error) {
        console.error('Error fetching transfer data:', error);
      }
    };

    fetchTransferData();
  }, []);

  if (!transferData) {
    return <div>Loading...</div>;
  }

  const chartData = Object.keys(transferData.counts).map(year => ({
    year,
    counts: transferData.counts[year],
    percentages: parseFloat(transferData.percentages[year]).toFixed(2),
  }));

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ fontFamily: "Poppins,sans-serif", padding: "15px 0" }}>Rotation between departments.</h4>
      </div>
      <LineChart
        width={350}
        height={260}
        data={chartData}
        margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="counts" stroke="#82ca9d" name="Counts" yAxisId="left" />
        <Line type="monotone" dataKey="percentages" stroke="red" name="Percentages" yAxisId="right" />
      </LineChart>
    </div>
  );
};

export default TransferLineChart;
