import DashboardScreen from '../../layouts/dashboard.layout';
import Profile from '../../modules/profile/Profile.module';

const privateRoute = [
  {
    element: <DashboardScreen />,
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
];

export default privateRoute;
