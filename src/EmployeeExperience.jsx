import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const EmployeeExperienceBarChart = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dev.ikramovna.me/api/v1/employee-expirence");
        const data = response.data;

        // Convert data object into array of objects
        const formattedData = Object.keys(data).map((key) => ({ experience: key, count: data[key] }));
        setExperienceData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: "0px", marginRight: "0px", marginTop: "0px" }}>
      <div style={{ height: "800px", width: "700px", marginTop: "15px", position: 'relative', marginLeft: "0px", marginRight: "0px" }}>
        <BarChart
          layout="vertical"
          width={700}
          height={520}
          data={experienceData}
          margin={{ top: 0, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="experience" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="rgba(54, 162, 235, 0.6)" name="Count" />
        </BarChart>
      </div>
    </div>
  );
};

export default EmployeeExperienceBarChart;
