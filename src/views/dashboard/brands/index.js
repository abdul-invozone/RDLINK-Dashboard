import { ThemeColors } from '@src/utility/context/ThemeColors'
import InvoiceListMyPartnerships from '@src/views/apps/invoice/list/indexMyPartnerships'
import InvoiceListNewRds from '@src/views/apps/invoice/list/indexNewRds'
import InvoiceListRecommendedRdOppo from '@src/views/apps/invoice/list/indexRecommendedRdOppo'
import InvoiceListRecommendedRds from '@src/views/apps/invoice/list/indexRecommendedRds'
import ApexRadiarChart2 from '@src/views/charts/apex/ApexDonutChart2'
import AdminRdSlides from '@src/views/extensions/swiper/AdminRdSlides'
import BarChartExpense from '@src/views/charts/recharts/BarChartExpense'
import RevenueReport2 from '@src/views/ui-elements/cards/analytics/RevenueReport2'
import RDStatsCard from '@src/views/ui-elements/cards/statistics/RDStatsCard'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/charts/recharts.scss'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/swiper/swiper.scss'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap'
import SwiperCore, {
  Autoplay, EffectCoverflow, EffectCube, EffectFade,
  Lazy, Navigation,
  Pagination,
  Virtual
} from 'swiper'
SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])


const BrandsDashboard = () => {
  const { colors } = useContext(ThemeColors)

  return (
    <div id='dashboard-brands'>
      <Row className="mx-0 align-items-center my-2">
        <Col sm="6" className="text-center-sm">
          <span className="Milling">Manitoba Milling Dashboard</span>
        </Col>
        <Col sm="6">
        <Breadcrumb className='breadcrumb-slash d-flex justify-content-sm-end justify-content-center'>
        <BreadcrumbItem>
          <Link to='#' className="breadcrumb-home"> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span className="breadcrumb-home"> Brands Dashboard </span>
        </BreadcrumbItem>
      </Breadcrumb>
        </Col>
      </Row>
      <Row className='match-height allRD mb-2'>
        <Col lg='4' sm='6'>
        <ApexRadiarChart2 />
        </Col>
        <Col lg='8' sm='6'>
        <InvoiceListNewRds />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12' className="mb-2">
          <RDStatsCard cols={{ xl: '3', sm: '4', md: '4' }} />
        </Col>
        <Col lg='9' md='12'>
        <BarChartExpense primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
        <Col lg='3' md='12'>
          <RevenueReport2 primary='#7468f1' warning={colors.warning.main} />
        </Col>
      </Row>
      <Row className='match-height mb-2'>
        <Col xs='12'>
          {/* <InvoiceListRecommendedRds /> */}
          <AdminRdSlides />
        </Col>
      </Row>
      {/* <Row className='match-height'>
        <Col xs='12'>
          <InvoiceListRecommendedRdOppo />
        </Col>
      </Row> */}
      <Row className='match-height mb-2'>
        <Col xs='12'>
          <InvoiceListMyPartnerships />
        </Col>
      </Row>
    </div>
  )
}

export default BrandsDashboard
