import LoginScreen from '../../modules/auth/login/login.screen';
import RegisterScreen from '../../modules/auth/register/register.screen';
import DashboardScreen from '../../layouts/dashboard.layout';
import NotFoundScreen from '../../modules/notFound/notFound.screen';
import LoginAdminScreen from '../../modules/auth/admin/login/login.admin.screen';
import ProductsModule from '../../modules/products/Product.module';
import AdminModule from '../../modules/admin/AdminModule';
import Demo from '../../modules/admin/sildebar/Demo';

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
    path: '/admin',
    element: <AdminModule />,
    children: [
      {
        path: 'user-management',
        element: <Demo />,
      },
      {
        path: 'product-management',
        element: <Demo />,
      },
      {
        path: '*',
        element: <NotFoundScreen />,
      },
    ],
  },
];

export default publicRoute;
