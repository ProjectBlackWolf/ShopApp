import React, { useEffect, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
// import { UserContext } from '../context/UserContext';
import ItemFinder from '../api/ItemFinder';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import UserFinder from '../api/UserFinder';
// use the class method to fetch data

const MUIETyp = styled.div` 
    width: 100px;
    div: width: fit-content;
    text-align: space-between;
    html: font-family: Roboto, Helvetica, Arial;
    html: font-size: 23px;
    color: #A0ADDD;
    h2: font-size: 50px;
    background-color: #0D4DDD;
    border: 2px solid #9cd4ff;
    border-radius: 10px;
`

const Image = styled.img`
    width: 100px;
`;

const Mainpage: React.FC = () => {
  const { items, setItems } = useContext(ItemContext);
  // const { user, setUser } = useContext(UserContext);
  // const tempUser = { id: 0, us: "Sol@ZeroAdmin", pw: "ItmContextZX0", isLogin: true };
  // let PUID = tempUser.id;
  let history = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ItemFinder.get('/getAll');
        // const usere = await UserFinder.get(`/users/${PUID}`);
        
        // how do I chck if the user is logged in?
        // if the user is logged in, then I can send the user id to the cart
        // else I can send the user to the login page
        console.log(response.data);
        setItems(response.data);
        // setUser(usere);
      } catch (err) { /* empty */ }
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

  // const addToCart = async (e, id, quantity) => {
  //   e.stopPropagation();
  //   try {

  //     // send to the cart if user is logged in
  //     // else send to login page

  //     if (user !== null) {
  //       const nobj = { id: id, orderid: user.id, quantity: quantity, userid: user.id };
  //       await UserFinder.post(`/cart/${user.id}`, nobj);
  //       history(`/cart/${user.id}`);
  //     }
  //     else {
  //       history(`/login`);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
  let myMap = new Map<any, any>([]);
  im.forEach( () => {
    myMap.set(items.id, items.name);  
  });
  return (
    <>
      {
        im.map((item : any) => {
            function addToCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: any, quantity: any): void {
              throw new Error('Function not implemented.');
          }

          return (
            <MUIETyp>
              <div id='containeroo' key={item.id}>

                <ol className='card'>
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
                  <Image><img src={`${item.image}`}></img></Image>
                  <button onClick={(e) => handleItemSelect(e, item.id)}>Details</button>
                  <button onClick={(e) => handleUpdate(e, item.id)}>Update</button>
                  {/* <button onClick={(e) => handleDelete(e, item.id)}>Delete</button> */}
                  <button onClick={
                    (e) =>
                      addToCart(e, item.id, item.quantity)
                  }>Add-To-Cart</button>
                </ol>
              </div>
            </MUIETyp>
          )
        })
      }
    </>
  )
}

export default Mainpage