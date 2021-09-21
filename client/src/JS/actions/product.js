import { GET_PRODUCT_LOAD, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT,POST_PRODUCT,POST_PRODUCT_FAIL} from "../const/product"

import axios from "axios"

//Get all Products
export const getproducts=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOAD})
    try {
        let result= await axios.get("/product/getproducts")
        dispatch({type:GET_PRODUCT_SUCCESS,payload:result.data.result})
    } catch (error) {
        dispatch({type:GET_PRODUCT_FAIL,payload:error})
        
    }
}
//Get one Product
export const getproduct=(id)=>async(dispatch)=>{
    
    try {
        let res=await axios.get(`/product/getoneproduct/${id}`)
     
        dispatch({type:GET_PRODUCT,payload:res.data.result});
     } catch (err) {
        console.log(err)
}}

//Delete Product
export const deleteproduct=(id)=>async(dispatch)=>{
   let result = await axios.delete(`/product/deleteoneproduct/${id}`)
    .then((res)=>dispatch(getproducts()))
    .catch((err)=>console.log(err))
}

//Add Product
export const postproduct=(product)=>async(dispatch)=>{
    try {
        const result=await axios.post("/product/addproduct",product)
      
        dispatch({type:POST_PRODUCT,payload:result.data})
        dispatch(getproducts())
    } catch (error) {
        dispatch({type:POST_PRODUCT_FAIL,payload:error})
        console.log(error) 
    }
  
}







//Edit Product