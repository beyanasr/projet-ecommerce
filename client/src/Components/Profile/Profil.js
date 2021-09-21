import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { current } from "../../JS/actions/user";

import { Form, Button, Image } from "react-bootstrap";

const Profil = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(current());
  }, []);

  return (
    <div>
      {user ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <Form style={{ width: 400 }}>
            <div><Image src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"></Image>  </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              {/* <Form.Control type="text" value={user.name} /> */}
              <h5>{user.name}</h5>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              {/* <Form.Control type="text" value={user.lastName} /> */}
              <h5>{user.lastName}</h5>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              {/* <Form.Control type="text" value={user.email} /> */}
              <h5>{user.email} </h5>
            </Form.Group>
            
          </Form>
        </div>
      ) : (
        <h1>loading....</h1>
      )}

      
    </div>
  );
};

export default Profil;
