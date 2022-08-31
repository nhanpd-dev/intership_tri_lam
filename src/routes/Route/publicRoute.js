import LoginScreen from '../../modules/auth/login/login.screen';
import RegisterScreen from '../../modules/auth/register/register.screen';
import DashboardScreen from '../../layouts/dashboard.layout';
import NotFoundScreen from '../../modules/notFound/notFound.screen';
import LoginAdminScreen from '../../modules/auth/admin/login/login.admin.screen';
import ProductsModule from '../../modules/products/Product.module';

const publicRoute = [
  {
    element: <DashboardScreen />,
    children: [
      {
        path: '/',
        element: <ProductsModule />,
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
