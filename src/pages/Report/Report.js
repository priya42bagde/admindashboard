import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./Report.css"

const data = [
  { name: "Sales", value: 400,},
  { name: "Profit", value: 300 },
  { name: "Loss", value: 300 },
  { name: "Share", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx,cy,midAngle,innerRadius, outerRadius,percent,index}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return ( <text x={x} y={y} fill="black" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Report() {
  return (
   <div className="pieChart">
   <h2 style={{margin: "12px"}}>Report in PieChart:</h2>
   <div>
        <div className="pieDescription">
            <h3 className="pieDesc" style={{backgroundColor:"#0088FE"}} > Sales</h3>
            <h3 className="pieDesc"  style={{backgroundColor:"#00C49F"}} > Stocks</h3>
            <h3 className="pieDesc"  style={{backgroundColor:"#FFBB28"}} > Profit</h3>
            <h3 className="pieDesc"  style={{backgroundColor:"#FF8042"}} > Loss</h3>
        </div>
    </div>
    <PieChart width={600} height={600}>
      <Pie data={data} cx={400} cy={100} labelLine={false} label={renderCustomizedLabel}  outerRadius={80}  fill="#8884d8"  dataKey="value"  >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>

    
    </div>
  );
}
