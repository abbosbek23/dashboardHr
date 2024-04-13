/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Agerangebyposition = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev.ikramovna.me/api/v1/age-gender');
        const jsonData = await response.json();
        setData(jsonData.age_range_by_position);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Process the data to fit Recharts' format
  const processData = () => {
    return Object.keys(data).map(position => ({
      position,
      min_age: data[position].min_age,
      max_age: data[position].max_age,
    }));
  };

  return (
    <div style={{ margin: '0px auto', width: '100%', height: '300px',marginLeft:"0px",paddingTop:"10px"}}>
      <h2 style={{ textAlign: 'center',fontSize:"18px",fontFamily:"Inter,sans-serif"}}>Employee age distribution by position </h2>
      <BarChart
        layout="vertical"
        width={570}
        style={{width:"100%"}}
        height={550}
        data={processData()}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number"  />
        <YAxis type="category" dataKey="" hide={true} />
        <Tooltip 
          formatter={(value, name, props) => [`${value} - ${props.payload.max_age}`, props.payload.position]} 
          labelFormatter={() => ""} // Remove index label
        />
        <Legend verticalAlign="bottom" width={600}  />
        <Bar dataKey="min_age" barSize={28} stackId="a" radius={5} fill="#8884d8" />
        <Bar dataKey="max_age" stackId="a" radius={5} fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Agerangebyposition;
