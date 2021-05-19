import { Swiper, SwiperSlide } from 'swiper/react'
import { Facebook, Twitter, Linkedin } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
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
    1280: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
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

const RdBrandsSlides = () => {
  return (
    <div className="mb-2">
      <CardBody className="brandSlides">
        <Swiper {...params}>
          <SwiperSlide>
            <div className="brandContent">
            <UncontrolledButtonDropdown className="statsDropdown btn-group" style={{top: '-10px', right:'0px'}}>
        <DropdownToggle color='flat-primary'>
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
              <img src={img1} alt='swiper 1' className='brandContent-img' />
              <h2 className="antonio">Antonio Pastore</h2>
              <div className="healthcare" style={{backgroundColor: '#e0f0ff'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled social-media">
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><img src={img6} alt='swiper 1'/></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><img src={img7} alt='swiper 1'/></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><img src={img8} alt='swiper 1'/></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent">
          <UncontrolledButtonDropdown className="statsDropdown btn-group" style={{top: '0', right:'5px'}}>
        <DropdownToggle color='flat-primary'>
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
              <img src={img2} alt='swiper 2' className='brandContent-img' />
              <h2 className="antonio">Jessica Miles</h2>
              <div className="healthcare" style={{backgroundColor: '#c9f7f5'}}>
                <p className="general-wellness" style={{color: '#17c2ba'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled social-media">
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><img src={img6} alt='swiper 1'/></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><img src={img7} alt='swiper 1'/></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><img src={img8} alt='swiper 1'/></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent">
          <UncontrolledButtonDropdown className="statsDropdown btn-group" style={{top: '0', right:'5px'}}>
        <DropdownToggle color='flat-primary'>
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
              <img src={img3} alt='swiper 3' className='brandContent-img' />
              <h2 className="antonio">John Beans</h2>
              <div className="healthcare" style={{backgroundColor: '#fff4de'}}>
                <p className="general-wellness" style={{color: '#ffa508'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled social-media">
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><img src={img6} alt='swiper 1'/></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><img src={img7} alt='swiper 1'/></a></li>
                <li className="social-media-icons"><a href="#" className="social-media-anchor"><img src={img8} alt='swiper 1'/></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent">
          <UncontrolledButtonDropdown className="statsDropdown btn-group" style={{top: '0', right:'5px'}}>
        <DropdownToggle color='flat-primary'>
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
              <img src={img4} alt='swiper 4' className='brandContent-img' />
              <h2 className="antonio">Matt Pears</h2>
              <div className="healthcare" style={{backgroundColor: '#ffe2e6'}}>
                <p className="general-wellness"style={{color: '#f63f5d'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled social-media">
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><img src={img6} alt='swiper 1' /></a></li>
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><img src={img7} alt='swiper 1' /></a></li>
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><img src={img8} alt='swiper 1' /></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent">
          <UncontrolledButtonDropdown className="statsDropdown btn-group" style={{top: '0', right:'5px'}}>
        <DropdownToggle color='flat-primary'>
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
              <img src={img3} alt='swiper 3' className='brandContent-img' />
              <h2 className="antonio">John Beans</h2>
              <div className="healthcare" style={{backgroundColor: '#b0cef2'}}>
                <p className="general-wellness" style={{color: '#3592fc'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled social-media">
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><img src={img6} alt='swiper 1' /></a></li>
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><img src={img7} alt='swiper 1' /></a></li>
                <li className="social-media-icons"><a className="social-media-anchor" href="#"><img src={img8} alt='swiper 1' /></a></li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </div>
  )
}

export default RdBrandsSlides
