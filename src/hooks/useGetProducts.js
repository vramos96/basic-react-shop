import { useState, useEffect } from "react"
import axios from "axios"

const useGetProducts = (API) => {
    const [products, setProducts] = useState([])

	useEffect(async() => {
        try{
            const response = await axios.get(API)
            setProducts(response.data)
        }catch(error){
            console.log(error.response)
            setProducts([])
        }
	}, [])
    return products
}

export default useGetProducts