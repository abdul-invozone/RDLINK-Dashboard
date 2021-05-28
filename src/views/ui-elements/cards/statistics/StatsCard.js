import Avatar from '@components/avatar'
import classnames from 'classnames'
import { Box, DollarSign, TrendingUp, User, MoreHorizontal } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Col, DropdownItem, DropdownMenu, DropdownToggle, Media, Row, UncontrolledButtonDropdown, UncontrolledTooltip } from 'reactstrap'

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: '4239',
      id: 970,
      subtitle: 'All Brands',
      subtitleHover: 'paid vs. free',
      color: 'light-primary',
      icon: <TrendingUp size={31} />
    },
    {
      title: '5409',
      id: 971,
      subtitle: "All RD's",
      color: 'light-info',
      icon: <User size={31} />
    },
    {
      title: '5409',
      id: 972,
      subtitle: "Open Brand Campaigns",
      color: 'light-info',
      icon: <User size={31} />
    },
    {
      title: '5409',
      id: 973,
      subtitle: "Available RD Opportunities",
      color: 'light-info',
      icon: <User size={31} />
    },
    {
      title: '4239',
      id: 974,
      subtitle: 'Partnerships Secured',
      subtitleHover: 'total vs monthly vs quarterly',
      color: 'light-primary',
      icon: <TrendingUp size={31} />
    },
    {
      title: '4239',
      id: 975,
      subtitle: 'Unique Monthly Logins',
      color: 'light-primary',
      icon: <TrendingUp size={31} />
    },
    {
      title: '$9,745',
      id: 976,
      subtitle: 'Total Revenue',
      subtitleHover: 'Subscription and Comission',
      color: 'light-success',
      icon: <DollarSign size={31} />
    },
    {
      title: '29',
      id: 977,
      subtitle: 'Brands Churned',
      color: 'light-danger',
      icon: <Box size={31} />
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
