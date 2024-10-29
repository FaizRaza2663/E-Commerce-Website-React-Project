import React from 'react'

const AllProductCard = ({data}) => {
    // console.log(data);
    const {image, title, price,description} =  data
    
  return (
    <div>
         <div className='card'>
            <img src={image} alt="" />
            <p className='price'>Price: ${price}</p>
            <h3>{title.slice(0,20)}...</h3>
            <p>{description.slice(0,50)}...</p>
        </div>
            
    </div>
  )
}

export default AllProductCard