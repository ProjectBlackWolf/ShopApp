import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
// css
import '../styles/App.css';
import styled from 'styled-components';

const StyledCart = styled.div`
    body {
  background-color: #f2f2f2;
}

.carty {
  background-color: #000;
  border: 10px solid #444;
  border-radius: 10px;
  box-shadow: 0 0 20px #222;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
}

.carty::before {
  content: "";
  display: block;
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 10px solid #444;
  border-radius: 10px;
  box-shadow: 0 0 20px #222;
  z-index: -1;
}

.carty::after {
  content: "";
  display: block;
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 10px solid #444;
  border-radius: 10px;
  box-shadow: 0 0 20px #222;
  z-index: -1;
}

.carty__screen {
  background-color: #222;
  border: 10px solid #444;
  border-radius: 10px;
  box-shadow: inset 0 0 20px #000;
  height: 300px;
  width: 80%;
  margin: 0 auto;
}
    `;

const Cart = (props) => {
    const { id } = useParams();
    const { order, setOrder } = useContext(OrderContext);
    // const { user, setUser } = useContext(UserContext);

    let history = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =
                    await OrderFinder.get(`/orders/stuff/${id}`);
                // const usrRes = await UserFinder.get(`/users/${id}`);
                console.log(response.data);
                // console.log(usrRes.data);
                // setOrder(response.data);
                // setUser(usrRes.data);
            } catch (err) { console.log(err); }
        };
        fetchData();
    }, []);

    return (
        <>
            <StyledCart>
                {/* <h1>Cart</h1>
                {(props.user.name) ? (`${user.name}'s Cart`) : history('/login')}
                <button><Link to={`/buy`}></Link></button> */}
            </StyledCart>
        </>
    )
}

export default Cart