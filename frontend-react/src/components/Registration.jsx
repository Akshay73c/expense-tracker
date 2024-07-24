import React, { useState } from "react";
import "./css/regist.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/register`, {
      username: username,
      password: password,
      name: name,
    })
      .then((response) => {
        if (response.data) {
          navigate(`/userPage/${response.data.user_id}`);
        } else {
          navigate("/userPage");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="registration-container">
      <h1>Registration</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
