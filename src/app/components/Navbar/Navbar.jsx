import { NavLink } from "react-router-dom"
import './Navbar.css'
import { useSelector } from "react-redux";
import { useState } from "react";
import Cart from "../../features/Cart/Cart";

const Navbar = () => {
    const [open,setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products)
    const {currentUser} = useSelector(state =>state.user)
    return(
        <div className="navbar">
            <div className="logo">Beary & Rye</div>
                <ul className="navmenu">
                    <li><NavLink to='/products'>Shop</NavLink></li> 
                    <li><NavLink>Collections</NavLink></li>
                     <li>{currentUser ?(<NavLink to= '/auth/account'>{currentUser.name.firstname}</NavLink>):(<NavLink to= '/login'>Login</NavLink>)}  </li>
                    <li id='cart' onClick={()=>setOpen(!open)}>Cart

                    <span>{products.length}</span></li>
                </ul>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar