import './productList.css'
import { useGetAllProductsQuery } from "../../../api/products";
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import { useState } from 'react';

export default function ProductList() {
    const [cat, setCat]= useState([])
    const [sorted, setSorted] = useState({})
    const [maxPrice, setMaxPrice]= useState(1000)
    
    const { data ={},isLoading, isError } = useGetAllProductsQuery()
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
    
    
      
      const categoryFilter = cat.length > 0 ? 
      cat.map((category) => {
       const temp = data.filter((product) => product.category === category)
       return temp}) :data.map(product => product)

    const filterSort = categoryFilter.flat().sort((a,b) => {
         if (sorted.value === "asc")
           return a.price - b.price
        if (sorted.value === "desc")
            return b.price - a.price
        
        // if (sort.name === "name")
    });
        
    const Products = filterSort.filter((product)=> product.price<maxPrice)
    
    return (

        <div className='productswrapper'>
                        
                <ProductFilter cat={cat} setCat={setCat} setSorted={setSorted} maxPrice={maxPrice}setMaxPrice={setMaxPrice}/>

        <div className="productslistmain">
           <div className='banner'>Product</div>
                {
                // cat.length > 0 ? 
                Products.map((product) =>

                    <ProductCard key={product.id} product={product}/>)              
            // : 
            //     data.map((product) => 

            //         <ProductCard key={product.id} product={product}/>
                
            // )
            
          }
            
            </div>
            </div>
    );
}