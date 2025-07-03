import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Product_detail = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <div>
      <h1>detail</h1>
      <Link to="/">Go to home page {id}</Link>
    </div>
  )
}

export default Product_detail
