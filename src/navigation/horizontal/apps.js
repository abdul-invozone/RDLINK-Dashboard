import { Box, Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    id: 'apps',
    title: 'Apps',
    icon: <Box />,
    children: [
      {
        id: 'email',
        title: 'Email',
        icon: <Mail />,
        navLink: '#'
      },
      {
        id: 'chat',
        title: 'Chat',
        icon: <MessageSquare />,
        navLink: '#'
      },
      {
        id: 'todo',
        title: 'Todo',
        icon: <CheckSquare />,
        navLink: '#'
      },
      {
        id: 'calendar',
        title: 'Calendar',
        icon: <Calendar />,
        navLink: '#'
      },
      {
        id: 'invoiceApp',
        title: 'Invoice',
        icon: <FileText />,
        children: [
          {
            id: 'invoiceList',
            title: 'List',
            icon: <Circle />,
            navLink: '#'
          },
          {
            id: 'invoicePreview',
            title: 'Preview',
            icon: <Circle />,
            navLink: '#'
          },
          {
            id: 'invoiceEdit',
            title: 'Edit',
            icon: <Circle />,
            navLink: '#'
          },
          {
            id: 'invoiceAdd',
            title: 'Add',
            icon: <Circle />,
            navLink: '#'
          }
        ]
      },
      {
        id: 'eCommerce',
        title: 'eCommerce',
        icon: <ShoppingCart />,
        children: [
          {
            id: 'shop',
            title: 'Shop',
            icon: <Circle />,
            navLink: '#'
          },
          {
            id: 'detail',
            title: 'Details',
            icon: <Circle />,
            navLink: '#'
          },
          {
            id: 'wishList',
            title: 'Wish List',
            icon: <Circle />,
            navLink: '#'
          },
          {
            id: 'checkout',
            title: 'Checkout',
            icon: <Circle />,
            navLink: '#'
          }
        ]
      },
      {
        id: 'users',
        title: 'User',
        icon: <User />,
        children: [
          {
            id: 'list',
            title: 'List',
            icon: <Circle />,
            navLink: '#'
          },
          {
            id: 'view',
            title: 'View',
            icon: <Circle />,
            navLink: '#'
          },
          {
            id: 'edit',
            title: 'Edit',
            icon: <Circle />,
            navLink: '#'
          }
        ]
      }
    ]
  }
]
