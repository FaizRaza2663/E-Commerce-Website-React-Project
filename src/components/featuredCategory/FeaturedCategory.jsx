import { useEffect, useState } from 'react'
import './FeaturedCategory.css'
import axios from 'axios'
import CategoryCard from '../common/card/categoryCard/CategoryCard'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faGamepad, faMobile, faTv } from '@fortawesome/free-solid-svg-icons'

const FeaturedCategory = () => {

  const [featureProduct, setfeatureProduct] = useState([])
  const [category, setcategory] = useState([])
  const navigate = useNavigate()

  // Icon mapping with the provided icons
  const categoryIcons = {
    "audio": faMusic,
    "gaming": faGamepad,
    "mobile": faMobile,
    "tv": faTv,
  }

  // API get method to fetch feature data
  const getFeatureData = async () => {
    try {
      const products = await axios.get('https://fakestoreapi.in/api/products')
      const res = products.data.products
      setfeatureProduct(res)
      const categoreis = [...new Set(res.map((item) => item.category))]
      setcategory(categoreis)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFeatureData()
  }, [])

  return (
    <div>
      <h1>Featured Categories</h1>
      <div className="F-pro-card">
        {category.map((item, index) => {
          return (
            <div key={index} className='Category-card' onClick={() => navigate(`/category/${item}`)}>
              <CategoryCard 
                data={item}  // Category name
                icon={categoryIcons[item]}  // Icon pass kar rahe hain
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedCategory
