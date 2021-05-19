import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const RDStatsCard = ({ cols }) => {
  const data = [
    {
      title: '549',
      subtitle: "My RD's",
      color: 'light-primary',
      icon: <TrendingUp size={31} />
    },
    {
      title: '3209',
      subtitle: "My Partnerships",
      color: 'light-info',
      icon: <User size={31} />
    },
    {
      title: '1,423',
      subtitle: 'Samples Shared',
      color: 'light-danger',
      icon: <Box size={31} />
    },
    {
      title: '230k',
      subtitle: 'Consumer Reach',
      color: 'light-success',
      icon: <DollarSign size={31} />
    },
    {
      title: '$9,745',
      subtitle: 'Total Spending',
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
            <Media className='my-auto statistics-sub-text' body>
              <h4 className='font-weight-bolder mb-0' style={{fontSize:'28px'}}>{item.title}</h4>
              <CardText className='total-partnership my-rds'>{item.subtitle}</CardText>
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
      <CardBody className='statistics-body stat-brands'>
      <h4 className="statisticts-text">Statisticts</h4>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default RDStatsCard
