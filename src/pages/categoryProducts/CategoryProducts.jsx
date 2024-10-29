import React, { useEffect, useState } from 'react'
import './CategoryProducts.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import FeaturedProductCard from '../../components/common/card/featuredProductCard/FeaturedProductCard'
import './CategoryProducts.css'

const CategoryProducts = () => {
    const categoryParam = useParams("category")
    const [featureProduct, setfeatureProduct] = useState([])
    const [categoryData, setcategoryData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    let temArry = []

    const getFeatureData = async () => {
        setIsLoading(true)
        try {
            const products = await axios.get('https://fakestoreapi.in/api/products')
            const res = products.data.products
            setfeatureProduct(res)

            const result = res.find((item) => {

               if( item.category == categoryParam.category){
               
                temArry.push(item)
               }

               setIsLoading(false)
            })

            // console.log(result);
            setcategoryData(temArry);
            

        } catch (error) {
            console.log(error);
            setIsLoading(false)


        }
        console.log(categoryParam);


    }


  console.log(categoryData,"categoryData");
  


    useEffect(() => {
        getFeatureData()
    }, [])
    return (
        <div className='main'>
            
            <h1>Categorized Products</h1>
            <div className="all-products">

            {
                categoryData?.map((item, index)=>{

                   return <FeaturedProductCard data={item} key={index}/>
                })
            }
            </div>
            
        </div>
    )
}

export default CategoryProducts