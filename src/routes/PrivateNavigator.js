import { useRoutes } from 'react-router-dom';
import { privateRoute, publicRoute } from './Route';

const PrivateRouter = () => {
  const privateRoutes = useRoutes([
    ...privateRoute,
    ...publicRoute.filter(
      (item) => item.path !== '/login' && item.path !== '/register' && item.path !== '/admin/login',
    ),
  ]);

  return privateRoutes;
};
export default PrivateRouter;
