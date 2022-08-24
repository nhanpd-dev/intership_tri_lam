/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { LoadingScreen } from '../layouts/common/loading/loading';
import { useAuthStore } from '../hooks/useAuth';
import { getLocalStorage, STORAGE } from '../utils';

function ResolveNavigator() {
  const { getCurrentUser, isLoading } = useAuthStore();

  const location = useLocation();

  useEffect(() => {
    const token = !!getLocalStorage(STORAGE.USER_TOKEN);

    if (token) {
      getCurrentUser();
    }
  }, [location]);

  if (isLoading) {
    return <LoadingScreen />;
  }
}

export default ResolveNavigator;
