import { useGetUserQuery,useUpdateUserMutation} from "../../../api/users";
import { useSelector } from "react-redux";

const Account = ()=>{
  
    const {currentUser} = useSelector(state =>state.user)
    // const{data={},isLoading,isError} = useGetUserQuery(currentUser[0].id)
    
    return(
        <div>
            <h2>Welcome {currentUser.name.firstname}</h2>
            <h1>CREATE A PERSISTENT USER LOGIN</h1>

            
        </div>
    )

}
export default Account