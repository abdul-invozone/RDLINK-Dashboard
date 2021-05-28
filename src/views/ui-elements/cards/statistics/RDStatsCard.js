import Avatar from '@components/avatar'
import classnames from 'classnames'
import { Box, DollarSign, TrendingUp, User, MoreHorizontal} from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Col, DropdownItem, DropdownMenu, DropdownToggle, Media, Row, UncontrolledButtonDropdown, UncontrolledTooltip } from 'reactstrap'


const RDStatsCard = ({ cols }) => {
  const data = [
    {
      title: '549',
      id: 978,
      subtitle: "My RD's",
      color: 'light-primary',
      icon: <TrendingUp size={31} />
    },
    {
      title: '3209',
      id: 979,
      subtitle: 'Consumer Impact',
      subtitleHover: 'Estimated Consumer Impressions',
      color: 'light-info',
      icon: <User size={31} />
    },
    {
      title: '3209',
      id: 980,
      subtitle: 'My Partnerships',
      subtitleHover: 'Partnerships',
      color: 'light-info',
      icon: <User size={31} />
    },
    {
      title: '1,423',
      id: 981,
      subtitle: 'Samples Shared',
      color: 'light-danger',
      icon: <Box size={31} />
    },
    {
      title: '1,423',
      id: 982,
      subtitle: 'Total Investment',
      color: 'light-danger',
      icon: <Box size={31} />
    },
    {
      title: '230k',
      id: 983,
      subtitle: 'Cost per Impression',
      color: 'light-success',
      icon: <DollarSign size={31} />
    },
    {
      title: '$9,745',
      id: 984,
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
          <Media>
            <Avatar id={`av-tooltip-${item.id}`} color={item.color} icon={item.icon} className='mr-1' />
          {item.subtitleHover && <UncontrolledTooltip placement='top' target={`av-tooltip-${item.id}`}>{item.subtitleHover}</UncontrolledTooltip>}
            <Media className='media-avatar m-auto' body>
              <h2 className='font-weight-bolder mb-0'>{item.title}</h2>
              <CardText className='total-partnership'>{item.subtitle}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle style={{paddingLeft: 'auto'}}><h2 className="subconcardtitle subconcardtitle-gray">Statistics</h2></CardTitle>
        <CardText className='card-text font-small-2 mr-25 mb-0'>
        <UncontrolledButtonDropdown className="statsDropdownBrands">
        <DropdownToggle color='flat-primary'>
        <MoreHorizontal size={28} />
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
      {/* <h4 className="statisticts-text">Statistics</h4> */}
        <Row className="mx-1">{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default RDStatsCard
