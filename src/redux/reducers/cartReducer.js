import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/fetchDataConstant";


const initialState = {
    cartsList : [],
    isLoading : false
};

export const cartReducer = (state=initialState , action) =>{
    console.log(action.payload);
    switch(action.type){
        case ADD_TO_CART :

            return {
                ...state , 
                cartsList : [...state.cartsList , action.payload] ,
                isLoading : true
            }

        case REMOVE_TO_CART :
            let data = state.cartsList.filter((item)=> item.id !== action.payload)
            console.log(data);
        return {
            ...state ,
            cartsList : data
        }

        default : 
        return state 
    }
}