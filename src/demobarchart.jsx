// import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    group: 'O`zbeklar',
    percentage: 93.47,
    count: 616,
  },
  {
    group: 'Ruslar',
    percentage: 0.61,
    count: 4,
  },
  {
    group: 'Tatarlar',
    percentage: 0.61,
    count: 4,
  },
  {
    group: 'Tojiklar',
    percentage: 1.06,
    count: 7,
  },
  {
    group: 'Qozoqlar',
    percentage: 0.91,
    count: 6,
  },
  {
    group: 'Turkman',
    percentage: 0,
    count: 0,
  },
  {
    group: 'Qirg\'iz',
    percentage: 0,
    count: 0,
  },
  {
    group: 'Koreys',
    percentage: 0,
    count: 0,
  },
  {
    group: 'Boshqalar',
    percentage: 3.34,
    count: 22,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis type="number" />
        <YAxis type="category" dataKey="group" />
        <Tooltip />
        <Legend />
        <Bar dataKey="percentage" fill="#8884d8" name="Percentage" />
        <Bar dataKey="count" fill="#82ca9d" name="Count" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
