import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isDisplay, setDisplay] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const displayForm = () => {
    setDisplay(true);
  };
  const closeForm = () => {
    setDisplay(false);
  };
  return (
    <div className="new-expense">
      {isDisplay === false ? (
        <button onClick={displayForm}>Add New Expense</button>
      ) : (
        <ExpenseForm
          closeState={closeForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
