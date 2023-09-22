import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Authenticate from '../Components/Authentication';
import SignUp from '../Components/SignUp';

const Register = () => {
    const [token, setToken] = useState(null);
    return (
        <>
            <Authenticate token={token} setToken={setToken} />
            <SignUp setToken={setToken} />
        </>
    )
}

Register.propTypes = {}

export default Register