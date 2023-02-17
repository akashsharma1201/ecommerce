import { combineReducers } from "redux";
import { fetchDataReducer } from "./fetchDataReducer";
import { cartReducer } from "./cartReducer";

export let rootReducer = combineReducers({
    fetchDataReducer : fetchDataReducer,
    cartReducer : cartReducer
})