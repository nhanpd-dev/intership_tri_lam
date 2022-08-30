import { useAuthStore } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const RequiredAdmin = ({ children }) => {
  const { currentUser } = useAuthStore();

  if (!currentUser.role) {
    return <Navigate to={-1} replace />;
  }

  return children;
};

export default RequiredAdmin;
