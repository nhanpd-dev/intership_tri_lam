import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getLocalStorage, STORAGE } from '../utils';
import { makeSelectAuthenticated } from '../store/auth/selector';

import PublicRouter from './PublicNavigator';
import PrivateRouter from './PrivateNavigator';
import ResolveNavigator from './ResolveNavigator';

function AppRoutes() {
  const authenticated = useSelector(makeSelectAuthenticated());

  const renderUI = useMemo(() => {
    const isLogin = !!getLocalStorage(STORAGE.USER_TOKEN);

    if (authenticated) {
      return <PrivateRouter />;
    }

    if (isLogin) {
      return <ResolveNavigator />;
    }

    return <PublicRouter />;
  }, [authenticated]);

  return <>{renderUI}</>;
}

export default AppRoutes;
