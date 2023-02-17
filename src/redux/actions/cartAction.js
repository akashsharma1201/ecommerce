import { ADD_TO_CART } from "../constants/fetchDataConstant"
import { REMOVE_TO_CART } from "../constants/fetchDataConstant";

const addToCart = (data) => {
    console.log(data);
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

const deleteToCart = (id) => {
    console.log(id);
    return {
        type: REMOVE_TO_CART,
        payload: id
    }
}

export const deletetocartAction = (id) => {
    console.log(id);
    return (dispatch) => {
      return  dispatch(deleteToCart(id))
    }
}

export const addtocartAction = (product) => {
    return (dispatch) => {
      return  dispatch(addToCart(product))
    }
}