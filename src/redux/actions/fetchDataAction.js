
import axios from "axios"
import { FETCH_ALL_DATA, FETCH_SINGLE_PRODUCT } from "../constants/fetchDataConstant"

const allData = (data) => {
    return {
        type: FETCH_ALL_DATA,
        payload: data
    }
}


const singleProductData = (product) => {
    return {
        type: FETCH_SINGLE_PRODUCT,
        payload: product
    }
}



export const fetchSingleProduct = (id) => {
    return (dispatch) => {
        axios(`https://fakestoreapi.com/products/${id}`).then((result) => {            
               return dispatch(singleProductData(result.data))            
        }).catch((error) => {
           return dispatch(singleProductData(error))
        })
    }
}

export const fetchAllDataAction = () => {
    return (dispatch) => {
        axios("https://fakestoreapi.com/products").then((result) => {
            
              return  dispatch(allData(result.data))            
        }) 
        .catch((error) => {
            return dispatch(allData(error))
         })      
       
    }
}




// useDispatch(() => {
//     axios("https://fakestoreapi.com/products").then((result) => console.log(result))
//   }, [])