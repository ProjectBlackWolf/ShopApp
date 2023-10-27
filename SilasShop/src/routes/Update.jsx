import React, { useState, useEffect, useContext } from 'react';
import ItemFinder from '../api/ItemFinder';
import { ItemContext } from '../context/ItemContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import { useTable } from "react-table";
import axios from "axios";

import '../styles/App.css';

const Update = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    price: 0,
    description: '',
    quantity: 0,
  });
  const [nameT, setName] = useState('');
  const [priceT, setPrice] = useState(0);
  const [descriptionT, setDescription] = useState('');
  const [quantityT, setQuantity] = useState(0);
  //const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await ItemFinder.get(`show/${id}`);
      console.log(response.data.data.item);
      setName(response.data.data.item.name);
      setPrice(response.data.data.item.price);
      setDescription(response.data.data.item.description);
      setQuantity(response.data.data.item.quantity);
    };
    fetchData();
  }, []);

  const setData = async (body) => {
    try {
      const data = await ItemFinder.put(`${id}`, {
        description: descriptionT,
        name: nameT,
        price: priceT,
        quantity: quantityT
      }, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "PUT",
          "Data-Type": "json",
          "put": "PUT"
        }
      }).then((response) => {
        console.log(response.data.data.item);
      });
      setMessage(message);
    }
    catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const body = { id, nameT, priceT, quantityT };
      setFormState(body);
      setData(body);
      //history('/getAll');
    } catch (err) {
      console.log(err)
    }
    //history(`/getAll`)
  }

  return (
    <>
      <h1>Update</h1>
      <h2>ID: {id}</h2>
      <h2>{nameT}</h2>
      <form action='POST' onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="name">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder={nameT}
          id="name"
          value={nameT}
        />
        <br />
        <label className="formLabel" htmlFor="price">
          Price
        </label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
          name="price"
          id="price"
          type='number'
          placeholder={priceT}
          value={priceT}
        />
        <br />
        <label className="formLabel" htmlFor="description">
          Description
        </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          id="description"
          placeholder={descriptionT}
          value={descriptionT}
        />
        <br />
        <label className="formLabel" htmlFor="quantity">
          Quantity
        </label>
        <input
          onChange={(e) => setQuantity(e.target.value)}
          name="quantity"
          id="quantity"
          className="form-control"
          type='number'
          placeholder={quantityT}
          value={quantityT}
        />
        <br />
        
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  )
}

export default Update
