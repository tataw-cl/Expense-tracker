import React, { useState } from "react";
export const New = ({ onHandleAddTransaction }) => {
  // let onAddTransaction = {
  //   text1: "",
  //   amount1: 0,
  // };
  // const [trans, setTrans] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Text: ${text}, Amount: ${amount}`);
    onHandleAddTransaction(text, amount);
  };
  return (
    <div>
      <h2>Add new transaction</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Put a negative(-) for expense, positive for income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};
