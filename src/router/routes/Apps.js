import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import VerticalLayoutBrands from '../../@core/layouts/VerticalLayoutBrands'

const AppRoutes = [
  {
    path: '/apps/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email'))
  },
  {
    path: '/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/admin/apps/chat/chatAdmin',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chatAdmin'))
  },
  {
    path: '/brands/apps/chat/chatBrands',
    layout: 'VerticalLayoutBrands',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chatBrands'))
  },
  {
    path: '/rd/apps/chat/chatRd',
    layout: 'VerticalLayoutRd',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chatRd'))
  },
  {
    path: '/apps/todo',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todoAdmin',
    exact: true,
    appLayout: true,
    layout: 'VerticalLayout',
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todoAdmin'))
  },
  {
    path: '/apps/todoAdmin/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todoAdmin')),
    meta: {
      navLink: '/apps/todoAdmin'
    }
  },
  {
    path: '/apps/todoAdmin/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todoAdmin')),
    meta: {
      navLink: '/apps/todoAdmin'
    }
  },
  {
    path: '/apps/todoBrands',
    exact: true,
    appLayout: true,
    layout: 'VerticalLayoutBrands',
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todoBrands'))
  },
  {
    path: '/apps/todoBrands/:filter',
    appLayout: true,
    exact: true,
    layout: 'VerticalLayoutBrands',
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todoBrands')),
    meta: {
      navLink: '/apps/todoBrands'
    }
  },
  {
    path: '/apps/todoBrands/tag/:tag',
    appLayout: true,
    layout: 'VerticalLayoutBrands',
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todoBrands')),
    meta: {
      navLink: '/apps/todoBrands'
    }
  },
  {
    path: '/apps/todoRd',
    exact: true,
    appLayout: true,
    layout: 'VerticalLayoutRd',
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todoRd'))
  },
  {
    path: '/apps/todoRd/:filter',
    appLayout: true,
    exact: true,
    layout: 'VerticalLayoutRd',
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todoRd')),
    meta: {
      navLink: '/apps/todoRd'
    }
  },
  {
    path: '/apps/todoRd/tag/:tag',
    appLayout: true,
    layout: 'VerticalLayoutRd',
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todoRd')),
    meta: {
      navLink: '/apps/todoRd'
    }
  },
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/calendarBrands',
    layout: 'VerticalLayoutBrands',
    component: lazy(() => import('../../views/apps/calendarBrands'))
  },
  {
    path: '/apps/calendarRd',
    layout: 'VerticalLayoutRd',
    component: lazy(() => import('../../views/apps/calendarRd'))
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: '/apps/ecommerce/wishlist',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist'))
  },
  {
    path: '/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  },

  {
    path: '/dashboard/rd/brands',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/brandsRd/shop')),
    layout: 'VerticalLayoutRd'
  },
  {
    path: '/dashboard/rd/brands/favorites',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/brandsRd/wishlist')),
    layout: 'VerticalLayoutRd'
  },
  {
    path: '/dashboard/rd/brands/brand-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/brandsRd/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/dashboard/rd/brands/brand-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/brandsRd/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail'
    }
  },
  {
    path: '/dashboard/rd/brands/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/brandsRd/checkout'))
  },

  {
    path: '/apps/user/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/user/edit',
    exact: true,
    component: () => <Redirect to='/apps/user/edit/1' />
  },
  {
    path: '/apps/user/edit/:id',
    component: lazy(() => import('../../views/apps/user/edit')),
    meta: {
      navLink: '/apps/user/edit'
    }
  },
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  }
]

export default AppRoutes
