import DashboardScreen from '../modules/dashboard/dashboard.screen';
import NotFoundScreen from '../modules/notFound/notFound.screen';
import Profile from '../modules/profile/Profile';
import RequiredAuth from './RequiredAuth';

const privateRoute = [
  {
    path: '/',
    element: <DashboardScreen />,
    children: [
      {
        path: '/profile',
        element: (
          <RequiredAuth>
            <Profile />
          </RequiredAuth>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundScreen />,
  },
];
export default privateRoute;
