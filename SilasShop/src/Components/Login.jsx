import React from 'react';

const Login = () => {
    return (
        <>
            <div>
                <h2>Login</h2>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default Login