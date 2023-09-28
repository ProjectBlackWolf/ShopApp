import React, { useState, useEffect, useContext } from 'react';
// find a way to move the selected item onto this page.
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ItemFinder from '../api/ItemFinder';
import { ItemContext } from '../context/ItemContext.jsx';
import '../styles/App.css';

const ReadOne = (prop) => {
  const { id } = useParams();
  const { selectedItem, setSelectedItem} = useContext(ItemContext);
  const [cid, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [sku, setSku] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  let nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ItemFinder.get(`show/${id}`);
        console.log(response.data.data.item);
        setId(response.data.data.item.id);
        setName(response.data.data.item.name);
        setPrice(response.data.data.item.price);
        setDescription(response.data.data.item.description);
        setImage(response.data.data.item.image);
        setQuantity(response.data.data.item.quantity);
        setCategory_id(response.data.data.item.category_id);
        setSku(response.data.data.item.sku);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const navBack = () => {
    nav(`/getAll`);
  }

  return (
    <>
      <form action="">
        <h2><label htmlFor="name"> Name : {name}</label></h2>
        <h3><label htmlFor="price">Price : {price}</label></h3>
        <h3><label htmlFor="description">Description : {description}</label></h3>
        <br />
        <h3><label htmlFor="image"></label></h3>
        <h3><img src={image} alt="" /></h3>
        <br />
        <h3><label htmlFor="quantity">Quantity : {quantity}</label></h3>
        <h3><label htmlFor="category">Category : {category_id}</label></h3>
          <h3><label htmlFor="sku">SKU : {sku}</label></h3>
      </form>
      <button onClick={navBack}>back</button>
    </>
  )
}

export default ReadOne