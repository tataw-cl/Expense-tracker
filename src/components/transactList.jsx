import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Transactions = ({ text, cost, removeTransaction, type }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1, p: 2, borderLeft: type === 'minus' ? '6px solid #ff4d4f' : '6px solid #4caf50' }}>
      <div>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>{text}</Typography>
        <Typography variant="body2" color={type === 'minus' ? 'error' : 'success'}>${cost}</Typography>
      </div>
      <Button variant="outlined" color="error" size="small" onClick={removeTransaction}>
        Delete
      </Button>
    </Card>
  );
};
