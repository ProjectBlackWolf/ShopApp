import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ItemFinder from '../api/ItemFinder';

const MUIETyp = styled.div`
    div: width: fit-content;
    html: font-family: Roboto, Helvetica, Arial;
    html: font-size: 23px;
    color: #FFADDE;
    h2: font-size: 50px;
    background-color: #0D4DDD;
`;
const Container = styled.div`
    text-align: center;
`;

const Create = () => {
  const { addItems } = useContext(ItemContext);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [sku, setSku] = useState("");
  const [message, setMessage] = useState("");
  let nav = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await ItemFinder.post(`/`, {
        id: id,
        name: name,
        price: price,
        description: description,
        image: image,
        quantity: quantity,
        category_id: category_id,
        sku: sku
      });

      console.log(response.data);
      addItems(response.data.data.item); // addItems is a function that takes in an array of it
      setMessage(response.data);
      nav(`/getAll`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <MUIETyp>
          <h1>Add an Item</h1>
          <div className='buy-4'>
            <div className='form-row'>
              <form action='/getAll'>
                <label htmlFor='id'>Id</label>
                <input value={id} onChange={(e) => setId(e.target.value)} type='number' name='id' id='id' />
                <br />

                <div className='col'><label htmlFor="name">Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder='name' />
                </div>
                <br />
                <div className='col'>
                  <label htmlFor="price">price</label>
                  <input value={price} onChange={(e) => setPrice(e.target.value)} className='form-control' type='number' placeholder='price'></input>
                </div>
                <br />
                <label htmlFor="description">Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" />
                <br />
                <label htmlFor="image">Image</label>
                <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" />
                <br />
                <label htmlFor="quantity">Quantity</label>
                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" name="quantity" id="quantity" />
                <br />
                <label htmlFor="category">Category</label>
                <input value={category_id} onChange={(e) => setCategory_id(e.target.value)} type="number" name="category" id="category" />
                <br />
                <label htmlFor="sku">SKU</label>
                <input value={sku} onChange={(e) => setSku(e.target.value)} type="text" name="sku" id="sku" />
                <br />
                <button onClick={submitForm} type='submit' className='btn btn-primary'>Add</button>
              </form>
            </div>
          </div>
        </MUIETyp>
      </Container>
    </>
  )
}

export default Create