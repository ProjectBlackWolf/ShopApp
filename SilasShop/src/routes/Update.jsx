import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemFinder from '../api/ItemFinder';

const Update = () => {
  const [itm, sItm] = useState({ data: { item: {} } });
  const { id } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    try {
      const response = ItemFinder.get(`show/${id}`).then(
        (response) => {
          sItm(response.data.data.item);
          console.log(itm);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [data, setData] = useState({
    name: itm.name ? itm.name : "",
    description: itm.description ? itm.description : "",
    price: itm.price ? itm.price : "",
    image: itm.image ? itm.image : "",
    quantity: itm.quantity ? itm.image : "",
    category_id: itm.category_id ? itm.category_id : "",
    sku: itm.sku ? itm.sku : ""
  });

  const editData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/invItem/${itm.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      navi();
    } catch (error) {
      console.log(error);
    }
  }

  const navi = () => {
    nav('/getAll')
  }
  return (
    <>
      <h1>Update</h1>
      <form onSubmit={editData}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={data.name}
            onChange={e => setData({ ...data, name: e.target.value })}
            name="name"
            type="text"
            className="form-control"
            id="name"
            placeholder={`Enter Name > ${itm.name}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            value={data.description}
            onChange={e => setData({ ...data, description: e.target.value })}
            name="description"
            type="text"
            className="form-control"
            id="description"
            placeholder={`Enter Description > ${itm.description}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            value={data.price}
            onChange={e => setData({ ...data, price: e.target.value })}
            name="price"
            type="number"
            className="form-control"
            id="price"
            placeholder={`Enter Price > ${itm.price}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            value={data.quantity}
            onChange={e => setData({ ...data, quantity: e.target.value })}
            name="quantity"
            type="number"
            className="form-control"
            id="quantity"
            placeholder={`Enter Quantity > ${itm.quantity}`}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="image">
            Image
          </label>
          <input
            value={data.image}
            onChange={e => setData({ ...data, image: e.target.value })}
            name="image"
            type="text"
            className="form-control"
            id="image"
            placeholder={`Enter Image > ${itm.image}`}
          />
          <img src={`${itm.image}`} alt="" /><br />
        </div>
        <div className="form-group">
          <label htmlFor="category_id">Category</label>
          <input
            value={data.category_id}
            onChange={e => setData({ ...data, category_id: e.target.value })}
            name="category_id"
            type="number"
            className="form-control"
            id="category_id"
            placeholder={`Enter CategoryId > ${itm.category_id}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sku">SKU</label>
          <input
            value={data.sku}
            onChange={e => setData({ ...data, sku: e.target.value })}
            name="sku"
            type="text"
            className="form-control"
            id="sku"
            placeholder={`Enter SKU > ${itm.sku}`}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Update