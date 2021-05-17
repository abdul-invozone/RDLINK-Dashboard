import { Monitor, Tablet, ArrowDown, ArrowUp, ArrowRight, RefreshCw } from 'react-feather'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, CardFooter, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import ChartjsDoughnutChart4 from '@src/views/charts/chart-js/ChartjsDoughnutChart4'

const NewRds = () => {
  return (
    <>
    <Card className="subconcard">
        <CardHeader style={{borderBottom: 'none', padding: '2rem', marginBottom: '5px'}}>
                <h4 className="subconcardtitle subconcardtitle-gray">New RDs</h4>
        </CardHeader>
        <CardBody>       
         <ChartjsDoughnutChart4 colorHealthcare="#ffe600" colorWellness="#02d4be" colorWomen="#828594" colorPeds="#ffa1a1" />
         <div className="d-flex flex-row flex-wrap justify-content-between mt-3 mb-1 mx-2">
            <div className="d-flex align-items-center">
              <span className="dot" style={{backgroundColor : '#ffe600'}}></span>
              <span className="font-weight-bold ml-75 mr-25">Healthcare</span>
              </div>
              <div className="d-flex align-items-center">
              <span className="dot" style={{backgroundColor : '#02d4be'}}></span>
              <span className="font-weight-bold ml-75 mr-25">Wellness</span>
              </div>
              <div className="d-flex align-items-center">
              <span className="dot" style={{backgroundColor : '#828594'}}></span>
              <span className="font-weight-bold ml-75 mr-25">Women</span>
              </div>
              <div className="d-flex align-items-center">
              <span className="dot" style={{backgroundColor : '#ffa1a1'}}></span>
              <span className="font-weight-bold ml-75 mr-25">Peds</span>
              </div>
              </div>
        </CardBody>
    </Card>
    </>
  )
}

export default NewRds
