import { useLoginMutation } from "../../../api/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {useGetUsersQuery} from '../../../api/users'
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../components/Redux/userSlice";
const Login= ()=>{
    const dispatch = useDispatch()
    const navigate= useNavigate();
    
    const [login] = useLoginMutation();
    const{
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset
    } = useForm()
     const {data={},isLoading,isError}= useGetUsersQuery()


        async function onSubmit(creds){
            const res =  await login(creds)
              if (res.status = 200){ 
                  const singleUser = data.filter(user=> user.username === creds.username)
                if (singleUser.length > 0)
                  dispatch(loginSuccess(singleUser[0]))
                reset()
                  navigate('/auth/account') 
                
          
              }
          }
                  return (
                      <div className="auth">
                          <form >
                              <label>
                                  Username:{" "}
                                  <input 
                                      {...register('username',{
                                          required: "Valid Email address is required"
                                      })}
                                      />
                              </label>
                              <label>
                                  Password:{" "}
                                  <input 
                                      {...register('password',{
                                          required: "Incorrect Password"
                                      })}
                                      
                                      />
                              </label>
                              <button
                              disabled={isSubmitting} onClick={handleSubmit(onSubmit)} type="submit">Log In</button>
                          
                               <Link className='swap' to='/register'>No Account? Register</Link>
                          </form>
                      </div>   
              )
          
          }
          
          export default Login