import { Fragment } from 'react'
import Select, { components } from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { selectThemeColors } from '@utils'
import makeAnimated from 'react-select/animated'
import { Label, FormGroup, Row, Col, Form, Input, Button } from 'reactstrap'

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
            <Label className='form-label' for={`company-${type}`}>
              Company:
            </Label>
            <Input type='text' name='company' id={`company-${type}`} placeholder='Company' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`company-name-${type}`}>
              Contact Name:
            </Label>
            <Input type='text' name='contactName' id={`contact-name-${type}`} placeholder='Contact Name' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`website-${type}`}>
              Website:
            </Label>
            <Input type='text' name='website' id={`website-${type}`} placeholder='Website' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`contact-number-${type}`}>
              Contact Number:
            </Label>
            <Input type='number' name='contactNumber' id={`contact-number-${type}`} placeholder='Contact Number' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`linkedin-profile-${type}`}>
              Linkedin Profile:
            </Label>
            <Input type='text' name='linkedinProfile' id={`linkedin-profile-${type}`} placeholder='Linkedin Profile' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`facebook-link-${type}`}>
              Facebook Link:
            </Label>
            <Input type='text' name='facebookLink' id={`facebook-link-${type}`} placeholder='Facebook Link' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`instagram-link-${type}`}>
              Instagram Link:
            </Label>
            <Input type='text' name='instagramLink' id={`instagram-link-${type}`} placeholder='Instagram Link' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
          <Label>About company & products</Label>
          <Input type='textarea' name='aboutCompanyProducts' id='about-company-products' rows='3' placeholder='About company & products' />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
          <Label>Choose Product Attributes</Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[colorOptions[4], colorOptions[5]]}
              isMulti
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className="waves-effect mr-75 btn btn-primary btn-sm">
              Company Logo
              <Input hidden="" accept="image/*" type="file" className="form-control-file mt-1" />
              </Label>
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
