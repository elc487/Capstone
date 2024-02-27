import { useGetProductQuery } from "../../api/products";
import { useParams, useNavigate } from "react-router-dom";


const Product = ()=>{
    const {productId} = useParams()
    const navigate =useNavigate();
    const {data={}, isLoading, isError} =useGetProductQuery(productId)
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
      console.log(data)
      return (
        <div>
            <div className='imgcontainer'>
                        <img src={data.image}/>
                    </div>
           
            <div className="content">
                <div className="left">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                </div>
                <div className="right">
                <p>{data.price}</p>
                <p>{data.rating.rate}</p>
                <p>{data.rating.count} Reviews</p>
                <button>Add to Cart</button>
                </div>
            </div>
        </div>
      )
}
export default Product