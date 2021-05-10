import { Swiper, SwiperSlide } from 'swiper/react'
import { Facebook, Twitter, Linkedin } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import img1 from '@src/assets/images/banner/banner-31.jpg'
import img2 from '@src/assets/images/banner/banner-32.jpg'
import img3 from '@src/assets/images/banner/banner-33.jpg'
import img4 from '@src/assets/images/banner/banner-34.jpg'
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
    <Card className="mb-2">
      <CardHeader>
        <CardTitle tag='h4'>Brands</CardTitle>
        <CardSubtitle>Showing Paid Brands Only</CardSubtitle>
      </CardHeader>
      <CardBody>
        <Swiper {...params}>
          <SwiperSlide>
            <div className="brandContent text-center p-3">
              <img src={img1} alt='swiper 1' className='img-fluid' width='150' height='150' />
              <h2 className="m-1">Antonio Pastore</h2>
              <div style={{backgroundColor: '#e1f0ff', borderRadius: '3px', margin: '0 0px 20px', padding: '5px'}}>
                <p style={{margin: '0', color: '#3599ff'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled">
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Facebook /></a></li>
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Twitter /></a></li>
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Linkedin /></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent text-center p-3">
              <img src={img2} alt='swiper 2' className='img-fluid' width='150' height='150' />
              <h2 className="m-1">Jessica Miles</h2>
              <div style={{backgroundColor: '#e1f0ff', borderRadius: '3px', margin: '0 0px 20px', padding: '5px'}}>
                <p style={{margin: '0', color: '#3599ff'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled">
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Facebook /></a></li>
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Twitter /></a></li>
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Linkedin /></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent text-center p-3">
              <img src={img3} alt='swiper 3' className='img-fluid' width='150' height='150' />
              <h2 className="m-1">John Beans</h2>
              <div style={{backgroundColor: '#e1f0ff', borderRadius: '3px', margin: '0 0px 20px', padding: '5px'}}>
                <p style={{margin: '0', color: '#3599ff'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled">
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Facebook /></a></li>
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Twitter /></a></li>
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Linkedin /></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent text-center p-3">
              <img src={img4} alt='swiper 4' className='img-fluid' width='150' height='150' />
              <h2 className="m-1">Matt Pears</h2>
              <div style={{backgroundColor: '#e1f0ff', borderRadius: '3px', margin: '0 0px 20px', padding: '5px'}}>
                <p style={{margin: '0', color: '#3599ff'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled">
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Facebook /></a></li>
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Twitter /></a></li>
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Linkedin /></a></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="brandContent text-center p-3">
              <img src={img3} alt='swiper 3' className='img-fluid' width='150' height='150' />
              <h2 className="m-1">John Beans</h2>
              <div style={{backgroundColor: '#e1f0ff', borderRadius: '3px', margin: '0 0px 20px', padding: '5px'}}>
                <p style={{margin: '0', color: '#3599ff'}}>Healthcare | General Wellness</p>
              </div>
              <ul className="list-unstyled">
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Facebook /></a></li>
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Twitter /></a></li>
                <li style={{display: 'inline-block', width: '46px', height: '46px', margin: '0 3px', backgroundColor: '#e9f6fd', borderRadius: '999px'}}><a style={{position: 'relative', top: '10px'}} href="#"><Linkedin /></a></li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default RdBrandsSlides
