import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Registration from "./components/Registration";
import Login from "./components/Login";
import ExpenseForm from "./components/ExpenseForm";
import NavBar from "./components/NavBar";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Expense Tracker</h1>
        <NavBar />
        {/* //Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Spend smarter, save more!</h2>
                <h3>
                  Gain valuable insights into your spending habits and identify
                  areas for potential savings.
                </h3>
              </>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/expenses" element={<ExpenseForm />} />
          <Route path="/userPage/:user_id" element={<User />} />
          <Route
            path="/userPage"
            element={<h1>Wrong UserName or password!!</h1>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
