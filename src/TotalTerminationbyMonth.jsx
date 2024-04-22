import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const TotalTerminationbyMonth = () => {
  const [terminationData, setTerminationData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dev.ikramovna.me/api/v1/employee-termination-month");
        const data = response.data;
        setTerminationData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderData = () => {
    return Object.entries(terminationData).map(([month, count]) => ({ month, count }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: "0px", marginRight: "0px", marginTop: "0px" }}>
      <div style={{ height: "800px", width: "100%", marginTop: "0px", position: 'relative', marginLeft: "0px", marginRight: "0px" }}>
        <BarChart
          layout="vertical"
          width={500}
          style={{width:"100%"}}
          height={520}
          data={renderData()}
          margin={{ top: -10, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="month" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="rgba(54, 162, 235, 0.6)" name="Termination Count" />
        </BarChart>
      </div>
    </div>
  );
};

export default TotalTerminationbyMonth;
