import Avatar from '@components/avatar'
import classnames from 'classnames'
import { Box, DollarSign, TrendingUp, User } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Col, DropdownItem, DropdownMenu, DropdownToggle, Media, Row, UncontrolledButtonDropdown } from 'reactstrap'

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: '4239',
      subtitle: 'All Brands',
      subtitleHover: 'paid vs. free',
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
      title: '5409',
      subtitle: "Open Brand Campaigns",
      color: 'light-info',
      icon: <User size={31} />
    },
    {
      title: '5409',
      subtitle: "Available RD Opportunities",
      color: 'light-info',
      icon: <User size={31} />
    },
    {
      title: '4239',
      subtitle: 'Partnerships Secured',
      subtitleHover: 'total vs monthly vs quarterly',
      color: 'light-primary',
      icon: <TrendingUp size={31} />
    },
    {
      title: '4239',
      subtitle: 'Unique Monthly Logins',
      color: 'light-primary',
      icon: <TrendingUp size={31} />
    },
    {
      title: '$9,745',
      subtitle: 'Total Revenue',
      subtitleHover: 'Subscription and Comission',
      color: 'light-success',
      icon: <DollarSign size={31} />
    },
    {
      title: '1329',
      subtitle: 'Churn',
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
          <Media data-toggle="tooltip" data-placement="top" title={item.subtitleHover}>
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

export default StatsCard
