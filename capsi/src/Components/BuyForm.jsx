import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, Redirect, useNavigate } from 'react-router-dom';

const BuyForm = ({ cartArr, total }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to submit the form data to the server

    console.log('Form submitted!');
  };
  return (
    <>
      <div>
        <h2>Checkout Items</h2>
        <div>
          {cartArr.map((item) => {
            return (
              <div key={item.sku}>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price * item.quantity}</p>
                <img src={item.image} alt={item.name} />
                <p>{item.description}</p>
                <p>SKU: {item.sku}</p>
                <p>Category: {item.category}</p>
              </div>
            );
          })}
        </div>
        <h3>Total: {total}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email.."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Your address.."
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Your city.."
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="Your state.."
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        <label htmlFor="zip">Zip</label>
        <br />
        <br />
        <input
          type="text"
          id="zip"
          name="zip"
          placeholder="Your zip.."
          value={zip}
          onChange={(event) => setZip(event.target.value)}
        />
        <label htmlFor="cardname">Card Name</label>
        <input
          type="text"
          id="cardname"
          name="cardname"
          placeholder="Your card name.."
          value={cardName}
          onChange={(event) => setCardName(event.target.value)}
        />
        <label htmlFor="cardnumber">Card Number</label>
        <input
          type="text"
          id="cardnumber"
          name="cardnumber"
          placeholder="Your card number.."
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />
        <label htmlFor="expmonth">Exp Month</label>
        <input
          type="text"
          id="expmonth"
          name="expmonth"
          placeholder="Your exp month.."
          value={expMonth}
          onChange={(event) => setExpMonth(event.target.value)}
        />
        <label htmlFor="expyear">Exp Year</label>
        <input
          type="text"
          id="expyear"
          name="expyear"
          placeholder="Your exp year.."
          value={expYear}
          onChange={(event) => setExpYear(event.target.value)}
        />
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          placeholder="Your cvv.."
          value={cvv}
          onChange={(event) => setCvv(event.target.value)}
        />
        <button type="submit" id="buyB">
          <Link to={'/THANKS'}>BUY</Link>
        </button>
      </form>
    </>
  );
};

BuyForm.propTypes = {}

export default BuyForm