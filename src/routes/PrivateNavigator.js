import { useRoutes } from 'react-router-dom';
import { privateRoute, publicRoute } from './Route';

const PrivateRouter = () => {
  const privateRoutes = useRoutes([...privateRoute, ...publicRoute]);
  return <>{privateRoutes}</>;
};
export default PrivateRouter;
