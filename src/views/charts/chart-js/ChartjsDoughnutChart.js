import { Doughnut } from 'react-chartjs-2'
import { Monitor, Tablet, ArrowDown, ArrowUp } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from 'reactstrap'
import React, { useState } from 'react'
// import PillsJustified from '@src/views/components/tabPills/PillsJustified'

const ChartjsRadarChart = ({ tooltipShadow, successColorShade, warningLightColor, primary }) => {

  const [active, setActive] = useState(null)

  const handleClick = () => {
    console.log('clicked')
  }
  
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      cutoutPercentage: 85,
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
          borderWidth: 0,
          pointStyle: 'rectRounded'
        }
      ]
    }

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle tag='h4'>All RD's</CardTitle>
        <div className="allRdTopLinks">
          <ul className="p-0 m-0">
            <li className="d-inline-block"><a className="active" href="#">Week</a></li>
            <li className="d-inline-block"><a href="#">Month</a></li>
            <li className="d-inline-block"><a href="#">Year</a></li>
          </ul>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: '200px', position: 'relative' }}>
        <div className="totalRD"><p>6521</p><span>Total RD's</span></div>
          <Doughnut data={data} options={options} height={200} />
        </div>
        <div className='d-inline-flex justify-content-between mt-3 mb-1 mr-2'>
          <div className='d-flex align-items-center'>
          <span class="dot dot-dark"></span>
            <span className='font-weight-bold ml-75 mr-25'>Speciality</span>
          </div>
        </div>
        <div className='d-inline-flex justify-content-between mb-1 mr-2'>
          <div className='d-flex align-items-center'>
          <span class="dot dot-red"></span>
            <span className='font-weight-bold ml-75 mr-25'>Industry</span>
          </div>
        </div>
        <div className='d-inline-flex justify-content-between'>
          <div className='d-flex align-items-center'>
          <span class="dot dot-green"></span>
            <span className='font-weight-bold ml-75 mr-25'>Region</span>
          </div>
        </div>
      </CardBody>
      <CardFooter className="allRdBtnPanels">
        <a href="#" className="btn btn-active">RD's</a>
        <a href="#" className="btn">RD2Be</a>
      </CardFooter>
    </Card>
  )
}

export default ChartjsRadarChart
