import Avatar from '@components/avatar'
import classnames from 'classnames'
import { Box, DollarSign, MoreHorizontal, TrendingUp, User } from 'react-feather'
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
      subtitle: 'Response Rate',
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
            [`mb-1`]: index !== data.length - 1
          })}
        >
          <Media>
            <Avatar id={`av-tooltip-${item.id}`} color={item.color} icon={item.icon} className='mr-1' />
          {item.subtitleHover && <UncontrolledTooltip placement='top' target={`av-tooltip-${item.id}`}>{item.subtitleHover}</UncontrolledTooltip>}
            <Media className='media-avatar m-auto' body>
              <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
              <h6 className='total-partnership'>{item.subtitle}</h6>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
        <UncontrolledButtonDropdown>
        <DropdownToggle color='flat-primary' size="sm" className="dropdown-button">
          <MoreHorizontal />
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
      </CardHeader>
      {/* <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
        <CardText className='card-text font-small-2 mr-25 mb-0'>Updated 1 month ago</CardText>
      </CardHeader> */}
      <CardBody>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default DietationStatsCard
