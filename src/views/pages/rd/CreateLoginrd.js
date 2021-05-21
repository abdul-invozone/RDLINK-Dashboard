import { Link } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import { ChevronLeft } from 'react-feather'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const Createloginrd = () => {
  const [skin, setSkin] = useSkin()

  const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <h2 className='brand-text text-primary ml-1'>The RD Link</h2>
        </Link>
        <Col className='d-flex align-items-center p-5 auth-bg' lg='12' sm='12'>
          <ul className="list-unstyled" style={{position: 'absolute', top: '0', right: '0', margin: '2rem'}}>
            <li className="d-inline-block">
            <Link to='/'>Home</Link>
              </li>
          </ul>
          <div className="mx-auto w-25">
              <CardTitle tag="h1">Create your Account</CardTitle>
              <CardText>
                Already have an account?
                <Link to='/pages/login-rd'> Sign in here</Link>
                <h3 className="mt-3 mb-2">Please select your role</h3>     
          <div>
          <ul className="list-unstyled">
            <li style={{textDecoration: 'underline'}}>
            <Link to='/registerbrandrd'>Brand</Link>
              </li>
            <li style={{textDecoration: 'underline'}}>
            <Link to='/registerrd'>Registered Dietitian</Link>
              </li>
          </ul>
          </div>
              </CardText>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Createloginrd
