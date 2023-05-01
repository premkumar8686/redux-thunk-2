import { applyMiddleware, createStore } from "redux";
import { mainReducer } from "./reducers/productReducer";
import thunk from "redux-thunk";


const myStore = createStore(
    mainReducer,
    applyMiddleware( thunk )
);

export default myStore;