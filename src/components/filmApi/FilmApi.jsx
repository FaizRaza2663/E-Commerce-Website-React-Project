import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FilmApi = () => {
    const [product, setProduct] = useState([])
    const getData = async () => {
        try {
            const data = await axios.get('https://fakestoreapi.com/products')
            const apiData = data?.data
            console.log(apiData);
            setProduct(apiData)

        } catch (error) {
            console.log(error);

        }

    }
    useEffect(() => {
        getData()
    }, [])

    return (
        product.map((item, index) => {
            const { category, image } = item
            return (
                <div key={index} >
                    <p>{category}</p>
                    <img src={image} />
                </div>
            )
        })
    )
}

export default FilmApi