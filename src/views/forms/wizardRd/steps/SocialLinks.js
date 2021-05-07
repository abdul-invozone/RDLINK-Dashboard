import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import Cleave from 'cleave.js/react'
import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'

const SocialLinks = ({ stepper, type }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Payment Info</h5>
        <small>Enter Your Payment Info.</small>
      </div>
        <Form className='form' onSubmit={e => e.preventDefault()}>
          <Row>
            <Col sm='12'>
              <FormGroup className='mb-2'>
                <Label for='payment-card-number'>Card Number</Label>
                <Cleave
                  className='form-control'
                  placeholder='2133 3244 4567 8921'
                  options={{ creditCard: true }}
                  id='payment-card-number'
                />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup className='mb-2'>
                <Label for='payment-input-name'>Name on Card</Label>
                <Input placeholder='Curtis Stone' id='payment-input-name' />
              </FormGroup>
            </Col>
            <Col sm='6'>
              <FormGroup className='mb-2'>
                <Label for='payment-expiry'>Expiry</Label>
                <Cleave
                  className='form-control'
                  placeholder='MM / YY'
                  options={{ date: true, delimiter: '/', datePattern: ['Y', 'm'] }}
                  id='payment-expiry'
                />
              </FormGroup>
            </Col>
            <Col sm='6'>
              <FormGroup className='mb-2'>
                <Label for='payment-cvv'>CVV / CVC</Label>
                <Input type='number' placeholder='123' id='payment-cvv' />
              </FormGroup>
            </Col>
            <Col sm="12">
            <p>*You will be charged after 1 week of trial period. Trial week will be included in payment period eith monthly or yearly subscription plan</p>
            </Col>
          </Row>
        </Form>
    <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='success' className='btn-submit' onClick={() => alert('submitted')}>
            Create Brand Account
          </Button.Ripple>
        </div>
    </Fragment>
  )
}

export default SocialLinks
