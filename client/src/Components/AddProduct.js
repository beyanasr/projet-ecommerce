// import React, { useEffect, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {postproduct} from "../JS/actions/product"


// const AddProduct = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const dispatch = useDispatch();
//   const history = useHistory();
  
  
//   return (
//     <div
//       className="card input-filed"
//       style={{
//         margin: "30px",
//         maxWidth: "500px",
//         padding: "20px",
//         textAlign: "center",
//       }}
//     >
//       <div className="file-field input-field ">
//         <div className="btn blue darken-1">
//           <span>add img</span>
//           <input type="img" onChange={(e) => setPhoto(e.target.value)} />
//         </div>
//       </div>

//       <input
//         type="text"
//         placeholder="title"
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="description"
//         onChange={(e) => setDescription(e.target.value)}
//       />
//        <input
//         type="text"
//         placeholder="Price"
//         onChange={(e) => setPrice(e.target.value)}
//       />
//        <input
//         type="text"
//         placeholder="category"
//         onChange={(e) => setCategory(e.target.value)}
//       />
// {/* <Link to='/profile'> */}
//       <button
//         className="btn waves-effect blue darken-1"
//         onClick={() =>{
//           dispatch( postproduct({title,price,description,photo,category})
//           );
//           history.push("/adminprofile");}}
//       >
//         Submit
//       </button>
//       {/* </Link> */}
//     </div>
//   );
// };

// export default AddProduct;
