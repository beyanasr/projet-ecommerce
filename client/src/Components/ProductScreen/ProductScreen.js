import "./ProductScreen.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getproduct} from "../../JS/actions/product";
import { addToCart } from "../../JS/actions/cart";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productReducer.product);

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getproduct(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return (
    <div className="productscreen">
      {product ? (
        
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.photo} alt={product.photo} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.title}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )
    :
    <h3> Loading....</h3>}
    </div>
  );
};

export default ProductScreen;
