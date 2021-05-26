import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    header: 'Main'
  },
  {
    id: 'brandsDash',
    title: 'Dashboard',
    icon: <Mail size={20} />,
    navLink: '/dashboard/brands'
  },
  {
    id: 'nutritionExperts',
    title: "Nutrition Experts",
    icon: <MessageSquare size={20} />,
    navLink: '#'
  },
  {
    id: 'opportunities',
    title: 'Opportunities',
    icon: <CheckSquare size={20} />,
    navLink: '#'
  },
  {
    id: 'partnerships',
    title: 'My Partnerships',
    icon: <Calendar size={20} />,
    navLink: '#'
  },
  {
    id: 'myFavorites',
    title: 'My Favorites',
    icon: <Calendar size={20} />,
    navLink: '#'
  },
  {
    id: 'messages',
    title: 'Messages',
    icon: <FileText size={20} />,
    badge: 'danger',
    badgeText: '9',
    navLink: '/apps/chat/chatBrands'
  },
  {
    id: 'payments',
    title: 'Payments',
    icon: <ShoppingCart size={20} />,
    navLink: '#'
  }
]
