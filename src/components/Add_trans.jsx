import React, { useState } from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

export const New = ({ onHandleAddTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onHandleAddTransaction(text, amount, category);
    setText("");
    setAmount(0);
    setCategory("");
  };
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Add new transaction</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Text"
          variant="outlined"
          fullWidth
          value={text}
          onChange={handleTextChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          type="number"
          value={amount}
          onChange={handleAmountChange}
          helperText="(Put a negative(-) for expense, positive for income)"
          sx={{ mb: 2 }}
        />
        <TextField
          select
          label="Category"
          value={category}
          onChange={handleCategoryChange}
          fullWidth
          sx={{ mb: 2 }}
        >
          <MenuItem value="Income">Income</MenuItem>
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Transport">Transport</MenuItem>
          <MenuItem value="Shopping">Shopping</MenuItem>
          <MenuItem value="Bills">Bills</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Transaction
        </Button>
      </form>
    </Card>
  );
};
