import { Link } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import { ChevronLeft } from 'react-feather'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import WizardModern from '@src/views/forms/wizardRd/WizardModern'
import '@styles/base/pages/page-auth.scss'

const RegisterRd = () => {
  const [skin, setSkin] = useSkin()

  const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <h2 className='brand-text text-primary ml-1 mb-5'>Create RD Account</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5 auth-bg' lg='12' sm='12'>
                <div className="w-50 mx-auto"><WizardModern /></div> 
        </Col>
      </Row>
    </div>
  )
}

export default RegisterRd
