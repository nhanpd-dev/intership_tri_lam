/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Spin } from 'antd';

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

  return <Spin size='large' spinning={isLoading} tip='Loading...' />;
}

export default ResolveNavigator;
