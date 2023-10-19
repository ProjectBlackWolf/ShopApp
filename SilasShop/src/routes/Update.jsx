import React, { useState, useEffect, useContext } from 'react';
import ItemFinder from '../api/ItemFinder';
import { ItemContext } from '../context/ItemContext';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/App.css';

const Update = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState({
    cid: id,
    name: '',
    price: '',
    description: '',
    image: '',
    quantity: 0,
    category_id: 0,
    sku: ''
  });
  const { selectedItem, setSelectedItem } = useContext(ItemContext);
  // this does return needed data
  const dataRetrieval = async (idd) => {
    try {
      const {
        data: { data }
      } = await ItemFinder.get(`show/${idd}`, formState);
      const { item } = data
      const { id, name, price,
        description, image,
        quantity, category_id, sku } = item;

      if (item) {
        setSelectedItem(item);
        setFormState({
          id, name, price,
          description, image,
          quantity, category_id, sku
        });
      }
      // form display sits here

      setMessage(item);
    } catch (error) {
      console.error(error);
    }
  }
  // this shouldn't return anything except 
  // cleanup
  useEffect(() => {
    //const sndUpdate = await useContext(ItemContext)
    dataRetrieval(id);
  }, []);
  const FormComponent = ({ formState, setFormState }) => {
    let nav = useNavigate();
    const handleChange = (e) => {
      setFormState({ ...formState, [e.id]: e.target.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const mein = await ItemFinder.put(`/${id}`, formState)
        console.log(mein)
      } catch (err) {
        console.log(err)
      }
      nav(`/getAll`)
    }
    const formContent = Object.entries(formState).map((data) => {
      return (
        <div className="col">
          <label className="formLabel" htmlFor="id">
            ID
            {data}
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="id"
            id="id"
            placeholder={cid}
            value={cid}
          />
        </div>
      )
    });
    return (
      <form onSubmit={handleSubmit}>
        <div className="col">
          <label className="formLabel" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder={name}
            id="name"
            value={name}
          />
        </div>
        <div className="col">
          <label className="formLabel" htmlFor="price">
            Price
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="number"
            name="price"
            id="price"
            placeholder={price}
            value={price}
          />
        </div>
        <label className="formLabel" htmlFor="description">
          Description
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="description"
          id="description"
          placeholder={description}
          value={description}
        />
        <br />
        <label className="formLabel" htmlFor="image">
          Image
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="image"
          id="image"
          placeholder={image}
          
        />
        <br />
        <label className="formLabel" htmlFor="quantity">
          Quantity
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="quantity"
          id="quantity"
          placeholder={quantity}
        />
        <br />
        <label className="formLabel" htmlFor="category">
          Category
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="category"
          id="category"
          placeholder={category_id}
        />
        <br />
        <label className="formLabel" htmlFor="sku">
          SKU
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="sku"
          id="sku"
          placeholder={sku}
        />
        <br />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    )
  }
  const { cid, name, price, description, image, quantity, category_id, sku } = formState;
  const propsForFormDisplay = { cid, price, description, image, quantity, category_id, sku };
  const FormDataDisplay = ({ displayState }) => {
    const itemEntriesArray = Object.entries(displayState).reduce(
      (acc = [], prop = []) => {
        let [key, value] = prop;
        key = key[0].toUpperCase() + key.slice(1);
        if (prop[0] !== 'children') {
          return acc.map(() => {
            <li className="bigLabel">
              {key} : {value}
            </li>
          });
        }
      }, [])

    return <ol>{itemEntriesArray.length && itemEntriesArray}</ol>
  }

  return (
    <>
      <h1>Update</h1>
      <h2>{name}</h2>
      <FormDataDisplay displayState={propsForFormDisplay}></FormDataDisplay>
      <FormComponent formState={formState} setFormState={setFormState}></FormComponent>
    </>
  )
}

export default Update