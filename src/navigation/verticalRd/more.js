import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    header: 'More'
  },
  {
    id: 'calender',
    title: "Calender",
    icon: <Calendar size={20} />,
    navLink: '/apps/calendarRd'
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
      },
      {
        id: 'tips',
        title: 'Tips & How To',
        icon: <Circle size={12} />,
        navLink: '#'
      },
      {
        id: 'slack',
        title: 'Slack',
        icon: <Circle size={12} />,
        navLink: '#'
      }
    ]
  }
]
