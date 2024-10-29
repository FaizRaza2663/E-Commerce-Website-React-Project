import React from 'react'
import './CategoryCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CategoryCard = ({ data, icon }) => {

  return (
    <div className='category-card'>
      {/* Agar icon prop hai toh render karna */}
      {icon && <FontAwesomeIcon icon={icon} className="category-icon" />} 

      {/* Category ka naam */}
      <p>{data}</p>
    </div>
  )
}

export default CategoryCard
