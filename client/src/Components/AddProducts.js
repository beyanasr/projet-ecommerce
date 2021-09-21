import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {postproduct} from "../JS/actions/product";
function Add() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [countInStock, setCountInStock] = useState()

    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd = () => {
        handleClose();
        dispatch( postproduct({title,price,description,photo,category,countInStock})
          );
        // history.push("/adminprofile");
    };
    return (
        <>
            <button variant="primary" onClick={handleShow}>
                Add Product
            </button>

            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={{ width: 400 }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Price"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="category"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Count In Stock</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="countInStock"
                                onChange={(e) => setCountInStock(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="image"
                                onChange={(e) => setPhoto(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                       Submit 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Add;
