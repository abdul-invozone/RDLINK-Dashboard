import { useContext } from 'react'
import InvoiceList from '@src/views/apps/invoice/list'
import InvoiceList2 from '@src/views/apps/invoice/list/index2'
import InvoiceListNewRds from '@src/views/apps/invoice/list/indexNewRds'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import RDStatsCard from '@src/views/ui-elements/cards/statistics/RDStatsCard'
import ChartjsDoughnutChart from '@src/views/charts/chart-js/ChartjsDoughnutChart'
import ChartjsDoughnutChart2 from '@src/views/charts/chart-js/ChartjsDoughnutChart2'
import SubConversion from '@src/views/charts/chart-js/SubConversion'
import NewRds from '@src/views/charts/chart-js/NewRds'
import AreaChart from '@src/views/charts/recharts/AreaChart'
import BarChart from '@src/views/charts/recharts/BarChart'
import { Row, Col, Card, CardHeader, CardTitle, CardText, CardBody, Media, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import AppCollapse from '@components/app-collapse'
import { Link } from 'react-router-dom'

import '@styles/react/libs/charts/apex-charts.scss'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/charts/recharts.scss'

const BrandsDashboard = () => {
  const { colors } = useContext(ThemeColors)

  const data = [
    {
      title: 'New & Upcoming',
      content: (
        <Row className='match-height allRD'>
        <Col lg='4' sm='6'>
        <NewRds />
        </Col>
        <Col lg='8' sm='6'>
        <InvoiceListNewRds />
        </Col>
      </Row>
      )
    },
    {
      title: 'My Statisticts',
      content: (
        <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <RDStatsCard cols={{ xl: '', sm: '6' }} />
        </Col>
      </Row>
      )
    }
  ]
  const CollapseDefault = () => <AppCollapse data={data} />

  return (
    <div id='dashboard-brands'>
      <Row className="mx-0 mb-2 align-items-center">
        <Col sm="6">
          <span>Manitoba Milling Dashboard</span>
        </Col>
        <Col sm="6">
        <Breadcrumb className='breadcrumb-slash d-flex justify-content-end'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Brands Dashboard </span>
        </BreadcrumbItem>
      </Breadcrumb>
        </Col>
      </Row>
      <div><CollapseDefault></CollapseDefault></div>
       
      {/* <Row className='match-height'>
        <Col lg='3' sm='6'>
        <Revenue />
        </Col>
        <Col lg='3' sm='6'>
        <SessionByDevice />
        </Col>
        <Col lg='6' sm='12'>
        <Customers />
        </Col>
      </Row> */}
      <Row className='match-height allRD'>
        <Col lg='3' sm='6'>
        <ChartjsDoughnutChart2 primary="#213f90" warningLightColor="red" successColorShade="#2cb6d1" />
        </Col>
        <Col lg='3' sm='6'>
          {/* <OrdersReceived kFormatter={kFormatter} warning={colors.warning.main} /> */}
          <ChartjsDoughnutChart primary="#213f90" warningLightColor="red" successColorShade="#2cb6d1" />
        </Col>
        <Col lg='6' sm='12'>
        <AreaChart primary={colors.primary.main} />
        {/* <AvgSessions primary={colors.primary.main} /> */}
        </Col>
      </Row>
      <Row className='match-height'>
      <Col lg='4' md='4' xs='12'>
          <SubConversion />
        </Col>
        <Col lg='8' xs='12'>
          <BarChart primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xs='12'>
          <InvoiceList />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xs='12'>
          <InvoiceList2 />
        </Col>
      </Row>
    </div>
  )
}

export default BrandsDashboard
