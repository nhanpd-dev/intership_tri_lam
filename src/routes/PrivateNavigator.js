import { useRoutes } from 'react-router-dom';
import { privateRoute } from './Route';

const PrivateRouter = () => {
  const privateRoutes = useRoutes(privateRoute);
  return <>{privateRoutes}</>;
};
export default PrivateRouter;
