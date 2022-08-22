/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuthStore } from '../hooks/useAuth';
import { useOrderStore } from '../hooks/useOrder';
import { getLocalStorage, STORAGE } from '../utils';

function ResolveNavigator() {
  const { getCurrentUser } = useAuthStore();
  const { getOrders } = useOrderStore();

  const location = useLocation();

  useEffect(() => {
    const token = !!getLocalStorage(STORAGE.USER_TOKEN);

    if (token) {
      getCurrentUser();
      getOrders();
    }
  }, [location]);

  return <>Loading....</>;
}

export default ResolveNavigator;
