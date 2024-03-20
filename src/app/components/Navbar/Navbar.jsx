import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'
import { useSelector } from "react-redux";
import { useState } from "react";
import Cart from "../../features/Cart/Cart";
import { Logout } from "../../features/Auth/Logout";

const Navbar = () => {
    const navigate = useNavigate()
    const [open,setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products)
    const cartNumber = products.reduce((count, product)=> {
        return count = count + product.quantity
    },0)
    const {currentUser} = useSelector(state =>state.user)
    return(
        <div className="navbar">
            <div className="logo" onClick={()=>navigate('/')}>Bearie & Rye</div>
                <ul className="navmenu">
                    <li><Link to='/products'>Shop</Link></li> 
                    <li><Link to='/collections'>Collections</Link></li>
                    { currentUser ?(
                        <>
                     <li>
                        <Link to= '/auth/account'>{currentUser.name.firstname}</Link>
                        </li>
                        <li><Logout/></li>
                        </>):
                     (<li><Link to= '/login'>Login</Link></li>)}
                    <li id='cart' onClick={()=>setOpen(!open)}>Cart

                    <span>{cartNumber}</span></li>
                </ul>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar