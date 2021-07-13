import React, { useEffect, useState } from "react";
import Slider from "../Slider";
import Card from "../Card";
import "./home.css";

//API
import { homeProductsAPI } from "../../utils/apis";
import axios from "axios";

//Store
import { connect } from "react-redux";
import { addProduct, getProducts } from "../../actions";

const Home = (props) => {
  useEffect(() => {
    axios(homeProductsAPI).then((res) => props.sendProducts(res.data));
  }, []); // componentDidMount
  return (
    <>
      <Slider />

      <div className="cards-content">
         <div className="section" id="ClothingSection">
             <h3>Clothing for Men and Women</h3>
             <div className="Clothing-Cards" > { 
            
                props.products?.slice(0, 5).map((item) => 
                    (<Card {...item} addProduct={() => props.addProductToCart(item)}/>)
                )}</div>
        </div>
        <div className="section" id="AccessoriesSection">
            <h3>Accessories for Men and Women</h3>
            <div className="Accessory-Cards" > {
                props.products?.slice(5, 10).map((item) => 
                    (<Card {...item} addProduct={() => props.addProductToCart(item)}/>)
                )}</div>
        </div>
    </div>
     
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  sendProducts: (payload) => dispatch(getProducts(payload)),
  addProductToCart: (payload) => dispatch(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);