import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    header: 'Main'
  },
  {
    id: 'viewBrands',
    title: "View Brands",
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
    id: 'myPartnerships',
    title: 'My Partnerships',
    icon: <Calendar size={20} />,
    navLink: '#'
  },
  {
    id: 'favorites',
    title: 'Favorites',
    icon: <Calendar size={20} />,
    navLink: '#'
  },
  {
    id: 'messages',
    title: 'Messages',
    icon: <FileText size={20} />,
    badge: 'danger',
    badgeText: '9',
    navLink: '#'
  },
  {
    id: 'payments',
    title: 'Payments',
    icon: <ShoppingCart size={20} />
  }
]
