import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home size={20} />,
    badge: 'danger',
    badgeText: '3',
    children: [
      {
        id: 'adminDash',
        title: 'Admin',
        icon: <Circle size={12} />,
        navLink: '/dashboard/admin'
      },
      {
        id: 'brandsDash',
        title: 'Brands',
        icon: <Circle size={12} />,
        navLink: '/dashboard/brands'
      },
      {
        id: 'rdDash',
        title: 'Rd',
        icon: <Circle size={12} />,
        navLink: '/dashboard/rd'
      }
    ]
  }
]
