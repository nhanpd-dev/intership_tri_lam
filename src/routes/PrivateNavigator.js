import DashboardScreen from '../modules/dashboard/dashboard.screen';
import NotFoundScreen from '../modules/notFound/notFound.screen';
import Profile from '../modules/profile/Profile';
import RequiredAuth from './RequiredAuth';

const privateRoute = [
  {
    path: '/',
    element: (
      <RequiredAuth>
        <DashboardScreen />
      </RequiredAuth>
    ),
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
