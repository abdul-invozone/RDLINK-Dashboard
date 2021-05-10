import { Swiper, SwiperSlide } from 'swiper/react'
import { Facebook, Twitter, Linkedin } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import img1 from '@src/assets/images/banner/banner-41.jpg'
import img2 from '@src/assets/images/banner/banner-42.jpg'
import img3 from '@src/assets/images/banner/banner-43.jpg'
import img4 from '@src/assets/images/banner/banner-44.jpg'
import img5 from '@src/assets/images/banner/banner-35.jpg'
import CardSubtitle from 'reactstrap/lib/CardSubtitle'

const params = {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    clickable: true
  }
}

const RdBrandsSlides = () => {
  return (
    <div className="mb-2">
   
      <CardBody>
        <Swiper {...params}>
          <SwiperSlide>
            <div className="brandContent">
            <UncontrolledButtonDropdown className="statsDropdown">
        <DropdownToggle color='flat-primary' className="dropdown-button Subscription">
          ...
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 3
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
              <img src={img1} alt='swiper 1' className='img-fluid' width='150' height='150' />
              <h2 className="antonio">Antonio Pastore</h2>
              <div className="healthcare" style={{backgroundColor: '#e0f0ff'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled social-media">
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Facebook /></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Twitter /></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Linkedin /></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent">
              <img src={img2} alt='swiper 2' className='img-fluid' width='150' height='150' />
              <h2 className="antonio">Jessica Miles</h2>
              <div className="healthcare" style={{backgroundColor: '#c9f7f5'}}>
                <p className="general-wellness" style={{color: '#17c2ba'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled social-media">
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Facebook /></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Twitter /></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Linkedin /></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent">
              <img src={img3} alt='swiper 3' className='img-fluid' width='150' height='150' />
              <h2 className="antonio">John Beans</h2>
              <div className="healthcare" style={{backgroundColor: '#fff4de'}}>
                <p className="general-wellness" style={{color: '#ffa508'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled social-media">
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Facebook /></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Twitter /></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><Linkedin /></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent">
              <img src={img4} alt='swiper 4' className='img-fluid' width='150' height='150' />
              <h2 className="antonio">Matt Pears</h2>
              <div className="healthcare" style={{backgroundColor: '#ffe2e6'}}>
                <p className="general-wellness"style={{color: '#f63f5d'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled social-media">
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><Facebook /></a></li>
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><Twitter /></a></li>
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><Linkedin /></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent">
              <img src={img3} alt='swiper 3' className='img-fluid' width='150' height='150' />
              <h2 className="antonio">John Beans</h2>
              <div className="healthcare" style={{backgroundColor: '#b0cef2'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled social-media">
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><Facebook /></a></li>
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><Twitter /></a></li>
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><Linkedin /></a></li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </div>
  )
}

export default RdBrandsSlides
