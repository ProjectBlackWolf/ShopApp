import '../styles/App.css';
import React, { useEffect, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import { UserContext } from '../context/UserContext';
import ItemFinder from '../api/ItemFinder';
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
import UserFinder from '../api/UserFinder';
// use the class method to fetch data

const Mainpage = (props) => {
  const { items, setItems } = useContext(ItemContext);
  // const { user, setUser } = useContext(UserContext);

  let history = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ItemFinder.get('/getAll');
        // const usere = await UserFinder.get(`/users/${props.match.params.id}`);
        const usere = await fetch(`/users/${props.match.params.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'

          }
        }).then(res => res.json()).then(data => data);
        console.log(response.data);
        setItems(response.data);
        setUser(usere);
      } catch (err) { }
    };
    fetchData();
  }, []);
  // const handleDelete = async (e, id) => {
  //   e.stopPropagation();
  //   try {
  //     await ItemFinder.delete(`/${id}`);
  //     setItems(
  //       items.filter((Item) => {
  //         return Item.id !== id;
  //       })
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleUpdate = async (e, id) => {
    e.stopPropagation();
    try {      
      history(`/${id}/update`)
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = async (e, id, userId, quantity) => {
    e.stopPropagation();
    try {

      // send to the cart if user is logged in
      // else send to login page

      if (user !== null) {
        const nobj = { id: id, orderid: userId, quantity: quantity, userid: userId };
        await UserFinder.post(`/cart/${userId}`, nobj);
        history(`/cart/${userId}`);
      }
      else {
        history(`/login`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleItemSelect = async (e, id) => {
    e.stopPropagation();
    try {
      history(`/show/${id}`)
    } catch (err) {
      console.log(err);
    }
  };

  let im = [];
  im = items;
  return (
    <>
      {
        im.map((item) => {
          return (
            <div id='containeroo' key={item.id}>
              <ol className='card'>
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
                <img src={`${item.image}`}></img>
                <button onClick={(e) => handleItemSelect(e, item.id)}>Details</button>
                <button onClick={(e) => handleUpdate(e, item.id)}>Update</button>
                {/* <button onClick={(e) => handleDelete(e, item.id)}>Delete</button> */}
                <button onClick={
                  (e) =>
                    addToCart(e, item.id, user.id)
                }>Add-To-Cart</button>
              </ol>
            </div>
          )
        })
      }
    </>
  )
}

export default Mainpage