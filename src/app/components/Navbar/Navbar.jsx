import { NavLink, useNavigate } from "react-router-dom"
import './Navbar.css'
import { useSelector } from "react-redux";
import { useState } from "react";
import Cart from "../../features/Cart/Cart";

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
                    <li><NavLink to='/products'>Shop</NavLink></li> 
                    <li><NavLink to='/collections'>Collections</NavLink></li>
                     <li>{
                     currentUser ?(<NavLink to= '/auth/account'>{currentUser.name.firstname}</NavLink>):
                     (<NavLink to= '/login'>Login</NavLink>)}  </li>
                    <li id='cart' onClick={()=>setOpen(!open)}>Cart

                    <span>{cartNumber}</span></li>
                </ul>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar