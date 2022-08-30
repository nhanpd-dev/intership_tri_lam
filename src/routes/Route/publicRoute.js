import LoginScreen from '../../modules/auth/login/login.screen';
import RegisterScreen from '../../modules/auth/register/register.screen';
import DashboardScreen from '../../layouts/dashboard.layout';
import HomeScreen from '../../modules/home/Home.screen';
import NotFoundScreen from '../../modules/notFound/notFound.screen';
import LoginAdminScreen from '../../modules/auth/admin/login/login.admin.screen';

const publicRoute = [
  {
    element: <DashboardScreen />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
      },
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
  {
    path: '/admin/login',
    element: <LoginAdminScreen />,
  },
];

export default publicRoute;
