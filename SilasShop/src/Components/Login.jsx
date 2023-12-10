import React, { createElement } from 'react';
import styled, { css } from 'styled-components';
import MUIE from '@mui/styled-engine-sc';
import MUIY from '@mui/styled-engine';

const MUIETyp = styled.div`
    div: width: fit-content;
    html: font-family: Roboto, Helvetica, Arial;
    html: font-size: 23px;
    color: #A0ADDD;
    h2: font-size: 50px;
    background-color: #0D4DDD;
    img: width: 10px, height: 10px;

`;
const Container = styled.div`
    text-align: center;
`;
const e = createElement('div');

const Login = () => {
    return (
        <>
            <Container>
                <MUIETyp>
                    <h2>Login</h2>
                
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="text" name="password" />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                    </form>
                </MUIETyp>
            </Container>
        </>
    )
}

export default Login