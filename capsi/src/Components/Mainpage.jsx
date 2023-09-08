import React, { useEffect, useContext } from 'react';
import ItemFinder from '../api/ItemFinder';
import { ItemContext } from '../context/ItemContext';

const Mainpage = (props) => {
  const {items, setItems} = useContext(ItemContext);
  useEffect(async () => {
    const fetchData = async () => {
      try {
        const response = ItemFinder.get("/");
        setItems(response.data.data.invItem);
      } catch (error) { }
    };
    fetchData();
  }, [])

  return (
    <>
      <div className='list-group'>
        <table className='table table-hover table-dark'>
          <thead>
          <tr className='bg-primary'>
              <th scope='col'>name</th>
              <th scope='col'>price</th>
              <th scope='col'>description</th>
              <th scope='col'>image</th>
              <th scope='col'>quantity</th>
              <th scope='col'>category</th>
              <th scope='col'>Edit</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          
          <tbody className='control-buttons'>
            {ItemFinder.map(item => {
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.image}</td>
                  <td>{item.quantity}</td>
                </tr>
              })}
            <tr>
              <td>
                <button className='btn btn-warning'>
                Update
              </button>
              </td>
              <td>
                <button className='btn btn-danger'>
                  Delete
                </button>
              </td>
            </tr>
          </tbody> 
        </table>
        </div>
    </>
  )
}

export default Mainpage