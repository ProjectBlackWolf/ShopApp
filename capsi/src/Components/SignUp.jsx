import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "../styles/SignUp.css";

const SignUp = () => {
    const {id} = useParams();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState(null);
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://fakestoreapi.com/users",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username: username, password: password })
                });
            const val = await response.json();
            setToken(val);
            console.log(val);
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <>
            {error ? <p>{error}</p> : null}
            <form>
                <h3>:Sign Up Here:</h3>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                
                <button type="submit" onSubmit={handleSubmit}>Register</button>
                {error ? <>{null}</> : <Link to="/login"></Link>}
            </form>
        </>
    );
}

export default SignUp;