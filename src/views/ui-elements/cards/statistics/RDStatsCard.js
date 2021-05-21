import Avatar from '@components/avatar'
import classnames from 'classnames'
import { Box, DollarSign, TrendingUp, User } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Col, DropdownItem, DropdownMenu, DropdownToggle, Media, Row, UncontrolledButtonDropdown } from 'reactstrap'


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
      subtitle: 'Consumer Impact',
      subtitleHover: 'Estimated Consumer Impressions',
      color: 'light-info',
      icon: <User size={31} />
    },
    {
      title: '3209',
      subtitle: 'My Partnerships',
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
      title: '1,423',
      subtitle: 'Total Investment',
      color: 'light-danger',
      icon: <Box size={31} />
    },
    {
      title: '230k',
      subtitle: 'Cost per Impression',
      color: 'light-success',
      icon: <DollarSign size={31} />
    },
    {
      title: '$9,745',
      subtitle: 'Remaining Budget',
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
            [`mb-3`]: index !== data.length - 1
          })} 
        >
          <Media data-toggle="tooltip" data-placement="top" title={item.subtitleHover}>
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
      <CardHeader>
        <CardTitle style={{paddingLeft: 'auto'}}><h4 className="subconcardtitle subconcardtitle-gray">Statistics</h4></CardTitle>
        <CardText className='card-text font-small-2 mr-25 mb-0'>
        <UncontrolledButtonDropdown className="statsDropdownBrands">
        <DropdownToggle color='flat-primary' className="dropdown-button">
          ...
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>
            Month
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Quarter
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Year
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
        </CardText>
      </CardHeader>
      <CardBody className='statistics-body stat-brands'>
      {/* <h4 className="statisticts-text">Statisticts</h4> */}
        <Row className="mx-1">{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default RDStatsCard
