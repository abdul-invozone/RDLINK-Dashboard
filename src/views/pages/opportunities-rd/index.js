import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import PaginationBasic from './RdPagination'
import { Facebook, Twitter, Linkedin, User, Mail, Heart } from 'react-feather'
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, Card, CardTitle } from 'reactstrap'

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
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
      <div className="col-auto mb-1">
                <Heart
                onClick={() => handleShowWishlist(false)}
                  className = {classNames(
                    showWishlist ? "text-fillLight" : "text-fillDanger"
                    )}
                    size={14}
                />
              </div>
      </div>
      <img src={img1} alt='swiper 1' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Catalina Crunch</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#e0f0ff'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>Healthcare | General Wellness</p>
              </div>
          <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img2} alt='swiper 2' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Wiinder</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#c9f7f5'}}>
                <p className="general-wellness" style={{color: '#17c2ba'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img3} alt='swiper 3' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Munk Pack</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#fff4de'}}>
                <p className="general-wellness" style={{color: '#ffa508'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img4} alt='swiper 4' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Mush</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#ffe2e6'}}>
                <p className="general-wellness"style={{color: '#f63f5d'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          {/* Second Row */}
        <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img2} alt='swiper 2' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Wiinder</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#c9f7f5'}}>
                <p className="general-wellness" style={{color: '#17c2ba'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img3} alt='swiper 3' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Munk Pack</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#fff4de'}}>
                <p className="general-wellness" style={{color: '#ffa508'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img4} alt='swiper 4' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Mush</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#ffe2e6'}}>
                <p className="general-wellness"style={{color: '#f63f5d'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
      <div className="col-auto mb-1">
                <Heart
                onClick={() => handleShowWishlist(false)}
                  className = {classNames(
                    showWishlist ? "text-fillLight" : "text-fillDanger"
                    )}
                    size={14}
                />
              </div>
      </div>
      <img src={img1} alt='swiper 1' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Catalina Crunch</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#e0f0ff'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>Healthcare | General Wellness</p>
              </div>
          <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
      <div className="col-auto mb-1">
                <Heart
                onClick={() => handleShowWishlist(false)}
                  className = {classNames(
                    showWishlist ? "text-fillLight" : "text-fillDanger"
                    )}
                    size={14}
                />
              </div>
      </div>
      <img src={img1} alt='swiper 1' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Catalina Crunch</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#e0f0ff'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>Healthcare | General Wellness</p>
              </div>
          <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img2} alt='swiper 2' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Wiinder</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#c9f7f5'}}>
                <p className="general-wellness" style={{color: '#17c2ba'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img3} alt='swiper 3' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Munk Pack</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#fff4de'}}>
                <p className="general-wellness" style={{color: '#ffa508'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img4} alt='swiper 4' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Mush</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#ffe2e6'}}>
                <p className="general-wellness"style={{color: '#f63f5d'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Profile</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
        </Row>
        <PaginationBasic />
        </TabPane>
        <TabPane tabId='2'>
        <Row>
          {/* Second Row */}
        <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img2} alt='swiper 2' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Wiinder</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#c9f7f5'}}>
                <p className="general-wellness" style={{color: '#17c2ba'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img3} alt='swiper 3' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Munk Pack</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#fff4de'}}>
                <p className="general-wellness" style={{color: '#ffa508'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img4} alt='swiper 4' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Mush</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#ffe2e6'}}>
                <p className="general-wellness"style={{color: '#f63f5d'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
      <div className="col-auto mb-1">
                <Heart
                onClick={() => handleShowWishlist(false)}
                  className = {classNames(
                    showWishlist ? "text-fillLight" : "text-fillDanger"
                    )}
                    size={14}
                />
              </div>
      </div>
      <img src={img1} alt='swiper 1' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Catalina Crunch</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#e0f0ff'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>Healthcare | General Wellness</p>
              </div>
          <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
      <div className="col-auto mb-1">
                <Heart
                onClick={() => handleShowWishlist(false)}
                  className = {classNames(
                    showWishlist ? "text-fillLight" : "text-fillDanger"
                    )}
                    size={14}
                />
              </div>
      </div>
      <img src={img1} alt='swiper 1' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Catalina Crunch</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#e0f0ff'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>Healthcare | General Wellness</p>
              </div>
          <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img2} alt='swiper 2' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Wiinder</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#c9f7f5'}}>
                <p className="general-wellness" style={{color: '#17c2ba'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img3} alt='swiper 3' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Munk Pack</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#fff4de'}}>
                <p className="general-wellness" style={{color: '#ffa508'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img4} alt='swiper 4' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Mush</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#ffe2e6'}}>
                <p className="general-wellness"style={{color: '#f63f5d'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
      <div className="col-auto mb-1">
                <Heart
                onClick={() => handleShowWishlist(false)}
                  className = {classNames(
                    showWishlist ? "text-fillLight" : "text-fillDanger"
                    )}
                    size={14}
                />
              </div>
      </div>
      <img src={img1} alt='swiper 1' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Catalina Crunch</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#e0f0ff'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>Healthcare | General Wellness</p>
              </div>
          <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"><p className="newRdText">Sponsored</p></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img2} alt='swiper 2' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Wiinder</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#c9f7f5'}}>
                <p className="general-wellness" style={{color: '#17c2ba'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img3} alt='swiper 3' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Munk Pack</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#fff4de'}}>
                <p className="general-wellness" style={{color: '#ffa508'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
          </Card>
          </Col>
          <Col sm="6" md="4" lg="4" xl="3">
          <Card className="p-2 text-center">
          <div className="brandContent">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mb-1"></div>
          <div className="col-auto mb-1">
                <Heart
                  className='text-fillLight'
                  size={14}
                />
              </div>
      </div>
              <img src={img4} alt='swiper 4' className='brandContent-img mb-2' />
              <CardTitle className="brandSlidesRd">Mush</CardTitle>
              <div className="healthcare" style={{backgroundColor: '#ffe2e6'}}>
                <p className="general-wellness"style={{color: '#f63f5d'}}>Healthcare | General Wellness</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <User size={14} />
        <span className='align-middle ml-50'>Feedback</span>
      </Button.Ripple>
            </div>
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