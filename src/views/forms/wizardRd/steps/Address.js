import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Input, Form, Button } from 'reactstrap'
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated'
import { selectThemeColors } from '@utils'

const Address = ({ stepper, type }) => {
  const colorOptions = [
    { value: 'google', label: 'Google', color: '#00B8D9', isFixed: true },
    { value: 'linkedin', label: 'Linkedin', color: '#0052CC', isFixed: true },
    { value: 'instagram', label: 'Instagram', color: '#5243AA', isFixed: true },
    { value: 'friendColleague', label: 'Friend or Colleague', color: '#FF5630', isFixed: false },
    { value: 'other', label: 'Other', color: '#FF8B00', isFixed: false }
  ]

  const animatedComponents = makeAnimated()
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Goals</h5>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
        <FormGroup tag={Col} md='12'>
          <Label>What is your main goal for joining Link?</Label>
          <Input type='textarea' name='connectWithBrands' id='connect-with-brands' rows='3' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
          <Label>How did you hear about Link?</Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='success' className='btn-submit' onClick={() => alert('submitted')}>
            Create RD Account
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default Address
