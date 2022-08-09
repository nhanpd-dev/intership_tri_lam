import { useRoutes } from 'react-router-dom';
import { publicRoute } from './Route';

const PublicRouter = () => {
  const publicRoutes = useRoutes(publicRoute);
  return <>{publicRoutes}</>;
};
export default PublicRouter;
