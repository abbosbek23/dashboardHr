import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import Navbarstatistics from './navbarstatistics';

const Experience = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dev.ikramovna.me/api/v1/working-expirence'
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const transposeData = () => {
    if (!data || data.length === 0) return [];

    const transposedData = Object.keys(data[0]).map((key) => {
      const entry = { name: key };
      data.forEach((item) => {
        entry[item.General] = item[key];
      });
      return entry;
    });

    return transposedData;
  };

  return (
    <>
      <Navbarstatistics />
      <div>
        <h2>Line Graph</h2>
        <LineChart
          width={800}
          height={400}
          data={transposeData()}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Tooltip />
          <Legend />
          {data.length > 0 &&
            Object.keys(data[0])
              .filter((key) => key !== 'General')
              .map((key, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={key}
                  stroke={`#${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)}`}
                />
              ))}
        </LineChart>
      </div>
    </>
  );
};

export default Experience;
