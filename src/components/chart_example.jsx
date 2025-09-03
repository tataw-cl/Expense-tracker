import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
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

const Charts = ({ transactions = [] }) => {
  // Transform transactions into a suitable format for Recharts
  const data = transactions.map((transaction, index) => ({
    name: transaction.text1,
    amount: Number(transaction.amount1),
  }));

  return (
    <Card sx={{ p: 3, mb: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Graphical Representation
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#1976d2" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Charts;