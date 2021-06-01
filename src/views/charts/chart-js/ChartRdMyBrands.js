import { Line } from 'react-chartjs-2'
import { Box, DollarSign, MoreHorizontal, TrendingUp, User } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap'
import {MoreHorizontal} from 'react-feather'

const ChartRdMyBrands = ({
  tooltipShadow,
  gridLineColor,
  labelColor,
  warningColorShade,
  lineChartDanger,
  lineChartPrimary
}) => {
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 10
        }
      },
      hover: {
        mode: 'label'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: '#fff',
        titleFontColor: '#000',
        bodyFontColor: '#000'
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            ticks: {
              fontColor: labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: labelColor
            },
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            }
          }
        ]
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },
    data = {
      labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
      datasets: [
        {
          data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
          label: 'Brands Messaged',
          borderColor: lineChartDanger,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: lineChartDanger,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: lineChartDanger,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
          label: 'Brands Partnerships',
          borderColor: lineChartPrimary,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: lineChartPrimary,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: lineChartPrimary,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        }
      ]
    }

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <Card>
      <CardHeader>
          <CardTitle className='mb-75' tag='h4'>
            My Brands 
          </CardTitle>
          <UncontrolledButtonDropdown>
        <DropdownToggle color='flat-primary' size="sm" className="dropdown-button">
          <MoreHorizontal />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>
            Month
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Quarter
          </DropdownItem>
          <DropdownItem href='/' tag='a'>
            Year
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      </CardHeader>
      <CardBody>
        <div style={{ height: '450px' }}>
          <Line data={data} options={options} height={450} plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartRdMyBrands
