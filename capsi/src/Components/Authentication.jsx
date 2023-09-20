import React, { useState } from 'react';
const Authenticate = ({ token }) => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    async function handleClick() {
        try {
            const response = (await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            ))
            const result = await response.json();
            setSuccessMessage(result.message);
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <>
            <h2>Authenticate</h2>
            {error ?
                <p>{error}</p>
                :
                <p>{successMessage}</p>}
            <button id="loader_cube--color" onClick={handleClick}>Authentication</button>
        </>
    )
}

export default Authenticate