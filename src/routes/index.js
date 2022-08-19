import { useMemo } from 'react';
import { useAuthStore } from '../hooks/useAuth';
import { getLocalStorage, STORAGE } from '../utils';

import PublicRouter from './PublicNavigator';
import PrivateRouter from './PrivateNavigator';
import ResolveNavigator from './ResolveNavigator';

function AppRoutes() {
  const { auth } = useAuthStore();

  const renderUI = useMemo(() => {
    const isLogin = !!getLocalStorage(STORAGE.USER_TOKEN);

    if (auth) {
      return <PrivateRouter />;
    }

    if (isLogin) {
      return <ResolveNavigator />;
    }

    return <PublicRouter />;
  }, [auth]);

  return <>{renderUI}</>;
}

export default AppRoutes;
