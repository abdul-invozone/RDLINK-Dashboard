import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, User, Mail, Heart, List } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'
import img1 from '@src/assets/images/banner/banner-41.jpg'
import img2 from '@src/assets/images/banner/banner-42.jpg'
import img3 from '@src/assets/images/banner/banner-43.jpg'
import img4 from '@src/assets/images/banner/banner-44.jpg'
import img5 from '@src/assets/images/banner/banner-35.jpg'
import img6 from '@src/assets/images/banner/logofb.png'
import img7 from '@src/assets/images/banner/logotwitter.png'
import img8 from '@src/assets/images/banner/logolinkedin.png'


import CardSubtitle from 'reactstrap/lib/CardSubtitle'

const params = {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    clickable: true
  },
  navigation:true,
  breakpoints: {
    1600: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
}

const RdCampaignsSlides = () => {
  return (
      <div className="brandSlides mb-3">
      <h4 className="brandSlidesHeading font-weight-bolder">Brand Campaigns & Opportunities</h4>
      <Swiper {...params}>
      <SwiperSlide>
          <div className="brandContent">
          
              <img src={img4} alt='swiper 4' className='brandContent-img mb-2' />
              <h2 className="brandSlidesRd">Mush</h2>
              <div className="healthcare" style={{backgroundColor: '#ffe2e6'}}>
                <p className="general-wellness"style={{color: '#f63f5d'}}>Keto Crash Diet</p>
              </div>
              {/* <ul className="list-unstyled social-media m-0">
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><User /></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Mail /></a></li>
              </ul> */}
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Details</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent">
          
              <img src={img3} alt='swiper 3' className='brandContent-img mb-2' />
              <h2 className="brandSlidesRd">Munk Pack</h2>
              <div className="healthcare" style={{backgroundColor: '#b0cef2'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>8 Week Challenge</p>
              </div>
              {/* <ul className="list-unstyled social-media m-0">
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><User /></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Mail /></a></li>
              </ul> */}
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Details</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brandContent">
      <img src={img1} alt='swiper 1' className='brandContent-img mb-2' />
              <h2 className="brandSlidesRd">Catalina Crunch</h2>
              <div className="healthcare" style={{backgroundColor: '#e0f0ff'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>Cooking Class</p>
              </div>
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Details</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent">
          
              <img src={img3} alt='swiper 3' className='brandContent-img mb-2' />
              <h2 className="brandSlidesRd">Munk Pack</h2>
              <div className="healthcare" style={{backgroundColor: '#fff4de'}}>
                <p className="general-wellness" style={{color: '#ffa508'}}>Sports Presentation</p>
              </div>
              {/* <ul className="list-unstyled social-media m-0">
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><User /></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Mail /></a></li>
              </ul> */}
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Details</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent">
        
              <img src={img2} alt='swiper 2' className='brandContent-img mb-2' />
              <h2 className="brandSlidesRd">Wiinder</h2>
              <div className="healthcare" style={{backgroundColor: '#c9f7f5'}}>
                <p className="general-wellness" style={{color: '#17c2ba'}}>8 Week Challenge</p>
              </div>
              {/* <ul className="list-unstyled social-media m-0">
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><User /></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Mail /></a></li>
              </ul> */}
              <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <List size={14} />
        <span className='align-middle ml-50'>Details</span>
      </Button.Ripple>
      <Button.Ripple tag={Link} to='#' color='secondary' className="m-25">
        <Mail size={14} />
        <span className='align-middle ml-50'>Send Message</span>
      </Button.Ripple>
            </div>
          </SwiperSlide>
          
        </Swiper>
              </div>
  )
}

export default RdCampaignsSlides
