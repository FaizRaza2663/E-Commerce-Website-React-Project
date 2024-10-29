import React, { useEffect, useState } from 'react'
import './FeaturedProducts.css'
import axios from 'axios'
import CategoryCard from '../common/card/categoryCard/CategoryCard'
import FeaturedProductCard from '../common/card/featuredProductCard/FeaturedProductCard'
import Modal from '../common/modal/Modal'

const FeaturedProducts = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (featureProduct) => {
    setSelectedProduct(featureProduct);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };


  const [featureProduct, setfeatureProduct] = useState([])

  // api get
  const getFeatureData = async () => {
    try {
      const products = await axios.get('https://fakestoreapi.in/api/products')
      const res = products.data.products
      setfeatureProduct(res)


    } catch (error) {
      console.log(error);

    }

  }
  useEffect(() => {
    getFeatureData()
  }, [])
  console.log(featureProduct);
  const {title, description, price, image} = featureProduct

  return (
    <>
      <h1 className='heading'>Featured Products</h1>
      <div className='featured-card' onClick={() => handleProductClick(featureProduct)}>
        {featureProduct.slice(4, 8).map((item, index) => {
          // console.log(item);

          return (
            <div key={index}>
              <FeaturedProductCard data={item} />
            </div>
          )
        })}

        {isModalOpen && (
          <Modal onClose={closeModal}>
            <p>fq</p>
            {/* <h2>{title.slice(0,10)}</h2>
            <p>{description.slice(0,40)}</p>
            <p>Price: {price}</p> */}
          </Modal>
        )}
      </div>
    </>
  )
}

export default FeaturedProducts