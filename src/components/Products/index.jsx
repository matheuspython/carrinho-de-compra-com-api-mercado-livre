import React,{ useState, useEffect } from 'react';
import './index.css';
import { fetchProducts } from '../../api/fetchProducts';
import ProductCad from '../ProductCad';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetchProducts('iphone').then( response =>{
      setProducts(response);
    });

  },[]);


  return (
    <section className="products container">
      {products.map(product=>(
        <ProductCad key={product.id} data={ product } />
      ))}
    </section>
  );
}
export default Products;
