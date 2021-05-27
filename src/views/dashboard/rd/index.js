import { ThemeColors } from '@src/utility/context/ThemeColors'
import InvoiceListRdBrandOppo from '@src/views/apps/invoice/list/indexRdBrandOppo'
import InvoiceListRdBrandPartnerships from '@src/views/apps/invoice/list/indexRdBrandPartnerships'
import InvoiceListRdOppo from '@src/views/apps/invoice/list/indexRdOppo'
import ApexRadiarChartRd from '@src/views/charts/apex/ApexDonutChartRd'
import ChartRdDailySales from '@src/views/charts/apex/ChartRdDailySales'
import ChartRdMyBrands from '@src/views/charts/chart-js/ChartRdMyBrands'
import ChartRdMyPartnership from '@src/views/charts/chart-js/ChartRdMyPartnership'
import RdRecommendedSlides from '@src/views/extensions/swiper/RdRecommendedSlides'
import RdCampaignsSlides from '@src/views/extensions/swiper/RdCampaignsSlides'
import DietatioStatsCard from '@src/views/ui-elements/cards/statistics/DietationStatsCard'
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


const RdDashboard = () => {
  const { colors } = useContext(ThemeColors),
    tooltipShadow = 'rgba(0, 0, 0, 0.25)',
    gridLineColor = 'rgba(200, 200, 200, 0.2)',
    lineChartPrimary = '#f0aa37',
    lineChartDanger = '#566fe7',
    warningColorShade = '#ffe802',
    purpleColor = '#5f00c6',
    purpleLightColor = '#2599f3' 

  return (
    <div id='dashboard-brands'>
      <Row className="mx-0 align-items-center my-2">
        <Col sm="6" className="jenna-gorham text-center-sm">
          <span>Jenna Gorham's Dashboard</span>
        </Col>
        <Col sm="6" className="jenna-gorham">
        <Breadcrumb className='breadcrumb-slash d-flex justify-content-sm-end justify-content-center'>
        <BreadcrumbItem >
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span style={{color: '#7467f1'}}> RD Dashboard </span>
        </BreadcrumbItem>
      </Breadcrumb>
        </Col>
      </Row>
      <Row className='match-height mb-2'>
        <Col lg='12'>
        <div className="card py-5">
          <p className="text-center m-0">Place ads here</p>
        </div>
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12' className="mb-2">
          <DietatioStatsCard cols={{ xl: '3', sm: '4' }} />
        </Col>
        </Row>
        <Row>
        <Col xl='12' md='12' xs='12'>
          <RdRecommendedSlides />
          </Col>
          </Row>
        <Row>
        <Col xl='12' md='12' xs='12'>
          <RdCampaignsSlides />
          </Col>
          </Row>
      <Row className='match-height allRD mb-2'>
        <Col lg='4' sm='6'>
        <ApexRadiarChartRd />
        </Col>
        <Col lg='8' sm='6'>
        <InvoiceListRdOppo />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='6' md='12'>
        <ChartRdMyPartnership 
            warningColorShade={warningColorShade}
            lineChartDanger={lineChartDanger}
            lineChartPrimary={lineChartPrimary}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor} 
        />
        </Col>
        <Col lg='6' md='12'>
        <ChartRdMyBrands 
            warningColorShade={warningColorShade}
            lineChartDanger={purpleColor}
            lineChartPrimary={purpleLightColor}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor} 
        />
        </Col>
        <Col lg='12' md='12' className="mt-2">
        <ChartRdDailySales />
        </Col>
      </Row>
        {/* <Row className='match-height mb-2'>
        <Col xs='12'>
          <InvoiceListRdBrandOppo />
        </Col>
      </Row> */}
      <Row className='match-height mb-2'>
        <Col xs='12'>
          <InvoiceListRdBrandPartnerships />
        </Col>
      </Row>
    </div>
  )
}

export default RdDashboard
