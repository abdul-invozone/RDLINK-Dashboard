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
    <div className='rdLoginWrapper container-fluid px-md-3'>
      <Row className="py-2 align-items-center">
        <Col>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <h2 className='brand-text text-primary'>The RD Link</h2>
        </Link>
        </Col>
        <Col>
        <ul className="list-unstyled text-right">
            <li className="d-inline-block">
            <Link to='/pages/login-rd'>Login</Link>
              </li>
            <li className="d-inline-block" style={{padding: '0 2px'}}> 
            |
              </li>
            <li className="d-inline-block">
            <Link to='/createloginrd'>Create Account</Link>
              </li>
          </ul>
        </Col>
      </Row>
      <Row className='rdLogin-inner align-items-center'>
          <Col className='mx-auto' lg='6'>
            <CardTitle tag='h1' className='font-weight-bold mb-1 rdLoginHeading'>
              The Easiest way to connect with nutrition experts
            </CardTitle>
            <CardText className='mb-2' style={{fontSize: '18px', lineHeight: '1.6'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <Link to='/createloginrd' style={{color: '#fff'}}><Button.Ripple color='secondary'>Get Started</Button.Ripple></Link>
          </Col>
        <Col className='d-none d-lg-flex align-items-center p-5 auth-bg' lg='6'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default loginrd
