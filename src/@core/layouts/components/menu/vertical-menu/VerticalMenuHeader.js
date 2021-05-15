// ** Config
import themeConfig from '@configs/themeConfig'

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
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power, Disc, X, Circle } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'

const VerticalMenuHeader = props => {

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

  // ** Props
  const { menuCollapsed, setMenuCollapsed, setMenuVisibility, setGroupOpen, menuHover } = props

  // ** Reset open group
  useEffect(() => {
    if (!menuHover && menuCollapsed) setGroupOpen([])
  }, [menuHover, menuCollapsed])

  // ** Menu toggler component
  const Toggler = () => {
    if (!menuCollapsed) {
      return (
        <Disc
          size={20}
          data-tour='toggle-icon'
          className='text-white toggle-icon d-none d-xl-block'
          onClick={() => setMenuCollapsed(true)}
        />
      )
    } else {
      return (
        <Circle
          size={20}
          data-tour='toggle-icon'
          className='text-white toggle-icon d-none d-xl-block'
          onClick={() => setMenuCollapsed(false)}
        />
      )
    }
  }

  return (
    <>
    <div className='navbar-header'>
      <ul className='nav navbar-nav flex-row'>
        <li className='nav-item mr-auto'>
          <NavLink to='/' className='navbar-brand'>
            {/* <span className='brand-logo'>
              <img src={themeConfig.app.appLogoImage} alt='logo' />
            </span> */}
            <h2 className='brand-text mb-0'>{themeConfig.app.appName}</h2>
          </NavLink>
        </li>
        <li className='nav-item nav-toggle'>
          <div className='nav-link modern-nav-toggle cursor-pointer'>
            <Toggler />
            <X onClick={() => setMenuVisibility(false)} className='toggle-icon icon-x d-block d-xl-none' size={20} />
          </div>
        </li>
      </ul>
    </div>
    <div className="userDropDown">
      <ul> 
      <div className='user-nav d-sm-flex d-none flex-row align-items-center'>
    <div className="col-auto">
    <Avatar img={userAvatar} imgHeight='91' imgWidth='91' status='online' />
      </div>
      <div className="col">
      <Link to="/loginrd" className='user-name font-weight-medium text-white'>Jenna Gorham Admin</Link>
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
    </div>
      </ul>
    </div>
      </>
  )
}

export default VerticalMenuHeader
