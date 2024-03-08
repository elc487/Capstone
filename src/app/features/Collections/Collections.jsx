import React from 'react'
import { useGetProductCategoriesQuery } from '../../../api/products'
import Collection from './Collection'

const Collections = () => {
    const {data={},isLoading, isError  }=useGetProductCategoriesQuery()
  return (

    data.map((category) => 

        <div key={category}>{category}</div>
        
    )
  )
}

export default Collections