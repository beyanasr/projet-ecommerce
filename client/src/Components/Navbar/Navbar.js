import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  FormControl,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../JS/actions/user";

function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector(state => state.userReducer.user)
  const cartItems = useSelector(state => state.cartReducer.cartItems)
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand to="/">BEAUTY VILLAGE</Navbar.Brand>
      <Navbar.Toggle aria-controls="React-Bootstrap" />
      <Navbar.Collapse id="React-Bootstrap" className="justify-content-end">
        <Nav
          className="mr-auto my-2 my-lg-0 "
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
         
          <Nav.Link as={Link} to="/">
            Home 
          </Nav.Link>
          <Nav.Link as={Link} to="/shop">
            Shop
          </Nav.Link>
          {isAuth ? (
            <NavDropdown title={user && user.name} id="navbarScrollingDropdown">
              {user && user.isAdmin ? (
            <NavDropdown.Item as={Link} to="/adminprofile">
              Profile
            </NavDropdown.Item>
          ) : 
            <NavDropdown.Item as={Link} to={`/profile/${user._id}`}>Profile</NavDropdown.Item>
            }
            <NavDropdown.Item  className="Link"
              to="/"
              onClick={() => {
                dispatch(logout());
                history.push("/");
              }}>logout</NavDropdown.Item>
          </NavDropdown>
          ) : (
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
          )}
           <Nav.Link as={Link} to="/contact">
            Contact us
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>{cartItems.length}</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
