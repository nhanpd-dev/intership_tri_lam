import { useAuthStore } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const RequiredAuth = ({ children }) => {
  const { auth } = useAuthStore();

  if (!auth) {
    return <Navigate to='/login' replace />;
  }
  return children;
};

export default RequiredAuth;
