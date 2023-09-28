import React, { useState, useEffect, useContext } from 'react';
// find a way to move the selected item onto this page.
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import ItemFinder from '../api/ItemFinder';
import { ItemContext } from '../context/ItemContext.jsx';
import '../styles/App.css';

const Update = (props) => {
  const { id } = useParams();
  const { selectedItem, setSelectedItem } = useContext(ItemContext);
  const [cid, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category_id, setCategory_id] = useState(0);
  const [sku, setSku] = useState("");
  const [message, setMessage] = useState("");
  let nav = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ItemFinder.get(`show/${id}`);
        console.log(response);
        setId(response.data.data.item.id);
        setName(response.data.data.item.name);
        setPrice(response.data.data.item.price);
        setDescription(response.data.data.item.description);
        setImage(response.data.data.item.image);
        setQuantity(response.data.data.item.quantity);
        setCategory_id(response.data.data.item.category_id);
        setSku(response.data.data.item.sku);
        setMessage(response.data.data);
      } catch (err) { }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const mein = await ItemFinder.put(`/${id}`, {
        id,
        name,
        price,
        description : description,
        image : image,
        quantity : quantity,
        category_id : category_id,
        sku: sku
      });
      console.log(mein);
    } catch (err) {
      console.log(err);
    }
    nav(`/getAll`);
  };

  return (
    <>
      <div className='container'>
        <h1>Update</h1>
        <ol>
          <h2>{name}</h2>
          <h3><label htmlFor="price">Price : {price}</label></h3>
          <h3><label htmlFor="description">Description : {description}</label></h3>
          <br />
          <h3><label htmlFor="image"></label></h3>
          <h3><img src={image} alt="" /></h3>
          <br />
          <h3><label htmlFor="quantity">Quantity : {quantity}</label></h3>
          <h3><label htmlFor="category">Category : {category_id}</label></h3>
          <h3><label htmlFor="sku">SKU : {sku}</label></h3>
        </ol>
        <div className='buy-4'>
          <div className='form-row'>
            <form action="">
              <label htmlFor="id">ID</label>
              <input onChange={(e) => setId(e.target.value)} type="text" name="id" id="id" placeholder={cid} />
              <label htmlFor="name">Name</label>
              <div className='col'>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder={name}
                  id="name"
                />
              </div>
              <div className='col'>
                <label htmlFor="price">Price</label>
                <input onChange={(e) => setPrice(e.target.value)} className='form-control' type='text' placeholder={price} ></input>
              </div>
              <label htmlFor="description">Description</label>
              <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" placeholder={description} />
              <label htmlFor="image">Image</label>
              <input onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" placeholder={image} />
              <label htmlFor="quantity">Quantity</label>
              <input onChange={(e) => setQuantity(e.target.value)} type="text" name="quantity" id="quantity" placeholder={quantity} />
              <label htmlFor="category">Category</label>
              <input onChange={(e) => setCategory_id(e.target.value)} type="text" name="category" id="category" placeholder={category_id} />
              <label htmlFor="sku">SKU</label>
              <input onChange={(e) => setSku(e.target.value)} type="text" name="sku" id="sku" placeholder={sku} />
              <button onClick={handleSubmit} className='btn btn-primary'>Update</button>
            </form>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Update