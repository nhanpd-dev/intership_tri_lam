import DashboardScreen from '../../layouts/dashboard.layout';
import Cart from '../../modules/cart/cart.screen';
import Profile from '../../modules/profile/Profile.screen';
import ChangePassword from '../../modules/auth/changePassword/changePassword.screeen';
import Info from '../../modules/profile/components/info/Info.component';
import ProductDetailsModule from '../../modules/productDetails/ProductDetails.module';
import ProductsModule from '../../modules/products/Product.module';

const privateRoute = [
  {
    element: <DashboardScreen />,
    children: [
      {
        path: '/account/profile',
        element: (
          <Profile>
            <Info />
          </Profile>
        ),
      },
      {
        path: '/account/change-password',
        element: (
          <Profile>
            <ChangePassword />
          </Profile>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/products',
        element: <ProductsModule />,
      },
      {
        path: '/product-detail/:id',
        element: <ProductDetailsModule />,
      },
    ],
  },
];

export default privateRoute;
