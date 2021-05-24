import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, User, Mail } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'
import img1 from '@src/assets/images/banner/banner-41.jpg'
import img2 from '@src/assets/images/banner/banner-42.jpg'
import img3 from '@src/assets/images/banner/banner-43.jpg'
import img4 from '@src/assets/images/banner/banner-44.jpg'
import img5 from '@src/assets/images/banner/banner-35.jpg'
import img6 from '@src/assets/images/banner/logofb.png'
import img7 from '@src/assets/images/banner/logotwitter.png'
import img8 from '@src/assets/images/banner/logolinkedin.png'
import BrandsMeetup1 from '@src/views/ui-elements/cards/advance/BrandsMeetup1'
import BrandsMeetup2 from '@src/views/ui-elements/cards/advance/BrandsMeetup2'


import CardSubtitle from 'reactstrap/lib/CardSubtitle'

const params = {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true
  },
  navigation:true,
  breakpoints: {
    1280: {
      slidesPerView: 1,
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

const RdCampaignsSlides = () => {
  return (
      <div className="brandSlides mb-2">
      <h2 className="brandSlidesHeading">Recommended Opportunities</h2>
        <Swiper {...params}>
          <SwiperSlide>      
      <BrandsMeetup1 />
          </SwiperSlide>
          <SwiperSlide>      
      <BrandsMeetup2 />
          </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default RdCampaignsSlides
