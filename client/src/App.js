import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/router/PrivateRoute";
import { useDispatch } from "react-redux";
import { current } from "./JS/actions/user";
import "./App.css";
import ContactUs from "./Components/ContactUs/ContactUs";
import Signup from "./Components/Signup/Signup";
import Profil from "./Components/Profile/Profil";
import ProfileAdmin from "./Components/ProfileAdmin";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import ProductScreen from "./Components/ProductScreen/ProductScreen";
import Cart from "./Components/Cart/Cart";
import NavBar  from "./Components/Navbar/Navbar";
import AddProduct from "./Components/AddProduct";
import Add from "./Components/AddProducts";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile/:_id" component={Profil} />
        <Route path="/Contact" component={ContactUs} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/addproduct" component={Add} />

        {/* <Route exact path="/editpost" component={EditPost} /> */}
        <PrivateRoute exact path="/adminprofile" component={ProfileAdmin} />

      </Switch>
    </div>
  );
}

export default App;
