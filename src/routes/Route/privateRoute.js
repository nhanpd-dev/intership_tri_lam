import DashboardScreen from '../../modules/dashboard/dashboard.screen';
import NotFoundScreen from '../../modules/notFound/notFound.screen';
import Profile from '../../modules/profile/Profile';

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

export default privateRoute;
