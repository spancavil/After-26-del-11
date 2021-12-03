import { combineReducers } from "redux";
import productReducer from "./productReducer";

import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
})

export default rootReducer;