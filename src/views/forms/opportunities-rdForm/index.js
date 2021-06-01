import Select, { components } from 'react-select'
import { Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, FormGroup, Label, CustomInput, Input, Form } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

// ** Utils
import { selectThemeColors, isObjEmpty } from '@utils'
import CardTitle from 'reactstrap/lib/CardTitle'

// ** Styles Imports
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const oppoForm = () => {
  // ** Select Options
  const options = [
    { value: 'Business', label: 'Business', color: 'primary' },
    { value: 'Personal', label: 'Personal', color: 'danger' },
    { value: 'Family', label: 'Family', color: 'warning' },
    { value: 'Holiday', label: 'Holiday', color: 'success' },
    { value: 'ETC', label: 'ETC', color: 'info' }
  ]

  const guestsOptions = [
    { value: 'Donna Frank', label: 'Donna Frank'},
    { value: 'Jane Foster', label: 'Jane Foster'},
    { value: 'Gabrielle Robertson', label: 'Gabrielle Robertson'},
    { value: 'Lori Spears', label: 'Lori Spears'},
    { value: 'Sandy Vega', label: 'Sandy Vega'},
    { value: 'Cheryl May', label: 'Cheryl May'}
  ]

  const countryOptions = [
    { value: 'Canada', label: 'Canada' },
    { value: 'USA', label: 'USA' },
    { value: 'Spain', label: 'Spain' },
    { value: 'United Kingdom', label: 'United Kingdom' }
  ]

  const cityOptions = [
    { value: 'City1', label: 'City1' },
    { value: 'City2', label: 'City2' },
    { value: 'City3', label: 'City3' },
    { value: 'City4', label: 'City4' }
  ]

  const stateOptions = [
    { value: 'State1', label: 'State1' },
    { value: 'State2', label: 'State2' },
    { value: 'State3', label: 'State3' },
    { value: 'State4', label: 'State4' }
  ]

  const attendeesOptions = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' }
  ]

  const eventOptions = [
    { value: 'Event1', label: 'Event1' },
    { value: 'Event2', label: 'Event2' },
    { value: 'Event3', label: 'Event3' },
    { value: 'Event4', label: 'Event4' }
  ]

  const audienceOptions = [
    { value: 'Audience1', label: 'Audience1' },
    { value: 'Audience2', label: 'Audience2' },
    { value: 'Audience4', label: 'Audience4' },
    { value: 'Audience4', label: 'Audience4' }
  ]

  const seekingOptions = [
    { value: 'Free Product Samples', label: 'Free Product Samples' },
    { value: 'Paid Partnership', label: 'Paid Partnership' }
  ]
  return ( 
    <Card>
      <CardHeader><CardTitle>Add Opportunity</CardTitle></CardHeader>
      <CardBody>
      <Form>
    <FormGroup>
      <Label for='title'>
        Title <span className='text-danger'>*</span>
      </Label>
      <Input
        id='title'
        name='title'
        placeholder='Title'
      />
    </FormGroup>

    <FormGroup>
      <Label for='description'>Description</Label>
      <Input
        type='textarea'
        name='text'
        id='description'
        rows='3'
        placeholder='Description'
      />
    </FormGroup>

    <FormGroup>
      <Label for='startDate'>Start Date</Label>
      <Flatpickr
        required
        id='startDate'
        // tag={Flatpickr}
        name='startDate'
        className='form-control'
        options={{
          dateFormat: 'Y-m-d H:i'
        }}
      />
    </FormGroup>

    <FormGroup>
      <Label for='endDate'>End Date</Label>
      <Flatpickr
        required
        id='endDate'
        // tag={Flatpickr}
        name='endDate'
        className='form-control'
        options={{
          dateFormat: 'Y-m-d H:i'
        }}
      />
    </FormGroup>

    <FormGroup>
      <Label for='location'>Location</Label>
      <Input id='location' onChange={e => setLocation(e.target.value)} placeholder='Location' />
    </FormGroup>

    <FormGroup>
      <Label for='zipCode'>Zip Code <span className='text-danger'>*</span></Label>
      <Input id='zipCode' type="number" placeholder='Zip Code' />
    </FormGroup>

    <FormGroup>
      <Label for='city'>City <span className='text-danger'>*</span></Label>
      <Select
        id='city'
        className=''
        classNamePrefix='select'
        isClearable={false}
        options={cityOptions}
        theme={selectThemeColors}
      />
    </FormGroup> 

    <FormGroup>
      <Label for='state'>State <span className='text-danger'>*</span></Label>
      <Select
        id='state'
        className=''
        classNamePrefix='select'
        isClearable={false}
        options={stateOptions}
        theme={selectThemeColors}
      />
    </FormGroup> 
      
    <FormGroup>
      <Label for='location'>Country <span className='text-danger'>*</span></Label>
      <Select
        id='location'
        className=''
        classNamePrefix='select'
        isClearable={false}
        options={countryOptions}
        theme={selectThemeColors}
      />
    </FormGroup>

    <FormGroup>
      <Label for='expectedAttend'>Expected number of attendees(for in-person events)</Label>
      <Select
        id='expectedAttend'
        className=''
        classNamePrefix='select'
        isClearable={false}
        options={attendeesOptions}
        theme={selectThemeColors}
      />
    </FormGroup>  

    <FormGroup>
      <Label for='numberFollowers'>Number of Followers (for social media partnerhips)</Label>
      <Input id='numberFollowers' type="number" placeholder='Number' />
    </FormGroup>

    <FormGroup>
      <Label for='expectedReach'>Expected Reach</Label>
      <Input id='expectedReach' type="number" placeholder='Number' />
    </FormGroup>

    <FormGroup>
      <Label for='typeOfEvent'>Type of event <span className='text-danger'>*</span></Label>
      <Select
        id='typeOfEvent'
        className='react-select'
        classNamePrefix='select'
        isClearable={false}
        options={eventOptions}
        theme={selectThemeColors}
      />
    </FormGroup> 

    <FormGroup>
      <Label for='typeOfAudience'>Type of audience <span className='text-danger'>*</span></Label>
      <Select
        id='typeOfAudience'
        className='react-select'
        classNamePrefix='select'
        isClearable={false}
        options={audienceOptions}
        theme={selectThemeColors}
      />
    </FormGroup> 

        <FormGroup>
    <Label for='seeking'>I am seeking <span className='text-danger'>*</span></Label>
      <Select
        id="seeking"
        isClearable={false}
        theme={selectThemeColors}
        closeMenuOnSelect={false}
        isMulti
        options={seekingOptions}
        className='react-select'
        classNamePrefix='select'
      />
    </FormGroup>

    <FormGroup>
      <Label for='costOfPartnership'>Cost of partnerhip (if paid)</Label>
      <Input id='costOfPartnership' type="number" placeholder='$100' disabled />
    </FormGroup>

    <FormGroup className="my-1">
      <Label>
      Upload Event Documents (additional details or sponsorship prospectus)
        </Label>
        <Input hidden="" accept="image/*" type="file" className="form-control-file mb-2" />
    </FormGroup>

    <FormGroup className='d-flex'>
    <Button.Ripple className='mr-1' type='submit' color='primary'>
            Submit
          </Button.Ripple>
          <Button.Ripple color='secondary' type='reset' outline>
            Cancel
          </Button.Ripple>
    </FormGroup>
  </Form>
      </CardBody>
    </Card>
   )
}
 
export default oppoForm
        