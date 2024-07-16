import React, { useState, useEffect } from "react";
import "./css/expense-list.css";
import Axios from "axios";
const url = require("./config");

function ExpenseList({ user_id }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    Axios.get(`${url.BACKEND_URL}/api/user/expenses`, {
      params: { user_id: user_id },
    })
      .then((response) => {
        console.log("Req sent and git res: " + " " + response);
        setExpenses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user_id, expenses]);

  return (
    <div className="expense-list">
      <h1>Expense List</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.expenseId}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
