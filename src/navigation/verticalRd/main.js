import { Home, Mail, MessageSquare, MessageCircle, CheckSquare, Calendar, FileText, Circle, ShoppingCart, Users, Trello } from 'react-feather'

export default [
  {
    header: 'Main'
  },
  {
    id: 'rdDash',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/dashboard/rd'
  },
  {
    id: 'messagesRd',
    title: 'Messages',
    icon: <MessageCircle size={20} />,
    badge: 'danger',
    badgeText: '9',
    navLink: '/rd/apps/chat/chatRd'
  },
  {
    id: 'viewBrands',
    title: "Brands",
    icon: <Users size={20} />,
    children: [
      {
        id: 'viewAllBrands',
        title: 'View All',
        icon: <Circle size={12} />,
        navLink: '/dashboard/rd/brands'
      },
      {
        id: 'myBrands',
        title: 'My Brands',
        icon: <Circle size={12} />,
        navLink: '#'
      },
      {
        id: 'favoritesBrands',
        title: 'Favorites',
        icon: <Circle size={12} />,
        navLink: '#'
      }
    ]
  },
  {
    id: 'opportunities',
    title: 'Opportunities',
    icon: <Trello size={20} />,
    navLink: '/dashboard/rd/opportunities'
  },
  {
    id: 'myPartnerships',
    title: 'Manage Partnerships',
    icon: <CheckSquare size={20} />,
    navLink: '#'
  }
  // {
  //   id: 'favorites',
  //   title: 'Favorites',
  //   icon: <Calendar size={20} />,
  //   navLink: '#'
  // },
  // {
  //   id: 'payments',
  //   title: 'Payments',
  //   icon: <ShoppingCart size={20} />
  // }
]
