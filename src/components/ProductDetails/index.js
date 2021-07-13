import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/apis";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./ProdDetails.css"

const ProductsDetails = (props) => {
  const [product, setProduct] = useState({});
  const [loader, setloader] = useState(true);
  const { id } = useParams();
  const {
    brand = "",
    description = "",
    id: productId = null,
    isAccessory = null,
    name = "",
    photos = [],
    preview = "",
    price = null,
    size = [],
  } = product;

  
  useEffect(() => {
    axios(`${getProduct}${id}`).then((res) => {
      setProduct(res.data);
      setloader(false);
    });
  }, []);
  return (
    <div style={{marginTop:'8%'}}>
      <h1>Product Details - {id}</h1>
      {loader ? ( <div className="CircularProgress">
        <CircularProgress/>
        </div>
      ) : (
        <>
        <div className="Product">
        <div className="Image">
          <img src={preview} alt="image" id="preview"/>
        </div>
        
        <div className="ProdDescription">
          <h1 id="productName">{name}</h1>
          <h4 id="brand">{brand}</h4>
          <h3 id="price">Price: RS <span id="priceValue">{price}</span></h3>
          
          <div className="description">
            <h3 id="descHead">Description : </h3>
            <p id="description">{description}</p>
          </div>
          <h3 id="preview">Product Preview</h3>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
          {photos.map(photos => 
               <img src={photos} alt="image" id="photos"/>
            )}
          </div>
        </div>
        </div>
        </>
      )}
    </div>
  );
};

export default ProductsDetails;