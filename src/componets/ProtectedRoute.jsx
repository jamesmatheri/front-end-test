import { useAuth } from './use-auth';


const ProtectedRoute = ({ children }) => {
    const user = useAuth();


    if(!user.token){
       return   window.location.href = "/register"
      }else{
        return children
      }



};

export default ProtectedRoute