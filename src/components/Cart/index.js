import React, { useState, useEffect } from "react";
import "./cart.css";
//Redux
import { connect } from "react-redux";
import { clearCart } from "../../actions";
import { Redirect } from "react-router-dom";



const Cart = (props) => {
  const [home, setHome] = useState(false);
  
  return (
    <div style={{marginTop:'10%'}}>
       <h1 style={{fontSize:'45px'}}>Cart Details </h1>
  <>
    <div className="cartDetails">
      {home && <Redirect to="/" />}
      
      <h1 style={{marginTop:'4%'}}>Total Items : {props.cart.length}</h1>

      <div className="cartProd">
          {props.cart.map(({ name,preview ,price}) =>
              <div className="products ">
                  <div className="img">
                    <img id="cartImg" src={preview} alt={name} />
                  </div>

                  <div className="cartDesc">
                    <h3 id="cartName"> {name}</h3>
                    <h5>Price: {price}</h5>
                  </div>
              </div>
          )}
          <div className="totalPrice">
          <h1>
            Total Amount: {" "}
            {props.cart.length &&
              props.cart.reduce((acc, item) => acc + item.price, 0)}
          </h1>
          <button
            onClick={() => {
            props.clearAll();
            setHome(true);
            }}
          >
          Place Order
          </button>
        </div>
 
         
      </div>

               
   </div>
 </> 
 </div>
 );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  clearAll: () => dispatch(clearCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);