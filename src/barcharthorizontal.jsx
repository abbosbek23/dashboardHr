/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const BarchartHorizontal = () => {
  const [educations, setEducations] = useState({});
  const [selectedGender, setSelectedGender] = useState('default');

  useEffect(() => {
    const fetchEducationData = async () => {
      const url = selectedGender === 'default'
        ? "https://dev.ikramovna.me/api/v1/education"
        : `https://dev.ikramovna.me/api/v1/education?gender=${selectedGender}`;

      const response = await axios.get(url);
      setEducations(response.data[selectedGender]);
    };

    fetchEducationData();
  }, [selectedGender]);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const chartData = educations
    ? Object.entries(educations).map(([education, data]) => ({ name: education, count: data.count, percent: data.percent }))
    : [];

  return (
    <div>
      <div style={{ display: 'flex',marginLeft:"0px",marginTop:"10px",  marginBottom: '10px',justifyContent:"center"}}>
        <button onClick={() => handleGenderChange('default')} style={buttonStyle}>All Statistics</button>
        <button onClick={() => handleGenderChange('male')} style={buttonStyle}>Male</button>
        <button onClick={() => handleGenderChange('female')} style={buttonStyle}>Female</button>
      </div>
      <div style={{ width: "100%", height: "390px" }}>
        <BarChart
          width={450}
          height={380}
          data={chartData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
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
  border: 'none',
  marginRight: '10px',
  marginLeft:"10px",
  backgroundColor: '#fff',
  color: '#000',
  cursor: 'pointer',
};

export default BarchartHorizontal;
