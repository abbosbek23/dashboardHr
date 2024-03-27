/* eslint-disable no-unused-vars */
import React from 'react'
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts"

const data = [
    {name:"2017",react:32,angular:22,vue:34},
    {name:"2018",react:42,angular:52,vue:14},
    {name:"2019",react:12,angular:72,vue:54},
    {name:"2020",react:42,angular:32,vue:24}
]

function Piecharts() {
  return (
    <div>
        <h2>Salom</h2>
 <LineChart width={500} height={300} data={data}>
    <Line type={'monotone'} dataKey="react" stroke='#033b74' strokeWidth={3}/>
    <Line type={'monotone'} dataKey="angular" stroke='#e28743' strokeWidth={3}/>
    <Line type={'monotone'} dataKey="vue" stroke='#154c79' strokeWidth={3}/>
    <CartesianGrid stroke='#ccc'/>
    <XAxis dataKey="name"/>
    <YAxis/>
    <Tooltip/>
    <Legend/>
 </LineChart>       
<h3>Hi</h3>
    </div>
  )
}

export default Piecharts