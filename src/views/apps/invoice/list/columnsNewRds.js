// ** React Imports
import { Fragment } from 'react'

import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { deleteInvoice } from '../store/actions'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledTooltip
} from 'reactstrap'
import {
  Eye,
  TrendingUp,
  Send,
  MoreVertical,
  Download,
  Edit,
  Trash,
  Copy,
  CheckCircle,
  Save,
  ArrowDownCircle,
  Info,
  PieChart
} from 'react-feather'

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-50' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color} className='mr-50' content={row.client ? row.client.name : 'John Doe'} initials />
  }
}

// ** Table columns
export const columnsNewRds = [
  {
    name: 'Date',
    selector: 'dueDate',
    sortable: true,
    minWidth: '80px',
    cell: row => row.dueDate
  },
  {
    name: 'Event name',
    selector: 'eventName',
    sortable: true,
    minWidth: '180px',
    cell: row => row.client.eventName
  },
  {
    name: 'Partnership Type',
    selector: 'subscriptionPlan',
    sortable: true,
    minWidth: '220px',
    className: 'text',
    textAlign: 'center',
    cell: row => <span>{row.client.subscriptionPlan || 0}</span>
  },
  {
    name: 'Location',
    selector: 'partnerships',
    sortable: true,
    minWidth: '100px',
    cell: row => <span>{row.client.partnerships || 0}</span>
  },
  {
    name: 'Cost',
    selector: 'monthlyLogins',
    sortable: true,
    minWidth: '80px',
    cell: row => <span>{row.client.monthlyLogins || 0}</span>
  },
  {
    name: 'Expected Reach',
    selector: 'loginTime',
    sortable: true,
    minWidth: '200px',
    cell: row => <span>{row.client.loginTime || 0}</span>
  }
]
