/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuthStore } from '../hooks/useAuth';
import { getLocalStorage, STORAGE } from '../utils';

function ResolveNavigator({ setHasUser }) {
  const { getCurrentUser } = useAuthStore();
  const location = useLocation();
  useEffect(() => {
    const token = !!getLocalStorage(STORAGE.USER_TOKEN);
    if (token) {
      getCurrentUser();
      setHasUser(true);
    }
  }, [location]);
  return <>Loading....</>;
}

export default ResolveNavigator;
