import React from 'react'
import './FeaturedProductCard.css'

const FeaturedProductCard = ({ data }) => {
    // console.log(data);
    const { image, price, title, description } = data

    return (
        <div className='card'>
            <img src={image} alt="" />
            <p className='price'>Price: ${price}</p>
            <h3>{title.slice(0,20)}...</h3>
            <p>{description.slice(0,50)}...</p>
        </div>
    )
}

export default FeaturedProductCard