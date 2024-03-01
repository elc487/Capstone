import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const Cart =() =>{
    const products = useSelector(state=>state.cart.products)
    const stotal = useSelector(state=>state.cart.total)
    const total = stotal.toFixed(2)
    
   
    return(
        <div className="cart">
        
            {(products?.length > 0) ? (
                <>
                <h1>Items in Cart</h1>
                {products.map((product) => 
                <CartCard key={product.id} product={product}/>
                )}
                <p>Total: {total}</p>
                <button>Checkout</button>
                </>
                


            ):(
                <> add items to cart!</>
            )
            }
        
                       
        </div>
    )
}
export default Cart