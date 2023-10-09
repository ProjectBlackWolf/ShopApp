import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import OrderContext from '../context/OrderContext';
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
// css
import '../styles/App.css';
import UserFinder from '../api/UserFinder';
import OrderFinder from '../api/OrderFinder';

const Cart = (props) => {

    const { order, setOrder } = useContext(OrderContext);
    const { user, setUser } = useContext(UserContext);

    let history = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =
                    await OrderFinder.get(`/orders/stuff/${props.userid}`);
                const usrRes =
                    await UserFinder.get(`/users/${props.match.params.id}`);
                console.log(response.data);
                console.log(usrRes.data);
                setOrder(response.data);
                setUser(usrRes.data);
            } catch (err) { console.log(err); }
        };
        fetchData();
    }, []);

    return (
        <>
            Cart
            {/*buy for link using a user.id*/}
            <select type='dropdown' class="dd">
                <option value="0" id='buyQuantity'>0</option>
                <option value="1" id='buyQuantity'>1</option>
                <option value="2" id='buyQuantity'>2</option>
                <option value="3" id='buyQuantity'>3</option>
                <option value="4" id='buyQuantity'>4</option>
                <option value="5" id='buyQuantity'>5</option>
                <option value="6" id='buyQuantity'>6</option>
                <option value="7" id='buyQuantity'>7</option>
                <option value="8" id='buyQuantity'>8</option>
                <option value="9" id='buyQuantity'>9</option>
                <option value="10" id='buyQuantity'>10</option>
            </select>
            <Link to={`/buy/${user.id}`}></Link>
        </>
    )
}

export default Cart