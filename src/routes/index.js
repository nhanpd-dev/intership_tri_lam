import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { getLocalStorage, STORAGE } from '../utils';
import { makeSelectAuthenticated } from '../store/auth/selector';

import PublicRouter from './PublicNavigator';
import PrivateRouter from './PrivateNavigator';
import ResolveNavigator from './ResolveNavigator';

function AppRoutes() {
  const [hasUser, setHasUser] = useState(useSelector(makeSelectAuthenticated()));

  const renderUI = useMemo(() => {
    const isLogin = !!getLocalStorage(STORAGE.USER_TOKEN);

    if (hasUser) {
      return <PrivateRouter />;
    } else if (isLogin) {
      return <ResolveNavigator setHasUser={setHasUser} />;
    }
    return <PublicRouter />;
  }, [hasUser]);

  return <>{renderUI}</>;
}

export default AppRoutes;
