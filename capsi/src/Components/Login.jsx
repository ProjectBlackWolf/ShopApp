import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// This will be the login page
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = (await fetch(
                "https://fakestoreapi.com/users",
                {
                    method: "GET",
                    headers: {
                        body: JSON.stringify({
                            username: username,
                            password: password
                        }),
                        "Content-Type": "application/json",
                    },
                }
            ))
            const result = await response.json();
            setSuccessMessage(result.message);
            console.log(result);
        } catch (error) {
            setError(error.message);
        }
        let nav = useNavigate();
        nav(`/getAll`);
    }
    return (
        <div>
            <h1>Log in</h1>
            <br />
            <div>
                <h3>Or if you dont have an account you can..</h3>
                <h3><Link to="/signup">Register</Link></h3>
            </div>
            <br />
            <form action=''>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <Link to='../getAll'><button type="submit" onSubmit={handleSubmit}>Log In</button></Link>
            </form>
            {/* err: {error ? <>{error}</> : <Link to="/getAll"></Link>} */}
        </div>
    )
}

export default Login