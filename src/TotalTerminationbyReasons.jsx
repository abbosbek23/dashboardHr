import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const TotalTerminationbyReasons = () => {
  const [terminationReasonData, setTerminationReasonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dev.ikramovna.me/api/v1/employee-termination-reason");
        const data = response.data;
        setTerminationReasonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: "0px", marginRight: "0px", marginTop: "0px" }}>
      <div style={{ height: "800px", width: "100%", marginTop: "0px", position: 'relative', marginLeft: "0px", marginRight: "0px" }}>
        <BarChart
          width={500}
          style={{width:"100%"}}
          height={520}
          data={terminationReasonData}
          margin={{ top: 0, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Reason for dismissal" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" barSize={40} fill="rgba(54, 162, 235, 0.6)" name="Termination Count" />
        </BarChart>
      </div>
    </div>
  );
};

export default TotalTerminationbyReasons;
