import "./Shop.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../../JS/actions/product";
import Product from "../Product/Product";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproducts());
  }, []);
  
  const products = useSelector((state) => state.productReducer.products);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {products ? (
          products.map((el) => {
           return <Product
              el={el}
            />
           
          })
        ) :
        <h3>loading ....</h3>}
      
      </div>
    </div>
  );
};

export default Shop;
