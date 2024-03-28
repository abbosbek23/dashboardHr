import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const BarchartHorizontal = () => {
  const [educations, setEducations] = useState({});
  const [selectedGender, setSelectedGender] = useState('default');

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const { data } = await axios.get("https://dev.ikramovna.me/api/v1/education");
        setEducations(data.default); // Set the default education data initially
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    };
    fetchEducationData();
  }, []);

  const handleGenderChange = async (gender) => {
    try {
      const { data } = await axios.get(`https://dev.ikramovna.me/api/v1/education?gender=${gender}`);
      setEducations(data[selectedGender]);
      setSelectedGender(gender);
    } catch (error) {
      console.error('Error fetching education data for selected gender:', error);
    }
  };

  const chartData = educations
    ? Object.entries(educations).map(([education, data]) => ({ name: education, count: data.count, percent: data.percent }))
    : [];

  return (
    <div>
      <div style={{paddingTop:"10px",paddingLeft:"10px",textAlign:"center"}}>
      <select  onChange={(e) => handleGenderChange(e.target.value)} style={{ padding: '5px', borderRadius: '5px', borderColor: '#ccc', fontSize: '14px' }}>
   <option value="default">All Statistics</option>     
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
      </div>
      <div style={{ width: "100%", height: "200px" }}>
        <BarChart
          width={370}
          height={200}
          data={chartData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" name="Count" fill="#8884d8" barSize={12}  />
          <Bar dataKey="percent" name="Percentage" fill="#82ca9d" barSize={12} />
        </BarChart>
      </div>
    </div>
  );
};

export default BarchartHorizontal;
