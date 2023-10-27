import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fetchStatus, setFetchStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [user, setUser] = useState(null);

    const fetchUserBase = () => {
        setTimeout(() => {
            setFetchStatus('loading');
        }, 2000);
        setFetchStatus('idle');
        fetch(`http://localhost:3000/users`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },  
        }).then(response => response.json()).then(
            data =>
            {
                console.log(data);
                setUser(data);
                setFetchStatus('success');
            }).catch((error) =>
            {
                console.error('Error:', error);
                setFetchStatus('error');
        });
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle login logic here
        fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { username, password }
            ),
        }).then(response => response.json())
            .then(data => console.log(data));
    };

    return (
        <>
            <div className='contained'>
                <button onClick={fetchUserBase}>Fetch Userbase</button>
                <ul>
                    {user && user.map((user) => (
                        <li key={user.id}>{user.us}<br/>
                            {user.isLogin}</li>
                    ))}
                </ul>
            </div>
            <div className='contained'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={handleUsernameChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <br />
                    <label htmlFor="timeout">
                        Timeout:
                        {fetchStatus}
                    </label>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
