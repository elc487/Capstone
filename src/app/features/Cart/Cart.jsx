import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import CheckOut from "./CheckOut";

const Cart =() =>{
    const products = useSelector(state=>state.cart.products)
    const total = products.reduce((count,product)=> {
       return count = count + (product.quantity*product.price)},
        
       0 ).toFixed(2)
        console.log(total)
    
    
   
    return(
        <div className="cart">
        
            {(products?.length > 0) ? (
                <>
                <h1>Items in Cart</h1>
                {products.map((product) => 
                <CartCard key={product.id} product={product}/>
                )}
                <p>Total:${total}</p>
                <button onClick={()=><CheckOut/>}>Checkout</button>
                </>
                


            ):(
                <> add items to cart!</>
            )
            }
        
                       
        </div>
    )
}
export default Cart