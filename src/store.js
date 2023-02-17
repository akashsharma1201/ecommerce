import { createStore, applyMiddleware,  } from "redux";
import {rootReducer} from "./redux/reducers/rootReducer"
import thunk  from "redux-thunk";


// export let store = createStore(rootReducer, compose(applyMiddleware(thunk) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export let store = createStore(rootReducer,applyMiddleware(thunk))