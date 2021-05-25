import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    header: 'More'
  },
  {
    id: 'blog',
    title: 'Blog',
    icon: <Mail size={20} />,
    children: [
      {
        id: 'blogList',
        title: 'List',
        permissions: ['admin', 'editor'],
        navLink: '/pages/blogRd/list'
      },
      {
        id: 'blogDetail',
        title: 'Detail',
        permissions: ['admin', 'editor'],
        navLink: '/pages/blogRd/detail'
      },
      {
        id: 'blogEdit',
        title: 'Edit',
        permissions: ['admin', 'editor'],
        navLink: '/pages/blogRd/edit'
      }
    ]
  },
  {
    id: 'faqs',
    title: "FAQ's",
    icon: <MessageSquare size={20} />,
    navLink: '/pages/faqRd'
  },
  {
    id: 'resoures',
    title: 'Resources',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'agreementTemplates',
        title: 'Agreement Templates',
        icon: <Circle size={12} />,
        navLink: '#'
      }
    ]
  }
]
