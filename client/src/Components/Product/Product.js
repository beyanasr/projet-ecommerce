import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ el }) => {
  return (
    <div className="product">
     
      <img src={el.photo} alt={el.title} /> 

      <div className="product__info">
        <p className="info__name">{el.title}</p>

        <p className="info__description">{el.description}</p>

        <p className="info__price">${el.price}</p>

       <Link to={`/product/${el._id}`} className="info__button">
          View
        </Link>
      </div> 
    </div>
  );
};

export default Product;