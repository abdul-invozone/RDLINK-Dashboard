import { useContext } from 'react'
import InvoiceList from '@src/views/apps/invoice/list'
import InvoiceListRecommendedRds from '@src/views/apps/invoice/list/indexRecommendedRds'
import InvoiceListRecommendedRdOppo from '@src/views/apps/invoice/list/indexRecommendedRdOppo'
import InvoiceListMyPartnerships from '@src/views/apps/invoice/list/indexMyPartnerships'
import InvoiceListNewRds from '@src/views/apps/invoice/list/indexNewRds'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import RDStatsCard from '@src/views/ui-elements/cards/statistics/RDStatsCard'
import ChartjsDoughnutChart from '@src/views/charts/chart-js/ChartjsDoughnutChart'
import ChartjsDoughnutChart2 from '@src/views/charts/chart-js/ChartjsDoughnutChart2'
import SubConversion from '@src/views/charts/chart-js/SubConversion'
import NewRds from '@src/views/charts/chart-js/NewRds'
import AreaChart from '@src/views/charts/recharts/AreaChart'
import BarChartExpense from '@src/views/charts/recharts/BarChartExpense'
import BarChart from '@src/views/charts/recharts/BarChart'
import ApexRadiarChart2 from '@src/views/charts/apex/ApexDonutChart2'
import RevenueReport2 from '@src/views/ui-elements/cards/analytics/RevenueReport2'
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
        <ApexRadiarChart2 />
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
        <Col xl='12' md='12' xs='12' className="mb-2">
          <RDStatsCard cols={{ xl: '', sm: '6', md: '4' }} />
        </Col>
        <Col lg='9' md='12'>
        <BarChartExpense primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
        <Col lg='3' md='12'>
          <RevenueReport2 primary='#7468f1' warning={colors.warning.main} />
        </Col>
      </Row>
      )
    },
    {
      title: 'Recommended For You',
      content: (
        <>
        <Row className='match-height mb-2'>
        <Col xs='12'>
          <InvoiceListRecommendedRds />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xs='12'>
          <InvoiceListRecommendedRdOppo />
        </Col>
      </Row>
      </>
      )
    },
    {
      title: 'My Partnerships',
      content: (
        <Row className='match-height mb-2'>
        <Col xs='12'>
          <InvoiceListMyPartnerships />
        </Col>
      </Row>
      )
    }
  ]
  const CollapseDefault = () => <AppCollapse data={data} />

  return (
    <div id='dashboard-brands'>
      <Row className="mx-0 align-items-center">
        <Col sm="6">
          <span className="Milling">Manitoba Milling Dashboard</span>
        </Col>
        <Col sm="6">
        <Breadcrumb className='breadcrumb-slash d-flex justify-content-end '>
        <BreadcrumbItem>
          <Link to='#' className="breadcrumb-home"> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span className="breadcrumb-home"> Brands Dashboard </span>
        </BreadcrumbItem>
      </Breadcrumb>
        </Col>
      </Row>
      <div><CollapseDefault></CollapseDefault></div>
    </div>
  )
}

export default BrandsDashboard
