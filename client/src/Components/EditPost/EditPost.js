// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { editPost } from "../../JS/actions/product";
// function EditPost({ post }) {
//   const [show, setShow] = useState(false);
//   const [title, setTitle] = useState(post.title);
//   const [body, setBody] = useState(post.body);
//   const [url, setUrl] = useState(post.url);

//   const dispatch = useDispatch();

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleEdit = () => {
//     handleClose();
//     dispatch(editPost(post._id, { title, body, url }));
//   };
//   return (
//     <>
//       <button variant="primary" onClick={handleShow}>
//         Edit
//       </button>

//       <Modal show={show}>
//         <Modal.Header closeButton onClick={handleClose}>
//           <Modal.Title>Edit Task</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form style={{ width: 400 }}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={body}
//                 onChange={(e) => setBody(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Image</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleEdit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default EditPost;
