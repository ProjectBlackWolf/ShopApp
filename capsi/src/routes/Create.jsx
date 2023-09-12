import React from 'react'

const Create = () => {
  return (
      <>
      <h1>Add an Item</h1>
      <div className='buy-4'>
        <div className='form-row'>
          
                <form action="
                    /products" method='POST'>
                    <label htmlFor="name">Name</label>
            <div className='col'>
              <input type="text" name="name" id="name" placeholder='name'/>
            </div>
            <div className='col'>
              <input className='form-control' type='text' placeholder='price'></input>
            </div>

            <div className='col'>
            <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" />
            <select className='custom-select'>
              <option disabled>Price</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
              </select>
            </div>
            <button className='btn btn-primary'>Add</button>
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