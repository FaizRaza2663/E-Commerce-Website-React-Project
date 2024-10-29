import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AllProductCard from '../../components/common/card/allProductsCard/AllProductCard';
import './AllProducts.css'

const AllProducts = () => {
  const [featureProduct, setFeatureProduct] = useState([]);

  const getFeatureData = async () => {
    try {
      const products = await axios.get('https://fakestoreapi.in/api/products');
      const res = products.data.products;
      setFeatureProduct(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeatureData();
  }, []);
  // console.log(featureProduct);
  
  return (
    <div className='main'>
      <h1>All Products</h1>
    <div className='all-products'>
      {featureProduct.map((item,index) => {
        return (
        <div key={index}>
          <AllProductCard data={item}/>

        </div>
          )

      })}
    </div>
    </div>
  )
}

export default AllProducts