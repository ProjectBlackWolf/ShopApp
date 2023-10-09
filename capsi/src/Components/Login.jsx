import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// This will be the login page
const Login = ({ setAuth }) => {
    const [error, setError] = useState("");
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const { username, password } = inputs;

    const onChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = (await fetch(
                "https://storeapp-yug3v-postgresql.external.kinsta.app/users",
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

    const onSubmitForm = async (event) => {
        e.preventDefault();
        try {
            const body = { username, password };
            const response = await fetch(
                "https://storeapp-yug3v-postgresql.external.kinsta.app/users",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                }
            );
            const parseRes = await response.json();

            if (parseRes.jwtToken) {
                localStorage.setItem("token", parseRes.jwtToken);
                setAuth(true);
                toast.success("Logged in Successfully");
            } else {
                setAuth(false);
                toast.error(parseRes);
            }
        } catch (err) {
            console.error(err.message);
        }
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
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <Link to='../getAll'>
                    <button type="submit" onSubmit={onSubmitForm}>Log In
                    </button>
                </Link>
            </form>
            {/* err: {error ? <>{error}</> : <Link to="/getAll"></Link>} */}
        </div>
    )

}

    

export default Login