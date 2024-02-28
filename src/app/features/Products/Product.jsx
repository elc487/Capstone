import { useGetProductQuery } from "../../../api/products";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProduct } from "../../components/Redux/CartSlice";


const Product = ()=>{
    const {productId} = useParams()
    const dispatch = useDispatch();
    const[quantity,setQuantity] = useState(1);
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

      async function handleClick(data){
        dispatch(addProduct({
          id: data.id,
          price: data.price,
          quantity
        }))
      }
  
      return (
        <div className="singleproduct">
            <div className='productimgcontainer'>
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
                <button onClick={() => setQuantity(quantity === 1?1:quantity-1)}>-</button>
                {quantity}
                <button onClick={() => setQuantity(quantity+1)}>+</button>
                <button onClick={()=> handleClick(data)} >Add to Cart</button>
                </div>
            </div>
        </div>
      )
}
export default Product