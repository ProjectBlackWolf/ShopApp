import React, { useState, useEffect, useContext } from 'react'
// find a way to move the selected item onto this page.
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import ItemFinder from '../api/ItemFinder'
import { ItemContext } from '../context/ItemContext.jsx'
import '../styles/App.css'

const FormDataDisplay = ({ displayState }) => {
  const itemEntriesArray = Object.entries(displayState).reduce((acc, prop) => {
    let [key, value] = prop
    key = key[0].toUpperCase() + key.slice(1)
    if (prop[0] !== 'children') {
      return acc.push(
        <li className="bigLabel">
          {key} : {value}
        </li>
      )
    }
  }, [])

  return <ol>{itemEntriesArray.length && itemEntriesArray}</ol>
}

const FormComponent = ({ formState, setFormState }) => {
  let nav = useNavigate()

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

  const handleChange = (e) => {
    setFormState({ ...formState, [e.id]: e.target.value })
  }

  const formContent = Object.entries(formState).map((data) => {
    return (
      <div className="col">
        <label className="formLabel" htmlFor="id">
          ID
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
  })

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
          type="text"
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
      <label className="formLabel" htmlFor="image">
        Image
      </label>
      <input
        onChange={handleChange}
        type="text"
        name="image"
        id="image"
        placeholder={image}
        value={image}
      />
      <label className="formLabel" htmlFor="quantity">
        Quantity
      </label>
      <input
        onChange={handleChange}
        type="text"
        name="quantity"
        id="quantity"
        placeholder={quantity}
        value={quantity}
      />
      <label className="formLabel" htmlFor="category">
        Category
      </label>
      <input
        onChange={handleChange}
        type="text"
        name="category"
        id="category"
        placeholder={category_id}
        value={category_id}
      />
      <label className="formLabel" htmlFor="sku">
        SKU
      </label>
      <input
        onChange={handleChange}
        type="text"
        name="sku"
        id="sku"
        placeholder={sku}
        value={sku}
      />
      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
  )
}

const Update = (props) => {
  const { id } = useParams()
  const { selectedItem, setSelectedItem } = useContext(ItemContext)
  // const [cid, setId] = useState('')
  // const [name, setName] = useState('')
  // const [price, setPrice] = useState('')
  // const [description, setDescription] = useState('')
  // const [image, setImage] = useState('')
  // const [quantity, setQuantity] = useState(0)
  // const [category_id, setCategory_id] = useState(0)
  // const [sku, setSku] = useState('')
  const [message, setMessage] = useState('')

  // JR: Easier to do a single object than several use states

  const [formState, setFormState] = useState({
    cid: '',
    name: '',
    price: '',
    description: '',
    image: '',
    quantity: 0,
    category_id: 0,
    sku: ''
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { data }
        } = await ItemFinder.get(`show/${id}`)
        const { item } = data
        const { id, name, price, description, image, quantity, category_id, sku } = item
        console.log(response)
        // setId(response.data.data.item.id)
        // setName(response.data.data.item.name)
        // setPrice(response.data.data.item.price)
        // setDescription(response.data.data.item.description)
        // setImage(response.data.data.item.image)
        // setQuantity(response.data.data.item.quantity)
        // setCategory_id(response.data.data.item.category_id)
        // setSku(response.data.data.item.sku)
        // setMessage(response.data.data)
        // setSelectedItem(response.data.data.item)
        if (item) {
          setSelectedItem(item)
          setFormState({ id, name, price, description, image, quantity, category_id, sku })
        }
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  const { cid, name, price, description, image, quantity, category_id, sku } = formState
  const propsForFormDisplay = { cid, price, description, image, quantity, category_id, sku }

  // JR: too much unnecessary nesting. Add a class to handle styles rather than H3.
  // H1-6 are mainly used for anchor points on a page, especially for screen readers.
  // There should only ever be 1 h1 per page, usually a layout page that you drop react router in.
  // can use a class like "bigLabel"
  // although the larger issue is that they are not labels, but <li> in the <ol>

  return (
    <>
      <div className="container">
        <h1>Update</h1>
        <h2>{name}</h2>
        <FormDataDisplay displayState={propsForFormDisplay} />
        <div className="buy-4">
          <div className="form-row">
            <FormComponent formState={formState} setFormState={setFormState} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Update
