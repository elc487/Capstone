import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate = useNavigate()
  return (
    <div key={product.id} className="product" onClick={() =>navigate(`/products/${product.id}`)}>
    <div className='imgcontainer'>
        <img src={product.image}/>
    </div>
    <h3>{product.title}</h3>
    <p>{product.category}</p>
    <p>${product.price}</p>

    </div>
  )
}

export default ProductCard