import React from 'react';

const BuyForm = props => {
  return (
      <>
          <div>
              <h2>Checkout Items</h2>
              <div>
                {this.props.cart.map((item) => {
                    return (
                        item.name,
                        item.quantity,
                        item.price * item.quantity,
                        item.image,
                        item.description,
                        item.quantity,
                        item.sku,
                        item.category
                    )
                })}
              </div>
                <h3>Total:</h3>
              <h4>{
                  this.props.total += item.price
              }</h4>
          </div>
          <form action='/invItem' method="POST">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name.." />
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email.." />
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" placeholder="Your address.." />
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" placeholder="Your city.." />
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" placeholder="Your state.." />
              <label htmlFor="zip">Zip</label>
              <br />
                <br />
              <input type="text" id="zip" name="zip" placeholder="Your zip.." />
              <label htmlFor="cardname">Card Name</label>
              <input type="text" id="cardname" name="cardname" placeholder="Your card name.." />
              <label htmlFor="cardnumber">Card Number</label>
              <input type="text" id="cardnumber" name="cardnumber" placeholder="Your card number.." />
              <label htmlFor="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="Your exp month.." />
              <label htmlFor="expyear">Exp Year</label>
              <input type="text" id="expyear" name="expyear" placeholder="Your exp year.." />
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="Your cvv.." />
          </form>
          <button type='submit' id='buyB' onClick={buy()}>BUY</button>
        </>
      
  )
}

BuyForm.propTypes = {}

export default BuyForm