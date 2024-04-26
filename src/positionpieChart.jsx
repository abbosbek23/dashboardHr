/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const   BarchartHorizontal = () => {
  const [positions, setPositions] = useState({});
  const [selectedGender, setSelectedGender] = useState('default');

  useEffect(() => {
    const fetchPositionData = async () => {
      const url = selectedGender === 'default'
        ? "https://dev.ikramovna.me/api/v1/position"
        : `https://dev.ikramovna.me/api/v1/position?gender=${selectedGender}`;

      const response = await axios.get(url);
      setPositions(response.data[selectedGender]);
    };

    fetchPositionData();
  }, [selectedGender]);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const chartData = positions
    ? Object.entries(positions).map(([position, data]) => ({ name: position, count: data.count, percent: data.percent }))
    : [];

  return (
    <div>
      <div style={{  width:"100%", textAlign:"center", marginTop: '10px' }}>
        <button onClick={() => handleGenderChange('default')} style={buttonStyle}>All Statistics</button>
        <button onClick={() => handleGenderChange('male')} style={buttonStyle}>Male</button>
        <button onClick={() => handleGenderChange('female')} style={buttonStyle}>Female</button>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <BarChart
          width={700}
          style={{width:"100%"}}
          height={500}
          data={chartData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" hide={true} />
          <Tooltip formatter={(value) => `${value}`} />
          
          <Bar dataKey="count" name="Count" fill="#8884d8" barSize={35} radius={[0, 5, 5, 0]} animationDuration={1000} />
          <Bar dataKey="percent" name="Percentage" fill="#82ca9d" barSize={35} radius={[0, 5, 5, 0]} animationDuration={1000} />
        </BarChart>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '5px',
  border: '1px solid #000',
  marginRight: '10px',
  marginLeft:"5px",
  backgroundColor: '#fff',
  color: '#000',
  cursor: 'pointer',
};

export default BarchartHorizontal;
