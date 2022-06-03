import "./App.css";

import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
  const expenses = [
    {
      item: "Car",
      amount: "$100",
    },
    {
      item: "Vase",
      amount: "$70",
    },
    {
      item: "Phone",
      amount: "$90",
    },
  ];

  return (
    <div>
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
    </div>
  );
}

export default App;
