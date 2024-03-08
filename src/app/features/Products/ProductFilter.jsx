import React from 'react'
import { useGetProductCategoriesQuery } from '../../../api/products'

const ProductFilter = ({cat,setCat,setSorted,maxPrice,setMaxPrice}) => {
    const {data={}, isLoading, isError} = useGetProductCategoriesQuery()

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
  

      
      async function clearFilters(){
        setCat([])
        setMaxPrice(1000)
        setSorted('')
      }
    async function handleChange(e){
    const isChecked =e.target.checked
    const value =e.target.value
    if(isChecked===true){
        setCat(
            [...cat, value] )
        }
    if(isChecked===false){
            setCat(
                cat.filter((item) => item !== value))
        }
    }  

  return (
    <div className='options'>
        <div className='filter'>
            <input 
            type="radio"
            id='asc'
            value="asc"
            name='price' 
            onChange={()=>setSorted({name:"price",value:"asc"})}
            />
            <label htmlFor="desc">Price Lowest First</label>
            <input 
            type="radio"
            id='desc'
            value="desc"
            name='price' 
            onChange={()=>setSorted({name:"price",value:"desc"})}
            />
            <label htmlFor="desc">Price Highest First</label>
            
        </div>
       
        <div className='filter'>
            <>
            <input 
            type ="checkbox"
            value='All'
            onChange={()=>setCat([])}
            />
            <label>All</label>
            </>
            {data?.map((category) =>
            <>
            <input 
            key={category}
            type ="checkbox"
            value={category}
            onChange={handleChange}
            />
            <label>{category}</label>
            </>
        
            )}
        </div>
        <div className='filter'>
            <span>0</span>
            <input type="range" 
            min={0}
            max={1000}
            onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
        </div>
        <div> <button onClick={()=>clearFilters()}>Clear all Filters</button></div>
    </div>
  )
}

export default ProductFilter