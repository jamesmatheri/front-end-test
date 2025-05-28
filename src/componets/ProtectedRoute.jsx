;
import { Navigate } from 'react-router-dom';
import { useAuth } from './use-auth';


const ProtectedRoute = ({ children }) => {
    const user = useAuth();

    if(!user.token) return  <Navigate to="/login" />; 
  return children
};

export default ProtectedRoute