import React from 'react'
import "./Chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Chart({title, data, dataKey, grid}) {


  /* 1. aspect={4 / 1} if the width is 4px then height will be 1px.
     2. CartesianGrid is used to make lines in a graph.
     3. strokeDasharray is used to make dash line.
     4.
  
  */
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer  width='100%'  aspect={4 / 1}> 
                <LineChart data={data}> 
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip />
                   {grid &&  <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart