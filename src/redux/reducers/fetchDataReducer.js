import { FETCH_ALL_DATA, FETCH_SINGLE_PRODUCT } from "../constants/fetchDataConstant"

let initialState = {
    products: [],
    productDetail : []
}

export const fetchDataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_DATA:
            return {
                ...state, products: payload
            }

        case FETCH_SINGLE_PRODUCT:
            return {
                ...state ,
                productDetail : [payload]
            }

        default:
            return state
    }
}





































// export const fetchDataReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case FETCH_ALL_DATA:
//             return {
//                 ...state,
//                 products: [...state.products, payload]
//             }
//         case FETCH_SINGLE_PRODUCT:
//             return {
//                 ...state,
//                 productDetail: [payload]
//             }
//         default:
//             return state
//     }
// }
