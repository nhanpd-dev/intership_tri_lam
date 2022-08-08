import LoginScreen from '../modules/auth/login/login.screen';
import RegisterScreen from '../modules/auth/register/register.screen';
import DashboardScreen from '../modules/dashboard/dashboard.screen';
import NotFoundScreen from '../modules/notFound/notFound.screen';

const publicRoute = [
  {
    path: '/',
    element: <DashboardScreen />,
    children: [
      {
        path: '*',
        element: <NotFoundScreen />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginScreen />,
  },
  {
    path: '/register',
    element: <RegisterScreen />,
  },
];
export default publicRoute;
