import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/SignUp.css";

export default async function SignUp({ setToken }) {
    <script src="https://www.google.com/recaptcha/api.js"></script>

    if (setToken == null) {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");
        async function handleSubmit(event) {
            event.preventDefault();
            const response = await fetch("",
                { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: username, password: password }) });
            const val = await response.json();
            setToken(val.token);
            console.log(val);
            try {
            } catch (error) {
                setError(error.message);
            }
        }
        return (
            <>
                <h3> If you have an account Login here.. =- </h3>
                <Link to="/login"><button>Login</button></Link>
                <h2 id="loader_cube--glowing">Sign Up</h2>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:{" "}
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Password:{" "}
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br />
                    <button id="loader_cube--color">Submit</button>
                </form>

            </>
        );
    }
    else {
        return (
            <>
                <h2 id="loader_cube--glowing">Sign Up</h2>
                <p>You are already signed in!</p>
                <Link to="/getAll">
                    <button id="loader_cube--color">View Items</button>
                </Link>
            </>
        );
    }
}
