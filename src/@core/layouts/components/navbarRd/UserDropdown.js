// ** React Imports
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar

  return (
    // <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
    //   <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        
    //   </DropdownToggle>
    //   <DropdownMenu right>
    //     <DropdownItem tag={Link} to='/pages/profile'>
    //       <User size={14} className='mr-75' />
    //       <span className='align-middle'>Profile</span>
    //     </DropdownItem>
    //     <DropdownItem tag={Link} to='/apps/email'>
    //       <Mail size={14} className='mr-75' />
    //       <span className='align-middle'>Inbox</span>
    //     </DropdownItem>
    //     <DropdownItem tag={Link} to='/apps/todo'>
    //       <CheckSquare size={14} className='mr-75' />
    //       <span className='align-middle'>Tasks</span>
    //     </DropdownItem>
    //     <DropdownItem tag={Link} to='/apps/chat'>
    //       <MessageSquare size={14} className='mr-75' />
    //       <span className='align-middle'>Chats</span>
    //     </DropdownItem>
    //     <DropdownItem divider />
    //     <DropdownItem tag={Link} to='/pages/account-settings'>
    //       <Settings size={14} className='mr-75' />
    //       <span className='align-middle'>Settings</span>
    //     </DropdownItem>
    //     <DropdownItem tag={Link} to='/pages/pricing'>
    //       <CreditCard size={14} className='mr-75' />
    //       <span className='align-middle'>Pricing</span>
    //     </DropdownItem>
    //     <DropdownItem tag={Link} to='/pages/faq'>
    //       <HelpCircle size={14} className='mr-75' />
    //       <span className='align-middle'>FAQ</span>
    //     </DropdownItem>
    //     <DropdownItem tag={Link} to='/login' onClick={() => dispatch(handleLogout())}>
    //       <Power size={14} className='mr-75' />
    //       <span className='align-middle'>Logout</span>
    //     </DropdownItem>
    //   </DropdownMenu>
    // </UncontrolledDropdown>
    <div className='user-nav d-sm-flex d-none flex-row align-items-center'>
    <div className="col-auto">
    <Avatar img={userAvatar} imgHeight='91' imgWidth='91' status='online' />
      </div>
      <div className="col">
      <Link to="/loginrd" className='user-name font-weight-medium text-white'>Jenna Gorham</Link>
      <ul>
        <li className="d-inline-block mr-1" style={{marginTop: '3px'}}>
          <NavLink to="#" className="text-white"><User size={18} /></NavLink>
          </li>
          <li className="d-inline-block mr-1">
          <NavLink to="#" className="text-white"><Mail size={18} /></NavLink>
          </li>
          <li className="d-inline-block">
          <NavLink to="#" className="text-white"><CheckSquare size={18} /></NavLink>
          </li>
      </ul>
      </div>
      
      {/* <span className='user-status'>{(userData && userData.role) || 'Admin'}</span> */}
    </div>
  )
}

export default UserDropdown
