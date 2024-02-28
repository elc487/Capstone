import './productList.css'
import { useGetAllProductsQuery } from "../../../api/products";
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
    const navigate = useNavigate()
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
    
    return (
        <div className="productslistmain">
            {data.map((product) => 
                
                <div key={product.id} className="product" onClick={() =>navigate(`/products/${product.id}`)}>
                    <div className='imgcontainer'>
                        <img src={product.image}/>
                    </div>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>

                    </div>
                
            )}
            </div>
    );
}