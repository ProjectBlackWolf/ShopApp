import React, {useState} from "react";
async function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        let bool = false;
        // handle login logic here
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { username, password, bool }
            ),
        }).then(response => response.json())
            .then(data => console.log(data));
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="User">Username</label>
                <input type="username" id="username" name="username" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                <input type="submit" value="Submit" className="btn" />
            </form>
        </>
    );
}

export default SignUp;