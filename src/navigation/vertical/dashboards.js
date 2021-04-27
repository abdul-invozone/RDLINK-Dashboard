import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'main',
    title: 'Main',
    // icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: <Circle size={12} />,
        navLink: '/dashboard/analytics'
      }
      // {
      //   id: 'eCommerceDash',
      //   title: 'eCommerce',
      //   icon: <Circle size={12} />,
      //   navLink: '/dashboard/ecommerce'
      // }
    ]
  }
]
