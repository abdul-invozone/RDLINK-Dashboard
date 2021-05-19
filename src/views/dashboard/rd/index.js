import { useContext } from 'react'
import InvoiceList from '@src/views/apps/invoice/list'
import InvoiceListRecommendedRds from '@src/views/apps/invoice/list/indexRecommendedRds'
import InvoiceListRecommendedRdOppo from '@src/views/apps/invoice/list/indexRecommendedRdOppo'
import InvoiceListRdBrandPartnerships from '@src/views/apps/invoice/list/indexRdBrandPartnerships'
import InvoiceListRdOppo from '@src/views/apps/invoice/list/indexRdOppo'
import InvoiceListRdBrandOppo from '@src/views/apps/invoice/list/indexRdBrandOppo'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import DietatioStatsCard from '@src/views/ui-elements/cards/statistics/DietationStatsCard'
import ChartjsDoughnutChart from '@src/views/charts/chart-js/ChartjsDoughnutChart'
import ChartjsDoughnutChart2 from '@src/views/charts/chart-js/ChartjsDoughnutChart2'
import SubConversion from '@src/views/charts/chart-js/SubConversion'
import NewRds from '@src/views/charts/chart-js/NewRds'
import ChartRdMyPartnership from '@src/views/charts/chart-js/ChartRdMyPartnership'
import ChartRdMyBrands from '@src/views/charts/chart-js/ChartRdMyBrands'
import ChartRdDailySales from '@src/views/charts/apex/ChartRdDailySales'
import BarChart from '@src/views/charts/recharts/BarChart'
import ApexRadiarChartRd from '@src/views/charts/apex/ApexDonutChartRd'
import RdBrandsSlides from '@src/views/extensions/swiper/RdBrandsSlides'
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual
} from 'swiper'
import '@styles/react/libs/swiper/swiper.scss'
SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])
import { Row, Col, Card, CardHeader, CardTitle, CardText, CardBody, Media, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import AppCollapse from '@components/app-collapse'
import { Link } from 'react-router-dom'

import '@styles/react/libs/charts/apex-charts.scss'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/charts/recharts.scss'

const RdDashboard = () => {
  const { colors } = useContext(ThemeColors),
    tooltipShadow = 'rgba(0, 0, 0, 0.25)',
    gridLineColor = 'rgba(200, 200, 200, 0.2)',
    lineChartPrimary = '#f0aa37',
    lineChartDanger = '#566fe7',
    warningColorShade = '#ffe802',
    warningLightColor = '#FDAC34',
    successColorShade = '#28dac6',
    primaryColorShade = '#836AF9',
    infoColorShade = '#299AFF',
    yellowColor = '#ffe800',
    greyColor = '#4F5D70',
    blueColor = '#2c9aff',
    blueLightColor = '#84D0FF',
    greyLightColor = '#EDF1F4',
    purpleColor = '#5f00c6',
    purpleLightColor = '#2599f3' 

  return (
    <div id='dashboard-brands'>
      <Row className="mx-0 align-items-center my-2">
        <Col sm="6" className="jenna-gorham">
          <span>Jenna Gorham's Dashboard</span>
        </Col>
        <Col sm="6" className="jenna-gorham">
        <Breadcrumb className='breadcrumb-slash d-flex justify-content-end'>
        <BreadcrumbItem >
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span style={{color: '#7467f1'}}> RD Dashboard </span>
        </BreadcrumbItem>
      </Breadcrumb>
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
        <Col xl='12' md='12' xs='12' className="mb-2">
          <DietatioStatsCard cols={{ xl: '', sm: '6' }} />
        </Col>
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
      <div className="recommended-for-you">
        <h1 className="brands">Brands</h1>
        <h6 className="showing-paid">(Showing Paid Brands Only)</h6>
      </div>
          <RdBrandsSlides />
        <Row className='match-height mb-2'>
        <Col xs='12'>
          <InvoiceListRdBrandOppo />
        </Col>
      </Row>
      <Row className='match-height mb-2'>
        <Col xs='12'>
          <InvoiceListRdBrandPartnerships />
        </Col>
      </Row>
    </div>
  )
}

export default RdDashboard
