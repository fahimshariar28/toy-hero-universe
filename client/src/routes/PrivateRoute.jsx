import  { useContext } from 'react';

import { Navigate,  useLocation } from 'react-router-dom';
import LoadingSpinner from '../loader/LoadingSpinner';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {

    const{user,loader} =useContext(AuthContext)
    const location = useLocation()
    
    if(loader){
        return <LoadingSpinner></LoadingSpinner>
    }
   if(user){
        return children ;
    }
    return <Navigate to='/login' state={location} replace  ></Navigate>
    
};

export default PrivateRoute;