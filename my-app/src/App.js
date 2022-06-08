import "./App.css";
import "./css/Global.css";

import Header from "./components/Header/Header";
import ExpenseItemList from "./components/ExpenseItemsList/ExpenseItemsList";

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
    <div className="main">
      <Header headerText="ExpenseTracker" />
      <ExpenseItemList expenses={expenses} />
    </div>
  );
}

export default App;
