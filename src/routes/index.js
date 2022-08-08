/* eslint-disable react-hooks/exhaustive-deps */
import { useRoutes } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuth';
import publicRoute from './PublicNavigator';
import privateRoute from './PrivateNavigator';
import { getLocalStorage, STORAGE } from '../utils';
import { useEffect } from 'react';

function AppRoutes() {
  const { auth, getCurrentUser } = useAuthStore();
  const privateRoutes = useRoutes(privateRoute);
  const publicRoutes = useRoutes(publicRoute);
  const token = getLocalStorage(STORAGE.USER_TOKEN);
  useEffect(() => {
    if (token) {
      getCurrentUser();
    }
  }, []);

  if (auth) return privateRoutes;
  else if (!token) {
    return publicRoutes;
  }
  return <>Loading...</>;
}

export default AppRoutes;
