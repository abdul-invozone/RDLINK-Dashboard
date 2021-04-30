import { Card, CardHeader, CardTitle, CardBody, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { Calendar } from 'react-feather'
import Flatpickr from 'react-flatpickr'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Jan',
    new: 350,
    recurring: 130,
    churned: 180
  },
  {
    name: 'Feb',
    new: 330,
    recurring: 110,
    churned: 170
  },
  {
    name: 'Mar',
    new: 230,
    recurring: 140,
    churned: 160
  },
  {
    name: 'Apr',
    new: 40,
    recurring:250,
    churned: 370
  },
  {
    name: 'May',
    new: 250,
    recurring: 290,
    churned: 110
  },
  {
    name: 'Jun',
    new: 325,
    recurring: 290,
    churned: 200
  },
  {
    name: 'July',
    new: 330,
    recurring: 210,
    churned: 330
  },
  {
    name: 'Aug',
    new: 200,
    recurring: 250,
    churned: 170
  },
  {
    name: 'Sep',
    new: 290,
    recurring: 200,
    churned: 120
  },
  {
    name: 'Oct',
    new: 130,
    recurring: 60,
    churned: 270
  },
  {
    name: 'Nov',
    new: 310,
    recurring: 60,
    churned: 170
  },
  {
    name: 'Dec',
    new: 130,
    recurring: 60,
    churned: 170
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

const SimpleBarChart = () => {
  return (
    <Card>
      <CardHeader className='flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-sm-center align-items-start'>
        <h4 className="subconcardtitle">Monthly Recurring Revenue Report</h4>
        <UncontrolledButtonDropdown>
      <DropdownToggle outline color='primary' caret>
        Sort by
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
        <DropdownItem href='/' tag='a' disabled>
          Option 2
        </DropdownItem>
        <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
      </CardHeader>

      <CardBody>
        <div className='recharts-wrapper bar-chart'>
          <ResponsiveContainer>
            <BarChart height={300} data={data} barSize={10}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Bar dataKey='new' stackId='a' fill='#566fe7' radius={[7, 7, 0, 0]} />
              <Bar dataKey='recurring' stackId='a' fill='#f2b44d' radius={[7, 7, 0, 0]} />
              <Bar dataKey='churned' stackId='a' fill='#34c38e' radius={[7, 7, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
      <div className='d-flex align-items-center flex-wrap mb-2 justify-content-center'>
          <div className='mr-1'>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#566fe7', borderRadius: '0' }}></span>
            <span className='mr-75'>New</span>
          </div>
          <div className='mr-1'>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#f2b44d', borderRadius: '0' }}></span>
            <span className='mr-75'>Recurring</span>
          </div>
          <div className='mr-1'>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#34c38e', borderRadius: '0' }}></span>
            <span className='mr-75'>Churrned</span>
          </div>
        </div>
    </Card>
  )
}
export default SimpleBarChart
