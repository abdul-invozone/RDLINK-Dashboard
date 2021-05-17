import { Home, Activity, ShoppingCart } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Admin',
        icon: <Activity />,
        navLink: '/dashboard/admin'
      },
      {
        id: 'eCommerceDash',
        title: 'eCommerce',
        icon: <ShoppingCart />,
        navLink: '/dashboard/ecommerce'
      }
    ]
  }
]
