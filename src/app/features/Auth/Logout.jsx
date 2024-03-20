import { logout } from "../../components/Redux/userSlice"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout =()=>{
        dispatch(logout())
        navigate('/login')
    }

    return(

        <button onClick={handleLogout}>Logout</button>
    )
}