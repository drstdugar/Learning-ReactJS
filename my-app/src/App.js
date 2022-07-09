import { useState } from "react";

import "./App.css";
import "./css/Global.css";

import Header from "./components/Header/Header";
import ExpenseInput from "./components/ExpenseInput/ExpenseInput";
import ExpenseItemList from "./components/ExpenseItemsList/ExpenseItemsList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) =>
    setExpenses((prevState) => [expense, ...prevState]);

  return (
    <div className="main">
      <Header headerText="ExpenseTracker" />
      <div className="expense-wrapper">
        <ExpenseInput onAddExpense={addExpenseHandler} />
        <ExpenseItemList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
