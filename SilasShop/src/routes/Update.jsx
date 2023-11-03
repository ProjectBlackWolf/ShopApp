import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import ItemFinder from '../api/ItemFinder';

const Update = (props) => {
  const [itm, sItm] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const response = ItemFinder.get(`show/${id}`).then((response) => {
      console.log(response.data.data.item);
      sItm(response.data.data.item);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await ItemFinder.patch(`/${id}`,
      {
        id: id,
        name: e.target.name,
        description: e.target.description,
        price: e.target.price,
        quantity: e.target.quantity,
        image: e.target.image,
        category_id: e.target.category,
        sku: e.target.sku
      });
    console.log(response);
  }

  return (
    <>
      <h1>Update</h1>
      <h3>{itm.name}</h3>
      <img src={`${itm.image}`} />
      <form action="update">
        <label>
          Name:
          <input type="text" name="name" />
          <br />
          Description:
          <input type="text"
            name='description' value={itm.description} />
          <br />
          Price:
          <input type="number" name='price' />
          <br />
          Quantity:
          <input type="number" name='quantity' />
          <br />
          Image:
          <input type="text" name='image' value={itm.image} />
          <br />
          Category:
          <input type="number" name='category' value={itm.category_id} />
          <br />
          SKU:
          <input type="text" name='sku' value={itm.sku} />
          <br />
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </label>
      </form>
    </>
  )
}

export default Update