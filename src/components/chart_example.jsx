import React from "react";
import MainSite from "./mainSite";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = ({ transactions = MainSite() }) => {
  // Transform transactions into a suitable format for Recharts
  const data = transactions.map((transaction, index) => ({
    name: transaction.text1,
    l1: transaction.amount1, // Assuming 'amount1' is a field in your transactions
    l2: transaction.amount2, // Assuming 'amount2' is another field in your transactions
    amt: transaction.amount1, // Use any relevant field for the 'amt' value
  }));

  return (
    <>
    <h2>Graphical representation</h2>
    <ResponsiveContainer width="50%" height={250}>
      <LineChart
        width={300}
        height={100}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="l1" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="l2" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
    </>
    );
};

export default Charts;