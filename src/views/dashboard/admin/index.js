import Avatar from '@components/avatar'
import AvatarGroup from '@components/avatar-group'
import jsonImg from '@src/assets/images/icons/json.png'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import InvoiceList from '@src/views/apps/invoice/list'
import InvoiceListManageBrands from '@src/views/apps/invoice/list/indexManageBrands'
import ChartjsDoughnutChart from '@src/views/charts/chart-js/ChartjsDoughnutChart'
import ChartjsDoughnutChart2 from '@src/views/charts/chart-js/ChartjsDoughnutChart2'
import SubConversion from '@src/views/charts/chart-js/SubConversion'
import AreaChart from '@src/views/charts/recharts/AreaChart'
import BarChart from '@src/views/charts/recharts/BarChart'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/charts/recharts.scss'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Col, Media, Row } from 'reactstrap'

const AnalyticsDashboard = () => {
  const { colors } = useContext(ThemeColors)

  const avatarGroupArr = [
      {
        title: 'Billy Hopkins',
        img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Amy Carson',
        img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Brandon Miles',
        img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Daisy Weber',
        img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Jenny Looper',
        img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      }
    ],
    data = [
      {
        title: '12 Invoices have been paid',
        content: 'Invoices have been paid to the company.',
        meta: '',
        metaClassName: 'mr-1',
        customContent: (
          <Media>
            <img className='mr-1' src={jsonImg} alt='data.json' height='23' />
            <Media className='mb-0' body>
              data.json
            </Media>
          </Media>
        )
      },
      {
        title: 'Client Meeting',
        content: 'Project meeting with john @10:15am.',
        meta: '',
        metaClassName: 'mr-1',
        color: 'warning',
        customContent: (
          <Media className='align-items-center'>
            <Avatar img={ceo} />
            <Media className='ml-50' body>
              <h6 className='mb-0'>John Doe (Client)</h6>
              <span>CEO of Infibeam</span>
            </Media>
          </Media>
        )
      },
      {
        title: 'Create a new project for client',
        content: 'Add files to new design folder',
        color: 'info',
        meta: '',
        metaClassName: 'mr-1',
        customContent: <AvatarGroup data={avatarGroupArr} />
      },
      {
        title: 'Create a new project for client',
        content: 'Add files to new design folder',
        color: 'danger',
        meta: '',
        metaClassName: 'mr-1'
      }
    ]

  return (
    <div id='dashboard-analytics'>
      <Row className="mx-0 mb-2 align-items-center">
        <Col sm="6" className="justify-content-sm-end justify-content-center text-center-sm">
          <span className="admin-dashboard">Admin Dashboard</span>
        </Col>
        <Col sm="6">
        <Breadcrumb className='breadcrumb-slash d-flex justify-content-sm-end justify-content-center'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span style={{color:'#7467f1'}}> Admin Dashboard </span>
        </BreadcrumbItem>
      </Breadcrumb>
        </Col>
      </Row>
       
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '4', md: '4' }} />
        </Col>
      </Row>
      <Row className='match-height allRD'>
        {/* <Col lg='3' sm='6'>
        <ChartjsDoughnutChart2 primary="#213f90" warningLightColor="red" successColorShade="#2cb6d1" />
        </Col> */}
        <Col lg='3' sm='6'>
          <ChartjsDoughnutChart primary="#213f90" warningLightColor="red" successColorShade="#2cb6d1" />
        </Col>
        <Col lg='9' sm='6'>
        {/* <AreaChart primary={colors.primary.main} /> */}
        <BarChart primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
      </Row>
      {/* <Row className='match-height'>
      <Col lg='4' md='4' xs='12'>
          <SubConversion />
        </Col>
        <Col lg='8' xs='12'>
          <BarChart primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
      </Row> */}
      <Row className='match-height'>
        <Col xs='12'>
          <InvoiceList />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xs='12'>
          <InvoiceListManageBrands />
        </Col>
      </Row>
    </div>
  )
}

export default AnalyticsDashboard
