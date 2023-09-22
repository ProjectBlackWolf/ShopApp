import React, { useEffect, useState } from 'react';
import ItemFinder from '../api/ItemFinder';

const Update = () => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ItemFinder.get(`/${id}`);
        // await ItemFinder.post(`/update/${id}`); save this for the Update.jsx
        console.log(response.data);
        setItem(response.data);
      } catch (err) { }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='container'>
        <h1>Update</h1>
        <div className='buy-4'>
          <div className='form-row'>
            <form action="/update" method='PUT'>
              <label htmlFor="name">Name</label>
              <div className='col'>
                <input type="text" name="name" id="name" placeholder='name' />
              </div>
              <div className='col'>
                <input className='form-control' type='text' placeholder='price'></input>
              </div>
              
              <label htmlFor="description">Description</label>
              <input type="text" name="description" id="description" />
              <label htmlFor="image">Image</label>
              <input type="text" name="image" id="image" />
              <label htmlFor="quantity">Quantity</label>
              <input type="text" name="quantity" id="quantity" />
              <label htmlFor="category">Category</label>
              <input type="text" name="category" id="category" />
              <button className='btn btn-primary'>Add</button>
            </form>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Update