import { Fragment } from 'react'
import Select, { components } from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { selectThemeColors } from '@utils'
import makeAnimated from 'react-select/animated'
import { Label, FormGroup, Row, Col, Form, Input, Button } from 'reactstrap'

import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper, type }) => {
  const valuesOptions = [
    { value: 'SustainablySourcedorProduced', label: 'Sustainably Sourced or Produced' },
    { value: 'SocialMissionDriven', label: 'Social Mission Driven' },
    { value: 'CertifiedBCorp', label: 'Certified BCorp' },
    { value: 'WomenOwned/FemaleFounded', label: 'Women Owned/Female Founded' },
    { value: 'BIPOCOwned', label: 'BIPOC Owned'},
    { value: 'Organic', label: 'Organic'}
  ]
  const specialDietOptions = [
    { value: 'Vegan', label: 'Vegan' },
    { value: 'SLowCarbDiabetesFriendly', label: 'SLow Carb / Diabetes Friendly' },
    { value: 'Lowaddedsugar', label: 'Low added sugar' },
    { value: 'Top9AllergenFriendly', label: 'Top 9 Allergen Friendly'},
    { value: 'GlutenFree', label: 'Gluten Free'},
    { value: 'NutFree', label: 'Nut Free'},
    { value: 'Kosher', label: 'Kosher'},
    { value: 'NonDiet', label: 'Non-Diet!'}
  ]
  const categoryOptions = [
    { value: 'Hydration', label: 'Hydration' },
    { value: 'Snack', label: 'Snack' },
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'SingleIngredientWholeFoods', label: 'Single Ingredient Whole Foods'}
  ]

  const animatedComponents = makeAnimated()

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Company Info</h5>
        <small>Tell us about your company and products.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
        <FormGroup tag={Col} md='12'>
          <Label className="mb-2 font-weight-bolder">Choose Product Attributes:</Label>
          <Row>
          <FormGroup tag={Col} sm="2">
            <Label>Values</Label>
          </FormGroup>
          <FormGroup tag={Col} sm="10">
          <Select
              isClearable={false}
              theme={selectThemeColors}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={valuesOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </FormGroup>
          </Row>
          <Row>
          <FormGroup tag={Col} sm="2">
            <Label>Special Diet</Label>
          </FormGroup>
          <FormGroup tag={Col} sm="10">
          <Select
              isClearable={false}
              theme={selectThemeColors}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={specialDietOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </FormGroup>
          </Row>
          <Row>
          <FormGroup tag={Col} sm="2">
            <Label>Category</Label>
          </FormGroup>
          <FormGroup tag={Col} sm="10">
          <Select
              isClearable={false}
              theme={selectThemeColors}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={categoryOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </FormGroup>
          </Row>
          </FormGroup>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`website-${type}`}>
              Website:
            </Label>
            <Input type='text' name='website' id={`website-${type}`} placeholder='Website' />
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
            <Label>
              Company Logo
              </Label>
              <Input hidden="" accept="image/*" type="file" className="form-control-file mb-1" />
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
