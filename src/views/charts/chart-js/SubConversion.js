import { Monitor, Tablet, ArrowDown, ArrowUp, ArrowRight, RefreshCw } from 'react-feather'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, CardFooter, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import ChartjsDoughnutChart3 from '@src/views/charts/chart-js/ChartjsDoughnutChart3'

const SubConversion = () => {
  return (
    <>
    <Card>
        <CardHeader>
                <h4>Subscription Conversion Rate</h4>
                    <RefreshCw />
                    <UncontrolledButtonDropdown className="statsDropdown" style={{position: 'relative', top: '-5px', left:'0'}}>
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
         <Col lg="6">
         <div className="paid">
                  <div style={{position: 'relative', paddingLeft: '40px'}}>
                  <span className="dot dot-dark" style={{width: '18px', height: '18px', position: 'absolute', top: '3px', left: '0'}}/>
                    <h5>Paid Subscription</h5>
                    <p>75.5% over</p>
                  </div>
                </div>
                <div className="paid">
                  <div>
                    <h5>Free Trail</h5>
                    <p>24.5% over</p>
                  </div>
                </div>
              <div className="previous-period">
                <p>
                  <span>12%</span>
                  <ArrowUp color={'green'} size="12" />
                  <span
                    style={{
                      fontSize: "15.5px",
                      fontWeight: 540,
                      color: "#616166"
                    }}
                  >
                    From previous period
                  </span>
                </p>
              </div>
              <a href="#">
              View More
              <ArrowRight />
            </a>
         </Col>
         <Col lg="6">
         <ChartjsDoughnutChart3 warningLightColor="red" successColorShade="#2cb6d1" />
         </Col>
        </CardBody>
    </Card>
    </>
  )
}

export default SubConversion
