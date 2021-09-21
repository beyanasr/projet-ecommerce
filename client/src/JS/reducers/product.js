import { GET_PRODUCT_FAIL, GET_PRODUCT_LOAD, GET_PRODUCT_SUCCESS,GET_PRODUCT,POST_PRODUCT} from "../const/product";
//initial state

const initialstate={
    loadproduct:false,
    errors:null,
    product:{},
    products:null,
};

export const productReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_LOAD: 
        return {...state,loadproduct:true}
        case GET_PRODUCT_SUCCESS:
            return {...state,products:payload,loadproduct:false}
        case GET_PRODUCT_FAIL:
            return {...state,errors:payload,loadproduct:false}

        case GET_PRODUCT:
            return {...state,product:payload}
            case POST_PRODUCT:
            
                return  {...state, loadproduct:false, product:payload};

        default: return state
    }
    
}