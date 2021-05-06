import { Link } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import { ChevronLeft } from 'react-feather'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const loginrd = () => {
  const [skin, setSkin] = useSkin()

  const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <h2 className='brand-text text-primary ml-1'>Link RD</h2>
        </Link>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='5' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1 display-4'>
              The Easiest way to connect with nutrition experts
            </CardTitle>
            <CardText className='mb-2' style={{fontSize: '18px', lineHeight: '1.6'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <Button.Ripple color='secondary'>
                Get Started
              </Button.Ripple>
          </Col>
        </Col>
        <Col className='d-none d-lg-flex align-items-center p-5 auth-bg' lg='7' sm='12'>
          <ul class="list-unstyled" style={{position: 'absolute', top: '0', right: '0', margin: '2rem'}}>
            <li class="d-inline-block">
            <Link to='/pages/login-v2'>Login</Link>
              </li>
            <li class="d-inline-block" style={{padding: '0 2px'}}> 
            |
              </li>
            <li class="d-inline-block">
            <Link to='/createloginrd'>Create Account</Link>
              </li>
          </ul>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default loginrd
