import Avatar from '@components/avatar'
import { Calendar, MapPin } from 'react-feather'
import AvatarGroup from '@components/avatar-group'
import { Row, Col, Card, CardTitle, CardBody, CardText, Media, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import illustration from '@src/assets/images/illustration/email.svg'

const BrandsMeetup2 = () => {

  return (
    <Card className="py-2 px-1">
      <UncontrolledButtonDropdown className="col-md-2 px-0">
        <DropdownToggle color='flat-primary text-left' caret>
          Events Subscribed
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
          <DropdownItem href='/' tag='a'>Option 2</DropdownItem>
          <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    <Row className="match-height">
      <Col>
      <div className='card-developer-meetup' style={{borderRight: '1px solid #c7c5ce'}}>
      <CardBody>
        <div className='meetup-header d-flex align-items-center'>
          <div className='meetup-day'>
            <h6 className='mb-0'>THU</h6>
            <h3 className='mb-0'>24</h3>
          </div>
          <div className='my-auto'>
            <h4 className='mb-25 monthly-meetup'>
              Monthly Meetup of Nutrionists
            </h4>
            <CardText className='mb-0'>Lorem Ipsum dolor sit amet, consectutr adipcing elit, sed do eiusmod tempor</CardText>
          </div>
        </div>
        <Media className='mt-2'>
          <Avatar color='light-primary' className='rounded mr-1' icon={<Calendar size={18} />} />
          <Media body>
            <h6 className='mb-0'>400k</h6>
            <small>Investment Required</small>
          </Media>
        </Media>
        <Media className='mt-2'>
          <Avatar color='light-primary' className='rounded mr-1' icon={<MapPin size={18} />} />
          <Media body>
            <h6 className='mb-0'>200k</h6>
            <small>Customer Reach</small>
          </Media>
        </Media>
        <Media>
          <Avatar color='light-primary' className='rounded mr-1' icon={<Calendar size={18} />} />
          <Media body>
            <h6 className='mb-0'>Sat, May 25, 2020</h6>
            <small>10:AM to 6:PM</small>
          </Media>
        </Media>
        <Media className='mt-2'>
          <Avatar color='light-primary' className='rounded mr-1' icon={<MapPin size={18} />} />
          <Media body>
            <h6 className='mb-0'>Central Park</h6>
            <small>Manhattan, New york City</small>
          </Media>
        </Media>
      </CardBody>
    </div>
      </Col>
      <Col>
      <div className='card-developer-meetup' style={{borderRight: '1px solid #c7c5ce'}}>
      <CardBody>
        <div className='meetup-header d-flex align-items-center'>
          <div className='meetup-day'>
            <h6 className='mb-0'>THU</h6>
            <h3 className='mb-0'>24</h3>
          </div>
          <div className='my-auto'>
            <h4 className='mb-25 monthly-meetup'>
              Monthly Meetup of Nutrionists
            </h4>
            <CardText className='mb-0'>Lorem Ipsum dolor sit amet, consectutr adipcing elit, sed do eiusmod tempor</CardText>
          </div>
        </div>
        <Media className='mt-2'>
          <Avatar color='light-primary' className='rounded mr-1' icon={<Calendar size={18} />} />
          <Media body>
            <h6 className='mb-0'>400k</h6>
            <small>Investment Required</small>
          </Media>
        </Media>
        <Media className='mt-2'>
          <Avatar color='light-primary' className='rounded mr-1' icon={<MapPin size={18} />} />
          <Media body>
            <h6 className='mb-0'>200k</h6>
            <small>Customer Reach</small>
          </Media>
        </Media>
        <Media>
          <Avatar color='light-primary' className='rounded mr-1' icon={<Calendar size={18} />} />
          <Media body>
            <h6 className='mb-0'>Sat, May 25, 2020</h6>
            <small>10:AM to 6:PM</small>
          </Media>
        </Media>
        <Media className='mt-2'>
          <Avatar color='light-primary' className='rounded mr-1' icon={<MapPin size={18} />} />
          <Media body>
            <h6 className='mb-0'>Central Park</h6>
            <small>Manhattan, New york City</small>
          </Media>
        </Media>
      </CardBody>
    </div>
      </Col>
      <Col>
      <div className='card-developer-meetup'>
      <CardBody>
        <div className='meetup-header d-flex align-items-center'>
          <div className='meetup-day'>
            <h6 className='mb-0'>THU</h6>
            <h3 className='mb-0'>24</h3>
          </div>
          <div className='my-auto'>
            <h4 className='mb-25 monthly-meetup'>
              Monthly Meetup of Nutrionists
            </h4>
            <CardText className='mb-0'>Lorem Ipsum dolor sit amet, consectutr adipcing elit, sed do eiusmod tempor</CardText>
          </div>
        </div>
        <Media className='mt-2'>
          <Avatar color='light-primary' className='rounded mr-1' icon={<Calendar size={18} />} />
          <Media body>
            <h6 className='mb-0'>400k</h6>
            <small>Investment Required</small>
          </Media>
        </Media>
        <Media className='mt-2'>
          <Avatar color='light-primary' className='rounded mr-1' icon={<MapPin size={18} />} />
          <Media body>
            <h6 className='mb-0'>200k</h6>
            <small>Customer Reach</small>
          </Media>
        </Media>
        <Media>
          <Avatar color='light-primary' className='rounded mr-1' icon={<Calendar size={18} />} />
          <Media body>
            <h6 className='mb-0'>Sat, May 25, 2020</h6>
            <small>10:AM to 6:PM</small>
          </Media>
        </Media>
        <Media className='mt-2'>
          <Avatar color='light-primary' className='rounded mr-1' icon={<MapPin size={18} />} />
          <Media body>
            <h6 className='mb-0'>Central Park</h6>
            <small>Manhattan, New york City</small>
          </Media>
        </Media>
      </CardBody>
    </div>
      </Col>
    </Row>
    </Card>
  )
}

export default BrandsMeetup2
