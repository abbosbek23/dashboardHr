import { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RechartHorizontalBarChart = () => {
  const [positionData, setPositionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://dev.ikramovna.me/api/v1/position");
        setPositionData(data); // Set default data initially
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDataChange = (gender) => {
    if (positionData && gender in positionData) {
      setPositionData(positionData[gender]); // Set the selected gender data
    }
  };

  const transformData = (data) => {
    return Object.entries(data).map(([position, { count, percent }]) => ({
      position,
      count,
      percent
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <button onClick={() => handleDataChange('default')} style={buttonStyle}>All Statistics</button>
        <button onClick={() => handleDataChange('male')} style={buttonStyle}>Male</button>
      </div>
      <div style={{ height: "100%", width: "100%" }}>
        {positionData && (
          <BarChart
            layout="vertical"
            width={700}
            height={500}
            data={transformData(positionData)}
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="position" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" name="Count" />
            <Bar dataKey="percent" fill="#82ca9d" name="Percentage" />
          </BarChart>
        )}
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '5px',
  border: '1px solid B5B5B5',
  marginRight: '10px',
  backgroundColor: '#FFF',
  color: '#000',
  cursor: 'pointer',
};

export default RechartHorizontalBarChart;
