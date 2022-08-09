import DashboardScreen from '../../layouts/dashboard.layout';
import NotFoundScreen from '../../modules/notFound/notFound.screen';
import Profile from '../../modules/profile/Profile';
const privateRoute = [
  {
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
];

export default privateRoute;
