import { combineReducers } from "redux";

const initialState = {
    products: [],
    cart: [],
    payment: [],
};

const productReducer = (state = initialState, action)=> {

    switch(action.type)
    {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        default:
            return state;
    }

}

export const mainReducer = combineReducers({
    productReducer,
});