import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/admin',
    component: lazy(() => import('../../views/dashboard/admin'))
  },
  // {
  //   path: '/dashboard/ecommerce',
  //   component: lazy(() => import('../../views/dashboard/ecommerce')),
  //   exact: true
  // },
  {
    path: '/dashboard/brands',
    component: lazy(() => import('../../views/dashboard/brands')),
    exact: true,
    layout: 'VerticalLayoutBrands'
  },
  {
    path: '/dashboard/rd',
    component: lazy(() => import('../../views/dashboard/rd')),
    exact: true,
    layout: 'VerticalLayoutRd'
  }
]

export default DashboardRoutes
