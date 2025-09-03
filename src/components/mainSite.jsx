import { useState, useEffect } from "react";
import { db } from './auth/firebase/firebase';
import { collection, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { Balance } from "./Balance";
import { Header } from "./Header";
import { Spend } from "./spend";
import { Transactions } from "./transactList";
import { New } from "./Add_trans";
import Charts from "./chart_example";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainSite = () => {
  // const [onAddTransaction, setOnAddTransaction] = useState({
  //   text1: "",
  //   amount1: 0,
  // });
  // const handleAddTransaction = (text, amount) => {
  //   setOnAddTransaction({ text1: text, amount1: amount });
  // };
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load transactions from Firestore on mount
  useEffect(() => {
    async function fetchTransactions() {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const loaded = [];
      querySnapshot.forEach((doc) => loaded.push(doc.data()));
      setTransactions(loaded);
      setLoading(false);
    }
    fetchTransactions();
  }, []);

  // Save transactions to Firestore whenever they change
  useEffect(() => {
    async function saveTransactions() {
      // Only add/update docs, don't delete all
      transactions.forEach(async (t, idx) => {
        await setDoc(doc(db, "transactions", String(idx)), t);
      });
    }
    if (!loading) saveTransactions();
  }, [transactions, loading]);

  const handleAddTransaction = (text, amount, category) => {
    const newTransaction = { text1: text, amount1: amount, category };
    setTransactions([...transactions, newTransaction]);
    toast.success('Transaction added!', { position: 'top-right' });
  };
  // Start new list: clear Firestore and UI
  const handleStartNewList = async () => {
    const querySnapshot = await getDocs(collection(db, "transactions"));
    await Promise.all(querySnapshot.docs.map(d => deleteDoc(doc(db, "transactions", d.id))));
    setTransactions([]);
    toast.info('Started a new expense list!', { position: 'top-right' });
  };
  const handleRemoveTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
    toast.info('Transaction removed.', { position: 'top-right' });
  };
  const income = transactions
    .filter((transaction) => transaction.amount1 > 0)
    .reduce((acc, transaction) => acc + Number(transaction.amount1), 0);
  const expense = transactions
    .filter((transaction) => transaction.amount1 < 0)
    .reduce((acc, transaction) => acc + Number(transaction.amount1), 0);
  const balance = income + expense;
  console.log(balance, income, expense, transactions);
  const [filter, setFilter] = useState('All');
  const filteredTransactions = filter === 'All'
    ? transactions
    : transactions.filter(t => t.category === filter);

  return (
    <Container maxWidth="sm" className="App">
      <Header title="Expense Tracker" />
      <Card sx={{ p: 3, mb: 2 }}>
        <Balance bal={balance} />
        <div className="spendings">
          <Spend income={income} expense={expense} />
        </div>
      </Card>
      <Button variant="contained" color="secondary" sx={{ mb: 2 }} onClick={handleStartNewList}>
        Start New List
      </Button>
      <Card sx={{ p: 3, mb: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>History</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>Filter by category:</Typography>
        <select value={filter} onChange={e => setFilter(e.target.value)} style={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}>
          <option value="All">All</option>
          <option value="Income">Income</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
        {loading ? (
          <Typography color="text.secondary">Loading...</Typography>
        ) : filteredTransactions.length === 0 ? (
          <Typography color="text.secondary">No transactions yet.</Typography>
        ) : (
          filteredTransactions.map((transaction, index) => {
            let type1 = transaction.amount1 < 0 ? "minus" : "plus";
            return (
              <Transactions
                key={index}
                type={type1}
                text={transaction.text1}
                cost={transaction.amount1}
                removeTransaction={() => handleRemoveTransaction(index)}
              />
            );
          })
        )}
      </Card>
      <Card sx={{ p: 3, mb: 2 }}>
        <New onHandleAddTransaction={handleAddTransaction} />
      </Card>
      <Card sx={{ p: 3, mb: 2 }}>
        <Charts transactions={transactions} />
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default MainSite;
