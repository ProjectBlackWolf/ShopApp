import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "../styles/SignUp.css";

import UserFinder from "../api/UserFinder";
import { UserContext } from '../context/UserContext';
const SignUp = () => {
    // const { user, setUser } = useContext(UserContext);
    const { id } = useParams();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState(null);
    let nav = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await UserFinder.post(`/users/${user}`);
            const val = await response.json();
            setToken(val);
            console.log(val);
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <>
            <form>
                <h3>:Sign Up Here:</h3>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" /><Link to='../getAll'><button type="submit" onSubmit={handleSubmit}>Register</button></Link>
                {!username && !password ? <p>Please enter a username and password</p> : 
                    null}
                <>{error}</> : <p>Success!</p>
            </form>
        </>
    );
}

export default SignUp;