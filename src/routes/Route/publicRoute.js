import LoginScreen from '../../modules/auth/login/login.screen';
import RegisterScreen from '../../modules/auth/register/register.screen';
import DashboardScreen from '../../layouts/dashboard.layout';
import HomeModule from '../../modules/home/Home.module';
import NotFoundScreen from '../../modules/notFound/notFound.screen';

const publicRoute = [
  {
    element: <DashboardScreen />,
    children: [
      {
        path: '/',
        element: <HomeModule />,
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
];

export default publicRoute;
