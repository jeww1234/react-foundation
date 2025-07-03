import React from 'react'
import { useSearchParams } from 'react-router-dom'


const Product = () => {
  let [query, setQuery] = useSearchParams()
  console.log("ddd",query.get('page'))
  return (
    <div>
      <h1>Show all Products</h1>
    </div>
  )
}

export default Product
