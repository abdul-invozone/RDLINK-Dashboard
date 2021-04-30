import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Calendar } from 'react-feather'
import Flatpickr from 'react-flatpickr'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: '7/12',
    brandCampaigns: 20,
  rdOpportunities: 60
  },
  {
    name: '8/12',
    brandCampaigns: 40,
  rdOpportunities: 80
  },
  {
    name: '9/12',
    brandCampaigns: 30,
  rdOpportunities: 7
  },
  {
    name: '10/12',
    brandCampaigns: 70,
    rdOpportunities: 110
  },
  {
    name: '11/12',
    brandCampaigns: 40,
  rdOpportunities: 80
  },
  {
    name: '12/12',
    brandCampaigns: 60,
  rdOpportunities: 80
  },
  {
    name: '13/12',
    brandCampaigns: 50,
    rdOpportunities: 100
  },
  {
    name: '14/12',
    brandCampaigns: 140,
  rdOpportunities: 90
  },
  {
    name: '15/12',
    brandCampaigns: 120,
    rdOpportunities: 180
  },
  {
    name: '16/12',
    brandCampaigns: 100,
    rdOpportunities: 160
  },
  {
    name: '17/12',
    brandCampaigns: 140,
    rdOpportunities: 140
  },
  {
    name: '18/12',
    brandCampaigns: 180,
    rdOpportunities: 200
  },
  {
    name: '19/12',
    brandCampaigns: 220,
    rdOpportunities: 220
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
                  className='bullet bullet-sm bullet-bordered mr-50'
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

const SimpleAreaChart = ({ primary }) => {
  return (
    <Card>
      <CardHeader className='flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-sm-center align-items-start'>
        <CardTitle className="" tag='h4'>Current Partnerships</CardTitle>
        {/* <div className='d-flex align-items-center'>
          <Calendar size={15} />
          <Flatpickr
            options={{
              mode: 'range',
              defaultDate: ['2019-05-01', '2019-05-10']
            }}
            className='form-control flat-picker bg-transparent border-0 shadow-none'
          />
        </div> */}
      </CardHeader>

      <CardBody>
        <div className='recharts-wrapper'>
          <ResponsiveContainer>
            <AreaChart height={400} data={data}>
              <CartesianGrid />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Area dataKey='brandCampaigns' stackId='brandCampaigns' stroke='0' fill='rgba(115, 103, 240, .5)' />
              <Area dataKey='rdOpportunities' stackId='rdOpportunities' stroke='0' fill='rgba(115, 103, 240, .2)' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className='d-flex align-items-center mb-2'>
          <div className='mr-2'>
            <span className='bullet bullet-md bullet-primary bullet-bordered mr-50'></span>
            <span className='align-middle '>Brand Campaigns</span>
          </div>
          <div className='mr-2'>
            <span
              className='bullet bullet-md bullet-bordered mr-50'
              style={{ backgroundColor: 'rgba(115, 103, 240, .5)' }}
            ></span>
            <span className='align-middle mr-75'>RD Opportunities</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default SimpleAreaChart
