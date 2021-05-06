import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: '4239',
      subtitle: 'All Brands',
      color: 'light-primary',
      icon: <TrendingUp size={31} />
    },
    {
      title: '5409',
      subtitle: "All RD's",
      color: 'light-info',
      icon: <User size={31} />
    },
    {
      title: '1329',
      subtitle: 'Total Partnerships',
      color: 'light-danger',
      icon: <Box size={31} />
    },
    {
      title: '$9,745',
      subtitle: 'Total Revenue',
      color: 'light-success',
      icon: <DollarSign size={31} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <UncontrolledButtonDropdown className="statsDropdown">
        <DropdownToggle color='flat-primary' className="dropdown-button">
          ...
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 3
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-1' />
            <Media className='media-avatar m-auto' body>
              <h4 className='font-weight-bolder mb-0' style={{fontSize:'26px'}}>{item.title}</h4>
              <CardText className='total-partnership'>{item.subtitle}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      {/* <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
        <CardText className='card-text font-small-2 mr-25 mb-0'>Updated 1 month ago</CardText>
      </CardHeader> */}
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
