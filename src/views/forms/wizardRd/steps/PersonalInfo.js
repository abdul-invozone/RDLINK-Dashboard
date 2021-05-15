import { Fragment } from 'react'
import Select, { components } from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { selectThemeColors } from '@utils'
import makeAnimated from 'react-select/animated'
import { Label, FormGroup, Row, Col, Form, Input, Button, CustomInput } from 'reactstrap'

import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper, type }) => {
  const colorOptions = [
    { value: 'glutenFree', label: 'Gluten Free', color: '#00B8D9', isFixed: true },
    { value: 'dairyFree', label: 'Dairy Free', color: '#0052CC', isFixed: true },
    { value: 'top', label: 'Top 8 Allergen friendly', color: '#5243AA', isFixed: true },
    { value: 'vegan', label: 'Vegan', color: '#FF5630', isFixed: false },
    { value: 'nutFree', label: 'Nut Free', color: '#FF8B00', isFixed: false },
    { value: 'yellow', label: 'Yellow', color: '#FFC400', isFixed: false }
  ]

  const animatedComponents = makeAnimated()

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Company Info</h5>
        <small>Enter Your Company Info.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`full-name-${type}`}>
              Full Name:
            </Label>
            <Input type='text' name='full-name' id={`full-name-${type}`} placeholder='Full Name' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`cdr-number-${type}`}>
              CDR Registration Number:
            </Label>
            <Input type='number' name='cdrRegistrationNumber' id={`cdr-number-${type}`} placeholder='Contact Name' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`cdr-number-${type}`}>
            Are you a RD or RD2Be?
            </Label>
            <div className='demo-inline-spacing'>
          <CustomInput type='radio' id='CustomRadioRd' name='customRadio' inline label='Rd' defaultChecked />
          <CustomInput type='radio' id='CustomRadioRd2Be' name='customRadio' inline label='Rd2Be' />
          <CustomInput type='radio' id='CustomRadioOther' name='customRadio' inline label='Other' />
        </div>
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className="waves-effect mr-75 btn btn-primary btn-sm">
              Upload License Certificate
              <Input hidden="" accept="image/*" type="file" className="form-control-file mt-1" />
              </Label>
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`contact-number-${type}`}>
              Contact Number:
            </Label>
            <Input type='number' name='contactNumber' id={`contact-number-${type}`} placeholder='Contact Number' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`website-${type}`}>
              Website:
            </Label>
            <Input type='text' name='website' id={`website-${type}`} placeholder='Website' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`zip-code-${type}`}>
              Zip Code:
            </Label>
            <Input type='number' name='zipCode' id={`zip-code-${type}`} placeholder='Zip Code' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`city-${type}`}>
              City:
            </Label>
            <Input type='text' name='city' id={`city-${type}`} placeholder='City' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`state-${type}`}>
              State:
            </Label>
            <Input type='text' name='state' id={`state-${type}`} placeholder='State' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`country-${type}`}>
              Country:
            </Label>
            <Input type='text' name='country' id={`country-${type}`} placeholder='Country' />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default PersonalInfo
