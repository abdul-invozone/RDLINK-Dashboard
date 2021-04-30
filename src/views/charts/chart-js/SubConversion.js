import { Monitor, Tablet, ArrowDown, ArrowUp, ArrowRight, RefreshCw } from 'react-feather'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, CardFooter, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import ChartjsDoughnutChart3 from '@src/views/charts/chart-js/ChartjsDoughnutChart3'

const SubConversion = () => {
  return (
    <>
    <Card className="subconcard">
        <CardHeader>
                <h4 className="subconcardtitle">Subscription Conversion Rate</h4>
                    <RefreshCw  />
                    <UncontrolledButtonDropdown className="statsDropdown" style={{position: 'relative', top: '-5px', left:'0', color:'#020202'}}>
        <DropdownToggle color='flat-primary'>
          ...
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>
            Option 1
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 2
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Option 3
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
        </CardHeader>
        <CardBody className="row">
         <Col lg="6" className="main-column">
         <div className="paid">
                  <div style={{position: 'relative', paddingLeft: '40px'}}>
                  <span className="dot dot-sub" style={{width: '18px', height: '18px', position: 'absolute', top: '3px', left: '0'}}/>
                    <h5>Paid Subscription</h5>
                    <p>75.5% over</p>
                  </div>
                </div>
                <div className="paid">
                  <div style={{position: 'relative', paddingLeft: '40px'}}>
                  <span className="dot dot-trial" style={{width: '18px', height: '18px', position: 'absolute', top: '3px', left: '0'}}/>
                    <h5>Free Trial</h5>
                    <p>24.5% over</p>
                  </div>
                </div>
              <div className="previous-period">
                <p>
                  <span style={{color:'#33cd85'}} >12%</span>
                  <ArrowUp className="arrow-up" size="18" />
                  <span className="previous-period-text"
                  >
                    From previous period
                  </span>
                </p>
              </div>
         </Col>
         <Col lg="6">
         <ChartjsDoughnutChart3 warningLightColor="#5167e1" successColorShade="#34ce86" />
         </Col>
              <a href="#" className="view-more">
              View More
              <ArrowRight className="arrow-right" size="15"/>
            </a>
        </CardBody>
    </Card>
    </>
  )
}

export default SubConversion
