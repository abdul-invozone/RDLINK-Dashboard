// ** React Imports
import { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

// ** Custom Components
import NavbarUser from './NavbarUser'
import NavbarBookmarks from './NavbarBookmarks'
import { CheckSquare } from 'react-feather'

const ThemeNavbar = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

  return (
    <Fragment>
      <div className='bookmark-wrapper d-flex align-items-center'>
        {/* <NavbarBookmarks setMenuVisibility={setMenuVisibility} /> */}
        {/* <NavLink tag={Link} to="/apps/todoAdmin"><CheckSquare size="21" /></NavLink> */}
      </div>
      <NavbarUser skin={skin} setSkin={setSkin} />
    </Fragment>
  )
}

export default ThemeNavbar
