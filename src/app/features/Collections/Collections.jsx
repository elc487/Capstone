import React from 'react'
import { useGetProductCategoriesQuery } from '../../../api/products'
import Collection from './Collection'

const Collections = () => {
    const {data={},isLoading, isError  }=useGetProductCategoriesQuery()
    if (isLoading) {
      return <div>
       Loading.....
       </div>
     }       
     
  if (isError) { 
      return <div>
      Something broke...
      </div>
    }

  return (

    data.map((category) => 

        <div key={category}>{category}</div>
        
    )
  )
}

export default Collections