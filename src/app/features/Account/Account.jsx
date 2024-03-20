import { useGetUserQuery,useUpdateUserMutation} from "../../../api/users";
import { useSelector } from "react-redux";

const Account = ()=>{
  
    const {currentUser} = useSelector(state =>state.user)
    const{data={},isLoading,isError} = useGetUserQuery(currentUser.id)
    
    return(
        <div>
            <h2>Welcome {currentUser.name.firstname}</h2>
            

            
        </div>
    )

}
export default Account