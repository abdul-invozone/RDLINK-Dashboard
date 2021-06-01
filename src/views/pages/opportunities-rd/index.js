import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Shop from '@src/views/apps/brandsRd/shop'
import PaginationBasic from './RdPagination'
import { Facebook, Twitter, Linkedin, User, Mail, Heart, List } from 'react-feather'
import styled from 'styled-components'
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

import img1 from '@src/assets/images/banner/banner-41.jpg'
import img2 from '@src/assets/images/banner/banner-42.jpg'
import img3 from '@src/assets/images/banner/banner-43.jpg'
import img4 from '@src/assets/images/banner/banner-44.jpg'

const TabsBasic = () => {


  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ")
  }
  
  const [showWishlist, setShowWishlist] = useState(true)
  
  const handleShowWishlist = () => {
    setShowWishlist(prevCheck => !prevCheck)
  }
  
 const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const UpcomingOppoWrapper = styled.div`
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      font-weight: 600;
      span {
        display: inline-block;
        margin-right: 25px;
        font-weight: 400;
        width: 6rem;
        white-space: nowrap;
      }
    }
  `

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
            Upcoming Opportunities
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Past Opportunities
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
          <Row>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>Keto Diet Awareness</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>San Diegi, CA91905, USA</li>
                  <li><span>Date: </span>21 June, 2021</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Manage</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>Sports Presentation</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>California</li>
                  <li><span>Date: </span>13 April, 2021</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Manage</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>8 Week Challenge</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>New York, USA</li>
                  <li><span>Date: </span>21 February, 2019</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Manage</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>Sports Presentation</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>California</li>
                  <li><span>Date: </span>13 April, 2021</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Manage</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>8 Week Challenge</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>New York, USA</li>
                  <li><span>Date: </span>21 February, 2019</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Manage</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>Keto Diet Awareness</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>San Diegi, CA91905, USA</li>
                  <li><span>Date: </span>21 June, 2021</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Manage</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
        </Row>
        <PaginationBasic />
        </TabPane>
        <TabPane tabId='2'>
          <Row>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>8 Week Challenge</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>New York, USA</li>
                  <li><span>Date: </span>21 February, 2019</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>Sports Presentation</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>California</li>
                  <li><span>Date: </span>13 April, 2021</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>8 Week Challenge</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>New York, USA</li>
                  <li><span>Date: </span>21 February, 2019</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>Keto Diet Awareness</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>San Diegi, CA91905, USA</li>
                  <li><span>Date: </span>21 June, 2021</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>Keto Diet Awareness</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>San Diegi, CA91905, USA</li>
                  <li><span>Date: </span>21 June, 2021</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>Sports Presentation</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>California</li>
                  <li><span>Date: </span>13 April, 2021</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4">
          <Card>
            <CardHeader>
              <CardTitle>8 Week Challenge</CardTitle>
              </CardHeader>
              <CardBody>
                <UpcomingOppoWrapper>
                  <ul>
                  <li><span>Location: </span>New York, USA</li>
                  <li><span>Date: </span>21 February, 2019</li>
                  <li><span>Type of Event: </span>Presentation</li>
                  </ul>
                  <Button.Ripple tag={Link} to='#' color='secondary' className="round m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Manage</span>
      </Button.Ripple>
                </UpcomingOppoWrapper>
              </CardBody>
          </Card>
          </Col>
        </Row>
        <PaginationBasic />
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default TabsBasic