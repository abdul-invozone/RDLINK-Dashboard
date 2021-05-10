import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/analytics',
    component: lazy(() => import('../../views/dashboard/analytics'))
  },
  {
    path: '/dashboard/ecommerce',
    component: lazy(() => import('../../views/dashboard/ecommerce')),
    exact: true
  },
  {
    path: '/dashboard/brands',
    component: lazy(() => import('../../views/dashboard/brands')),
    exact: true
  },
  {
    path: '/dashboard/rd',
    component: lazy(() => import('../../views/dashboard/rd')),
    exact: true
  }
]

export default DashboardRoutes
