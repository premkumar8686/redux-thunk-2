import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';

export default function ProductListing() {


    const dispatch = useDispatch();

    const fetchData = ()=> {
     
        dispatch(fetchProducts());

    }

    const products = useSelector((state)=> state.productReducer.products);


  return (
    <>
       <div>ProductListing</div>
       <button onClick={fetchData}>fetch Products</button>

       {products.map((ele)=>{
        return <h1>{ele.id}</h1>
       })}
    </>
  )
}
