import DashboardScreen from '../../layouts/dashboard.layout';
import Cart from '../../modules/cart/Cart.module';
import Profile from '../../modules/profile/Profile.module';

const privateRoute = [
  {
    element: <DashboardScreen />,
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
];

export default privateRoute;
