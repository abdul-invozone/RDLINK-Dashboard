import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap'

const TabsBasic = () => {
  
 const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <React.Fragment>
      <h4>Opportunities</h4>
      <hr />
      <Nav tabs className="my-2">
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Upcoming
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Past Opportunity
          </NavLink>
        </NavItem>
        <NavItem className="ml-auto">
        <Button.Ripple color='primary' block tag={Link} to='/dashboard/rd/opportunities-rdform'>
            <span className='align-middle'>Add Opportunity</span>
          </Button.Ripple>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan
            carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon
            biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
          </p>
          <p>
            Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes
            chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw sweet roll.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Dragée jujubes caramels tootsie roll gummies gummies icing bonbon. Candy jujubes cake cotton candy. Jelly-o
            lollipop oat cake marshmallow fruitcake candy canes toffee. Jelly oat cake pudding jelly beans brownie lemon
            drops ice cream halvah muffin. Brownie candy tiramisu macaroon tootsie roll danish.
          </p>
          <p>
            Croissant pie cheesecake sweet roll. Gummi bears cotton candy tart jelly-o caramels apple pie jelly danish
            marshmallow. Icing caramels lollipop topping. Bear claw powder sesame snaps.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default TabsBasic