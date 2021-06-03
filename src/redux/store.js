import { createStore, combineReducers } from "redux";
import productReducer from "./reducers/productReducer";


const combineReducer = combineReducers({
    products : productReducer,
})

export const store = createStore(combineReducer)