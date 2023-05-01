import fakeStoreAPI from "../../apis/fakeStoreAPI";

export const fetchProducts = () => {
    return async function(dispatch)
    {
      const response = await fakeStoreAPI.get("/products");
      dispatch(setProducts(response.data));
    }
}

export const  setProducts = (products) =>
{
   return {
    type: "SET_PRODUCTS",
    payload: products,
   }
}