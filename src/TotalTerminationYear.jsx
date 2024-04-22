import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const TotalTerminationYearandMonth = () => {
  const [terminationData, setTerminationData] = useState({});
  const [selectedYear, setSelectedYear] = useState('2020');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dev.ikramovna.me/api/v1/employee-termination");
        const data = response.data;
        setTerminationData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div style={{width:"100%", display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: "0px", marginRight: "0px", marginTop: "0px" }}>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleYearChange('2020')} style={buttonStyle}>2020</button>
        <button onClick={() => handleYearChange('2021')} style={buttonStyle}>2021</button>
        <button onClick={() => handleYearChange('2022')} style={buttonStyle}>2022</button>
        <button onClick={() => handleYearChange('2023')} style={buttonStyle}>2023</button>
      </div>
      <div style={{ height: "800px", width: "100%", marginTop: "15px", position: 'relative', marginLeft: "0px", marginRight: "0px" }}>
        <BarChart
          layout="vertical"
          width={500}
          style={{width:"100%"}}
          height={520}
          data={terminationData[selectedYear] ? Object.entries(terminationData[selectedYear]) : []}
          margin={{ top: -10, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="0" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="1" fill="rgba(54, 162, 235, 0.6)" name="Termination Count" />
        </BarChart>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '5px',
  border: '1px solid #B5B5B5',
  marginRight: '10px',
  backgroundColor: '#FFF',
  color: '#000',
  cursor: 'pointer',
};

export default TotalTerminationYearandMonth;
