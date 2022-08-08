import { useRoutes } from 'react-router-dom';

import DashboardScreen from '../modules/dashboard/dashboard.screen';
import NotFoundScreen from '../modules/notFound/notFound.screen';
import Profile from '../modules/profile/Profile';

const PrivateRouter = () => {
  const privateRoute = [
    {
      path: '/',
      element: <DashboardScreen />,
      children: [
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '*',
          element: <NotFoundScreen />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundScreen />,
    },
  ];
  const privateRoutes = useRoutes(privateRoute);
  return <>{privateRoutes}</>;
};
export default PrivateRouter;
