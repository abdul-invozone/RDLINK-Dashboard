import Avatar from '@components/avatar'
import classnames from 'classnames'
import { Box, DollarSign, TrendingUp, User } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Col, DropdownItem, DropdownMenu, DropdownToggle, Media, Row, UncontrolledButtonDropdown, UncontrolledTooltip } from 'reactstrap'

const DietationStatsCard = ({ cols }) => {
  const data = [
    {
      title: '3,209',
      id: 985,
      subtitle: "My Partnerships",
      subtitleHover: "Partnerships",
      color: 'light-primary',
      icon: <TrendingUp size={21} />
    },
    {
      title: '549',
      id: 986,
      subtitle: "My Brand Partners",
      subtitleHover: "Partners",
      color: 'light-info',
      icon: <User size={21} />
    },
    {
      title: '$9,745',
      id: 987,
      subtitle: 'Total Revenue',
      color: 'light-danger',
      icon: <Box size={21} />
    },
    {
      title: '230k',
      id: 988,
      subtitle: 'Consumer Impact',
      color: 'light-success',
      icon: <DollarSign size={21} />
    },
    {
      title: '78%',
      id: 989,
      subtitle: 'Response Date',
      color: 'light-success',
      icon: <DollarSign size={21} />
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

export default DietationStatsCard
