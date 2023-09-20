import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// This will be the login page
const Login = () => {

    return (
        <div>
            <h1>Log in</h1>
            <br />
            <div><h3>or if you dont have an account sign in here.</h3></div>
            <br />
            <div><Link to="/"></Link></div>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login