import React from 'react';

const SignUp = () => {
    return (
        <>
            <h2>Register</h2>
            <form action="POST">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default SignUp