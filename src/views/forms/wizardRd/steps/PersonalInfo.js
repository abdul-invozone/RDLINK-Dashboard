import { Fragment } from 'react'
import Select, { components } from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { selectThemeColors } from '@utils'
import makeAnimated from 'react-select/animated'
import { Label, FormGroup, Row, Col, Form, Input, Button, CustomInput } from 'reactstrap'

import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper, type }) => {
  const colorOptions = [
    { value: 'option1', label: 'Option 1'},
    { value: 'option2', label: 'Option 2'},
    { value: 'option3', label: 'Option 3'}
  ]
  const stateOptions = [
    { value: 'Quebec', label: 'Quebec' },
    { value: 'NewBrunswick', label: 'New Brunswick' },
    { value: 'BritishColumbia', label: 'British Columbia' },
    { value: 'Alberta', label: 'Alberta' },
    { value: 'Ontario', label: 'Ontario' }
  ]

  const animatedComponents = makeAnimated()

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Licensure Info</h5>
        <small>Enter Your Licensure Info.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
        <FormGroup tag={Col} md='12'>
        <Label className='form-label' for={`username-${type}`}>
              First and Last Name
            </Label>
            <Input
              name={`username-${type}`}
              id={`username-${type}`}
            />
            </FormGroup>
            <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`cdr-number-${type}`}>
            Are you a registered dietitian?
            </Label>
            <div className='demo-inline-spacing'>
          <CustomInput type='radio' id='CustomRadioRd' name='customRadio' inline label='Rd' defaultChecked />
          <CustomInput type='radio' id='CustomRadioDieteticIntern' name='customRadio' inline label='Dietetic Intern' />
          <Select
              isClearable={false}
              theme={selectThemeColors}
              closeMenuOnSelect={false}
              options={colorOptions}
              className='react-select w-50'
              classNamePrefix='select'
              placeholder="Other..."
            />
        </div>
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`website-${type}`}>
              Website:
            </Label>
            <Input type='text' name='website' id={`website-${type}`} placeholder='Website' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`cdr-number-${type}`}>
              CDR Registration Number:
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              closeMenuOnSelect={false}
              options={stateOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label>
            Upload Proof of Certification
              </Label>
              <Input hidden="" accept="image/*" type="file" className="form-control-file mb-1" />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`country-${type}`}>
              Country:
            </Label>
            <Input type='text' name='country' id={`country-${type}`} placeholder='Country' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`zip-code-${type}`}>
              Zip Code:
            </Label>
            <Input type='number' name='zipCode' id={`zip-code-${type}`} placeholder='Zip Code' />
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
