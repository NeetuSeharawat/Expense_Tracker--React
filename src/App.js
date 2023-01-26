import React,{useState} from "react";
import "./App.css";
import Expense from './Components/Expense/Expense';
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Movie Ticket",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2020, 2, 10) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  { id: "e4", title: "iphone", amount: 900.49, date: new Date(2021, 5, 15) },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 8, 12),
  },
];

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense)=>{
    setExpenses(prevExpenses => {
      return [expense,...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>
    </div>
  );
}
export default App;