import { Doughnut } from 'react-chartjs-2'
import { Monitor, Tablet, ArrowDown, ArrowUp } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from 'reactstrap'
import React, { useState } from 'react'
// import PillsJustified from '@src/views/components/tabPills/PillsJustified'

const ChartjsRadarChart2 = ({ tooltipShadow, successColorShade, warningLightColor, primary }) => {

  const [isActive, setActive] = useState(true)

  const toggleClass = () => {
    setActive(!isActive)
  }
  
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      cutoutPercentage: 0,
      legend: { display: false },
      tooltips: {
        callbacks: {
          label(tooltipItem, data) {
            const label = data.datasets[0].labels[tooltipItem.index] || '',
              value = data.datasets[0].data[tooltipItem.index]
            const output = ` ${label} : ${value} %`
            return output
          }
        },
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: '#fff',
        titleFontColor: '#000',
        bodyFontColor: '#000'
      }
    },
    data = {
      datasets: [
        {
          labels: ['Speciality', 'Industry', 'Region'],
          data: [10, 20, 60],
          backgroundColor: [successColorShade, warningLightColor, primary],
          borderWidth: 4
        }
      ]
    }

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <p className="subconcardtitle subconcardtitle-gray">All Brands</p>
        <div className="allRdTopLinks">
          <ul className="p-0 m-0">
            <li className="allRdactivelinks"><a href="#" className={isActive ? 'active' : null} onClick={toggleClass}>Week</a></li>
            <li className="allRdactivelinks"><a href="#">Month</a></li>
            <li className="allRdactivelinks"><a href="#">Year</a></li>
          </ul>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: '200px', position: 'relative'}}>
        <div className="totalRD totalRDBrands"><p style={{fontWeight:'600'}}>1773</p><span>Total Brands</span></div>
          <Doughnut data={data} options={options} height={200} />
        </div>
        <div className='d-inline-flex justify-content-between mt-3 mb-1 mx-2'>
          <div className='d-flex align-items-center'>
          <span class="dot dot-dark"></span>
            <span className='font-weight-bold ml-75 mr-25'>Subscribed</span>
          </div>
        </div>
        <div className='d-inline-flex justify-content-between mb-1 mr-2'>
          <div className='d-flex align-items-center'>
          <span class="dot dot-red"></span>
            <span className='font-weight-bold ml-75 mr-25'>New</span>
          </div>
        </div>
        <div className='d-inline-flex justify-content-between'>
          <div className='d-flex align-items-center'>
          <span class="dot dot-green"></span>
            <span className='font-weight-bold ml-75 mr-25'>Trial</span>
          </div>
        </div>
      </CardBody>
      <CardFooter className="allRdBrandsStats">
      <ul className="p-0 m-0">
            <li className="d-inline-block">483<span>45%</span></li>
            <li className="d-inline-block">870<span>25%</span></li>
            <li className="d-inline-block">870<span>13%</span></li>
          </ul>
      </CardFooter>
    </Card>
  )
}

export default ChartjsRadarChart2
