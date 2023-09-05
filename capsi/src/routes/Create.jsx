import React from 'react'

const Create = () => {
  return (
      <>
            <h1>Add an Item</h1>
            <div>
                <form action="
                    /products" method='POST'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" />
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
      </>
  )
}

export default Create