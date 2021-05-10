import { Card, CardHeader, CardTitle, CardBody, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { Calendar } from 'react-feather'
import Flatpickr from 'react-flatpickr'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Jan',
    apple: 80,
    samsung: 130,
    oneplus: 150,
    motorola: 210
  },
  {
    name: 'Feb',
    apple: 100,
    samsung: 150,
    oneplus: 170,
    motorola: 380
  },
  {
    name: 'Mar',
    apple: 80,
    samsung: 140,
    oneplus: 160,
    motorola: 220
  },
  {
    name: 'Apr',
    apple: 100,
    samsung: 150,
    oneplus: 170,
    motorola: 380
  },
  {
    name: 'May',
    apple: 50,
    samsung: 90,
    oneplus: 110,
    motorola: 150
  },
  {
    name: 'Jun',
    apple: 125,
    samsung: 90,
    oneplus: 100,
    motorola: 65
  },
  {
    name: 'Jul',
    apple: 70,
    samsung: 110,
    oneplus: 130,
    motorola: 210
  },
  {
    name: 'Aug',
    apple: 100,
    samsung: 150,
    oneplus: 170,
    motorola: 380
  },
  {
    name: 'Sep',
    apple: 80,
    samsung: 100,
    oneplus: 120,
    motorola: 180
  },
  {
    name: 'Oct',
    apple: 30,
    samsung: 60,
    oneplus: 70,
    motorola: 110
  },
  {
    name: 'Nov',
    apple: 30,
    samsung: 60,
    oneplus: 70,
    motorola: 110
  },
  {
    name: 'Dec',
    apple: 30,
    samsung: 60,
    oneplus: 70,
    motorola: 110
  }
]

const CustomTooltip = data => {
  if (data.active && data.payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <p className='font-weight-bold mb-0'>{data.label}</p>
        <hr />
        <div className='active'>
          {data.payload.map(i => {
            return (
              <div className='d-flex align-items-center' key={i.dataKey}>
                <span
                  className='bullet  bullet-sm bullet-bordered mr-50'
                  style={{
                    backgroundColor: i.fill
                  }}
                ></span>
                <span className='align-middle text-capitalize mr-75'>
                  {i.dataKey} : {i.payload[i.dataKey]}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return null
}

const SimpleBarChartExpense = () => {
  return (
    <Card>
      <CardHeader className='flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-sm-center align-items-start'>
        <CardTitle tag='h4'>Expense Report</CardTitle>
        <div className='d-flex align-items-center expense-report'>
        <UncontrolledButtonDropdown>
        <DropdownToggle color='flat-primary' className="expense-2021" caret>
          2021
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>2020</DropdownItem>
          <DropdownItem href='/' tag='a'>2019</DropdownItem>
          <DropdownItem href='/' tag='a'>2018</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
        <UncontrolledButtonDropdown>
        <DropdownToggle color='flat-primary' className="expense-2021" caret>
          Month
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a'>Year</DropdownItem>
          <DropdownItem href='/' tag='a'>Week</DropdownItem>
          <DropdownItem href='/' tag='a'>Day</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
        </div>
      </CardHeader>

      <CardBody>
        <div className='d-flex align-items-center flex-wrap mb-2'>
          <div className='mr-1'>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#826af9' }}></span>
            <span className='align-middle mr-75'>Monthly Budget</span>
          </div>
          <div className='mr-1'>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#f8d3ff' }}></span>
            <span className='align-middle mr-75'>Monthly Spending</span>
          </div>
        </div>
        <div className='recharts-wrapper bar-chart'>
          <ResponsiveContainer>
            <BarChart height={300} data={data} barSize={15}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Bar dataKey='apple' stackId='a' fill='#826af9' />
              <Bar dataKey='samsung' stackId='a' fill='#9f87ff' />
              <Bar dataKey='oneplus' stackId='a' fill='#d2b0ff' />
              <Bar dataKey='motorola' stackId='a' fill='#f8d3ff' radius={[15, 15, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  )
}
export default SimpleBarChartExpense
