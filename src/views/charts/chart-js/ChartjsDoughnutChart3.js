import { Doughnut } from 'react-chartjs-2'
import { Monitor, Tablet, ArrowDown, ArrowUp } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from 'reactstrap'
import React, { useState } from 'react'
// import PillsJustified from '@src/views/components/tabPills/PillsJustified'

const ChartjsRadarChart3 = ({ tooltipShadow, successColorShade, warningLightColor, primary }) => {

  const [active, setActive] = useState(null)

  const handleClick = () => {
    console.log('clicked')
  }
  
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      cutoutPercentage: 65,
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
          labels: ['Subscription', 'FreeTrial'],
          data: [75, 25],
          backgroundColor: [successColorShade, warningLightColor],
          borderWidth: 0,
          pointStyle: 'rectRounded'
        }
      ]
    }

  return ( 
        <div style={{ height: '200px', position: 'relative' }}>
          <Doughnut data={data} options={options} height={200} />
        </div>
  )
}

export default ChartjsRadarChart3
