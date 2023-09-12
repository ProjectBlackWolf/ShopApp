import React, { useEffect, useContext } from 'react';
import '../styles/App.css';
 import ItemFinder from '../api/ItemFinder';
 import { ItemContext } from '../context/ItemContext';

const Mainpage = () => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3005/invItem`)

      const json = await response.json();
      console.log(json);
      //setItems(response.data);
    } catch (error) { }
  };
  fetchData();
//  const {items, setItems} = useContext(ItemContext);
  //useEffect(() => fetchData(), [])

  // return (
  //   <>
  //     <div className='list-group'>
  //       <table className='table table-hover table-dark'>
  //         <thead>
  //         <tr className='bg-primary'>
  //             <th scope='col'>name</th>
  //             <th scope='col'>price</th>
  //             <th scope='col'>description</th>
  //             <th scope='col'>image</th>
  //             <th scope='col'>quantity</th>
  //             <th scope='col'>category</th>
  //             <th scope='col'>Edit</th>
  //             <th scope='col'>Delete</th>
  //           </tr>
  //         </thead>
          
  //         <tbody className='control-buttons'>
  //           {items.map(item => {
  //               <tr>
  //                 <td>{item.name}</td>
  //                 <td>{item.price}</td>
  //                 <td>{item.description}</td>
  //                 <td><img src={item.image}></img></td>
  //                 <td>{item.quantity}</td>
  //               </tr>
  //             })}
  //           <tr>
  //             <td>
  //               <button className='btn btn-warning'>
  //               Update
  //             </button>
  //             </td>
  //             <td>
  //               <button className='btn btn-danger'>
  //                 Delete
  //               </button>
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>
  //       </div>
  //   </>
  // )
  return (
    <>
    </>
  )
}

export default Mainpage