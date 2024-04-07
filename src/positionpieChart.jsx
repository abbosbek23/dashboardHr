/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const RechartHorizontalBarChart = () => {
  const [positionData, setPositionData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://dev.ikramovna.me/api/v1/position");
        setPositionData(data.default);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDataChange = (gender) => {
    setPositionData(positionData[gender]);
  };

  const renderData = () => {
    if (!positionData.counts || !positionData.percentages) return [];

    return Object.keys(positionData.counts).map((position, index) => ({
      position: position.length > 45 ? position.slice(0, 10) + '...' : position,
      count: positionData.counts[position],
      percentage: positionData.percentages[position],
      index: index + 1
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: "0px", marginRight: "0px", marginTop: "0px" }}>
      <div style={{ display: 'flex', marginBottom: '0px' }}>
        <button onClick={() => handleDataChange('default')} style={buttonStyle}>All Statistics</button>
        <button onClick={() => handleDataChange('male')} style={buttonStyle}>Male</button>
        <button onClick={() => handleDataChange('female')} style={buttonStyle}>Female</button>
      </div>
      <div style={{ height: "100%", width: "100%", marginTop: "0px", position: 'relative', marginLeft: "0px", marginRight: "0px" }}>
        <BarChart
          layout="vertical"
          width={700}
          style={{width:"100%",
          // height:"100%"
        }}
          height={500}
          data={renderData()}
          margin={{ top: 0, right: 30, left: 40, bottom: 5 }}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="" type="category" hide={true}/>
          <Tooltip
            formatter={(value, name, props) => [`${value} - ${props.payload.percentage}%`, props.payload.position]} 
            labelFormatter={() => ""} // Remove index label
          />
          <Legend width={500} />
          <Bar dataKey="count" fill="#95A4FC" name="Counts" />
          <Bar dataKey="percentage" fill="#00ce7b" name="Percentage" />
        </BarChart>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '5px',
  border: 'none',
  marginRight: '10px',
  backgroundColor: '#FFF',
  color: '#000',
  cursor: 'pointer',
};

export default RechartHorizontalBarChart;
