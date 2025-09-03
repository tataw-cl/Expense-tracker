import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const Spend = ({ income, expense }) => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', p: 2, mb: 2 }}>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="subtitle1" color="success.main">Income</Typography>
        <Typography variant="h6" color="success.main">${income}</Typography>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="subtitle1" color="error.main">Expenses</Typography>
        <Typography variant="h6" color="error.main">${expense}</Typography>
      </div>
    </Card>
  );
};
