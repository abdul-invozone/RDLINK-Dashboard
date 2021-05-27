import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    header: 'Main'
  },
  {
    id: 'rdAdmin',
    title: 'Dashboard',
    icon: <Mail size={20} />,
    navLink: '/dashboard/admin'
  },
  {
    id: 'manageRDs',
    title: "Manage RD's",
    icon: <MessageSquare size={20} />,
    navLink: '#'
  },
  {
    id: 'manageBrands',
    title: 'Manage Brands',
    icon: <CheckSquare size={20} />,
    navLink: '#'
  },
  {
    id: 'payments',
    title: 'Payments',
    icon: <Calendar size={20} />,
    navLink: '#'
  },
  {
    id: 'chatConversationsAdmin',
    title: 'Chat Conversations',
    icon: <FileText size={20} />,
    badge: 'danger',
    badgeText: '9',
    navLink: '/admin/apps/chat/chatAdmin'
    // children: [
    //   {
    //     id: 'invoiceList',
    //     title: 'List',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/list'
    //   },
    //   {
    //     id: 'invoicePreview',
    //     title: 'Preview',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/preview'
    //   },
    //   {
    //     id: 'invoiceEdit',
    //     title: 'Edit',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/edit'
    //   },
    //   {
    //     id: 'invoiceAdd',
    //     title: 'Add',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/add'
    //   }
    // ]
  },
  {
    id: 'customerSupport',
    title: 'Customer Support',
    icon: <ShoppingCart size={20} />
    // children: [
    //   {
    //     id: 'shop',
    //     title: 'Shop',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/ecommerce/shop'
    //   },
    //   {
    //     id: 'detail',
    //     title: 'Details',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/ecommerce/product-detail'
    //   },
    //   {
    //     id: 'wishList',
    //     title: 'Wish List',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/ecommerce/wishlist'
    //   },
    //   {
    //     id: 'checkout',
    //     title: 'Checkout',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/ecommerce/checkout'
    //   }
    // ]
  }
  // {
  //   id: 'users',
  //   title: 'User',
  //   icon: <User size={20} />,
  //   children: [
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/user/list'
  //     },
  //     {
  //       id: 'view',
  //       title: 'View',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/user/view'
  //     },
  //     {
  //       id: 'edit',
  //       title: 'Edit',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/user/edit'
  //     }
  //   ]
  // }
]
