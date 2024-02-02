import React, { useState } from 'react';
import './css/login.css'; // In Login.js
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await Axios.post("http://localhost:8080/api/user/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data) {
                // Upon successful login, redirect or update state to indicate logged-in status
                navigate(`/userPage/${response.data.user_id}`)
            } else {
                navigate("/userPage")
            }
        }).catch((err) => {
            console.log(err);
        })

    };

    return (
        <div className="login-container">
            <h1>Login</h1>
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
                <button onClick={handleSubmit} type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
