import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const DietationStatsCard = ({ cols }) => {
  const data = [
    {
      title: '3,209',
      subtitle: "My Partnerships",
      color: 'light-primary',
      icon: <TrendingUp size={31} />
    },
    {
      title: '549',
      subtitle: "My Brand Partners",
      color: 'light-info',
      icon: <User size={31} />
    },
    {
      title: '$9,745',
      subtitle: 'Total Revenue',
      color: 'light-danger',
      icon: <Box size={31} />
    },
    {
      title: '230k',
      subtitle: 'Consumer Impact',
      color: 'light-success',
      icon: <DollarSign size={31} />
    },
    {
      title: '78%',
      subtitle: 'Response Date',
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
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder mb-0' style={{fontSize:'30px'}}>{item.title}</h4>
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
      <h4 style={{marginBottom: '4rem', fontSize: '26px'}}>Statisticts</h4>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default DietationStatsCard
