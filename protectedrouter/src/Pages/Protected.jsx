import { Navigate, useNavigate } from "react-router-dom";
import { useEffect} from 'react'
const Protected = ({ isLoggedIn, children }) => {
 if (!isLoggedIn) {
    const navigate = useNavigate()
    useEffect(() => {
      setTimeout(()=>{
        navigate("/")
      }, 2000)
    }, [])
    return (
      <h1 className='text-center my-5'>
        You Must Login First, Redirecting to Home Page
      </h1>
    )
 }
 return children;
};
export default Protected;