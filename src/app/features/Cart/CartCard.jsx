import { useGetProductQuery } from "../../../api/products";
import './Cart.css'
import { addOne,deleteOne,deleteProduct } from "../../components/Redux/CartSlice";
import {useDispatch } from "react-redux";

export default function CartCard({product}) { 
    const dispatch = useDispatch()
    const quantity= product.quantity
    const {data={}, isLoading,isError} = useGetProductQuery(product.id)
   
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
        
                <div key={data.id} className="cartcard">
                    <div className='cartimgcontainer'>
                        <img src={data.image}/>
                    </div>
                    <div className="cartdetails">
                    <h3>{data.title}</h3>
                    <span>
                        <button onClick={()=>dispatch(deleteOne({
                             id: data.id,
                             price: data.price,
                             quantity
                        }))}>-</button><p>{quantity}</p><button onClick={()=>dispatch(addOne({
                            id: data.id,
                            price: data.price,
                            quantity
                        }))}>+</button>
                    </span>
                    <p>${data.price}</p>
                    
                    </div>
                    <button className="deletebtn" onClick={()=>dispatch(deleteProduct(data.id))}>Remove from Cart</button>
                </div>
                
    );
}