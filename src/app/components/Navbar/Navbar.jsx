import { NavLink } from "react-router-dom"
import './Navbar.css'
const Navbar = () => {

    return(
        <div className="navbar">
            <div className="logo">Logo</div>
            <ul className="navmenu">
           <li><NavLink to='/products'>Shop</NavLink></li>
           <li><NavLink>Account</NavLink></li>
           <li><NavLink>Collections</NavLink></li>
           <li><NavLink>Cart
           <span>0</span></NavLink></li>
                
                </ul>

        </div>
    )
}

export default Navbar