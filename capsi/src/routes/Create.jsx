import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../styles/App.css';
import ItemFinder from '../api/ItemFinder';
import { ItemContext } from '../context/ItemContext';

const Create = () => {
  
  const createItem = async (e) => {
    e.preventDefault();
    e = [ name, description, image, quantity, category ];
    try {
      const response = await ItemFinder.post('/', {
        name: e[0],
        description: e[1],
        image: e[2],
        quantity: e[3],
        category: e[4]
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Add an Item</h1>
      <div className='buy-4'>
        <div className='form-row'>
          <form action="/" method='POST'>
            <label htmlFor="name">Name</label>
            <div className='col'>
              <input type="text" name="name" id="name" placeholder='name' />
            </div>
            <div className='col'>
              <input className='form-control' type='text' placeholder='price'></input>
            </div>
            <Link to="/getAll"><button className='btn btn-primary'>Add</button></Link>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />
            <label htmlFor="image">Image</label>
            <input type="text" name="image" id="image" />
            <label htmlFor="quantity">Quantity</label>
            <input type="text" name="quantity" id="quantity" />
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Create