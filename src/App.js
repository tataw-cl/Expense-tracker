import { useState } from "react";
import "./App.css";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { Spend } from "./components/spend";
import { Transactions } from "./components/transactList";
import { New } from "./components/Add_trans";
const App = () => {
  // const [onAddTransaction, setOnAddTransaction] = useState({
  //   text1: "",
  //   amount1: 0,
  // });
  // const handleAddTransaction = (text, amount) => {
  //   setOnAddTransaction({ text1: text, amount1: amount });
  // };
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (text, amount) => {
    const newTransaction = { text1: text, amount1: amount };
    setTransactions([...transactions, newTransaction]);
  };
  const handleRemoveTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };
  const income = transactions
    .filter((transaction) => transaction.amount1 > 0)
    .reduce((acc, transaction) => acc + Number(transaction.amount1), 0);
  const expense = transactions
    .filter((transaction) => transaction.amount1 < 0)
    .reduce((acc, transaction) => acc + Number(transaction.amount1), 0);
  const balance = income + expense;
  console.log(balance, income, expense, transactions);
  return (
    <div className="App">
      <Header title="Expense Tracker"> </Header> <Balance bal={balance} />
      <Spend income={income} expense={expense}>
        {" "}
      </Spend>{" "}
      <h2> HISTORY </h2>{" "}
      {transactions.map((transaction, index) => {
        let type1 = transaction.amount1 < 0 ? "minus" : "plus";
        return (
          <Transactions
            key={index}
            type={type1}
            text={transaction.text1}
            cost={transaction.amount1}
            removeTransaction={() => handleRemoveTransaction(index)}
          ></Transactions>
        );
      })}{" "}
      <New
        // onAddTransaction={onAddTransaction}
        onHandleAddTransaction={handleAddTransaction}
      />{" "}
    </div>
  );
};

export default App;
