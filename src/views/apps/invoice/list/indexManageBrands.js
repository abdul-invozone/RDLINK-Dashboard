// ** React Imports
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Table Columns
import { columnsManageBrands } from './columnsManageBrands'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Button, Label, Input, CustomInput, Row, Col, Card } from 'reactstrap'

// ** Store & Actions
import { getData } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const CustomHeader = ({ handleFilter, value, handleStatusValue, statusValue, handlePerPage, rowsPerPage }) => {
  return (
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col lg='6' className='d-flex align-items-center px-0 px-lg-1'>
          <div className='d-flex align-items-center mr-2 Bold text'>
            <Label className="text-lg Bold text" for='rows-per-page'>Entries</Label>
            <CustomInput
              className='form-control ml-50 pr-3'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </CustomInput>
          </div>
          {/* <Button.Ripple tag={Link} to='/apps/invoice/add' color='primary'>
            Add Record
          </Button.Ripple> */}
        </Col>
        <Col
          lg='6'
          className='actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0'
        >
          {/* <div className='d-flex align-items-center'>
            <Label for='search-invoice'>Search</Label>
            <Input
              id='search-invoice'
              className='ml-50 mr-2 w-100'
              type='text'
              value={value}
              onChange={e => handleFilter(e.target.value)}
              placeholder='Search Invoice'
            />
          </div> */}
          <Input className='w-auto ' type='select' value={statusValue} onChange={handleStatusValue}>
            <option value=''>Search By</option>
            <option value='downloaded'>Downloaded</option>
            <option value='draft'>Draft</option>
            <option value='paid'>Paid</option>
            <option value='partial payment'>Partial Payment</option>
            <option value='past due'>Past Due</option>
            <option value='partial payment'>Partial Payment</option>
          </Input>
        </Col>
      </Row>
    </div>
  )
}

const InvoiceListManageBrands = () => {
  const dummyData = {
    invoices: [
      {
        id: 7001,
        issuedDate: '13 Dec 2019',
        client: {
          address: '7777 Mendez Plains',
          company: 'Hall-Robbins PLC',
          companyEmail: 'don85@johnson.com',
          country: 'USA',
          contact: '(616) 865-4180',
          name: 'Jordan Stevenson',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Software Development',
        total: 3428,
        avatar: '',
        invoiceStatus: 'Paid',
        balance: '$724',
        dueDate: '23 Apr 2019'
      },
      {
        id: 7002,
        issuedDate: '17 Jul 2019',
        client: {
          address: '04033 Wesley Wall Apt. 961',
          company: 'Mccann LLC and Sons',
          companyEmail: 'brenda49@taylor.info',
          country: 'Haiti',
          contact: '(226) 204-8287',
          name: 'Stephanie Burns',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'UI/UX Design & Development',
        total: 5219,
        avatar: require('@src/assets/images/avatars/10-small.png').default,
        invoiceStatus: 'Downloaded',
        balance: 0,
        dueDate: '15 Dec 2019'
      },
      {
        id: 7003,
        issuedDate: '19 Oct 2019',
        client: {
          address: '5345 Robert Squares',
          company: 'Leonard-Garcia and Sons',
          companyEmail: 'smithtiffany@powers.com',
          country: 'Denmark',
          contact: '(955) 676-1076',
          name: 'Tony Herrera',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Unlimited Extended License',
        total: 3719,
        avatar: require('@src/assets/images/avatars/1-small.png').default,
        invoiceStatus: 'Paid',
        balance: 0,
        dueDate: '03 Nov 2019'
      },
      {
        id: 7004,
        issuedDate: '13 Dec 2019',
        client: {
          address: '7777 Mendez Plains',
          company: 'Hall-Robbins PLC',
          companyEmail: 'don85@johnson.com',
          country: 'USA',
          contact: '(616) 865-4180',
          name: 'Jordan Stevenson',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Software Development',
        total: 3428,
        avatar: '',
        invoiceStatus: 'Paid',
        balance: '$724',
        dueDate: '23 Apr 2019'
      },
      {
        id: 7005,
        issuedDate: '17 Jul 2019',
        client: {
          address: '04033 Wesley Wall Apt. 961',
          company: 'Mccann LLC and Sons',
          companyEmail: 'brenda49@taylor.info',
          country: 'Haiti',
          contact: '(226) 204-8287',
          name: 'Stephanie Burns',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'UI/UX Design & Development',
        total: 5219,
        avatar: require('@src/assets/images/avatars/10-small.png').default,
        invoiceStatus: 'Downloaded',
        balance: 0,
        dueDate: '15 Dec 2019'
      },
      {
        id: 7006,
        issuedDate: '19 Oct 2019',
        client: {
          address: '5345 Robert Squares',
          company: 'Leonard-Garcia and Sons',
          companyEmail: 'smithtiffany@powers.com',
          country: 'Denmark',
          contact: '(955) 676-1076',
          name: 'Tony Herrera',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Unlimited Extended License',
        total: 3719,
        avatar: require('@src/assets/images/avatars/1-small.png').default,
        invoiceStatus: 'Paid',
        balance: 0,
        dueDate: '03 Nov 2019'
      },
      {
        id: 7007,
        issuedDate: '13 Dec 2019',
        client: {
          address: '7777 Mendez Plains',
          company: 'Hall-Robbins PLC',
          companyEmail: 'don85@johnson.com',
          country: 'USA',
          contact: '(616) 865-4180',
          name: 'Jordan Stevenson',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Software Development',
        total: 3428,
        avatar: '',
        invoiceStatus: 'Paid',
        balance: '$724',
        dueDate: '23 Apr 2019'
      },
      {
        id: 7008,
        issuedDate: '17 Jul 2019',
        client: {
          address: '04033 Wesley Wall Apt. 961',
          company: 'Mccann LLC and Sons',
          companyEmail: 'brenda49@taylor.info',
          country: 'Haiti',
          contact: '(226) 204-8287',
          name: 'Stephanie Burns',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'UI/UX Design & Development',
        total: 5219,
        avatar: require('@src/assets/images/avatars/10-small.png').default,
        invoiceStatus: 'Downloaded',
        balance: 0,
        dueDate: '15 Dec 2019'
      },
      {
        id: 7009,
        issuedDate: '19 Oct 2019',
        client: {
          address: '5345 Robert Squares',
          company: 'Leonard-Garcia and Sons',
          companyEmail: 'smithtiffany@powers.com',
          country: 'Denmark',
          contact: '(955) 676-1076',
          name: 'Tony Herrera',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Unlimited Extended License',
        total: 3719,
        avatar: require('@src/assets/images/avatars/1-small.png').default,
        invoiceStatus: 'Paid',
        balance: 0,
        dueDate: '03 Nov 2019'
      },
      {
        id: 7010,
        issuedDate: '13 Dec 2019',
        client: {
          address: '7777 Mendez Plains',
          company: 'Hall-Robbins PLC',
          companyEmail: 'don85@johnson.com',
          country: 'USA',
          contact: '(616) 865-4180',
          name: 'Jordan Stevenson',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Software Development',
        total: 3428,
        avatar: '',
        invoiceStatus: 'Paid',
        balance: '$724',
        dueDate: '23 Apr 2019'
      },
      {
        id: 7011,
        issuedDate: '17 Jul 2019',
        client: {
          address: '04033 Wesley Wall Apt. 961',
          company: 'Mccann LLC and Sons',
          companyEmail: 'brenda49@taylor.info',
          country: 'Haiti',
          contact: '(226) 204-8287',
          name: 'Stephanie Burns',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'UI/UX Design & Development',
        total: 5219,
        avatar: require('@src/assets/images/avatars/10-small.png').default,
        invoiceStatus: 'Downloaded',
        balance: 0,
        dueDate: '15 Dec 2019'
      },
      {
        id: 7012,
        issuedDate: '19 Oct 2019',
        client: {
          address: '5345 Robert Squares',
          company: 'Leonard-Garcia and Sons',
          companyEmail: 'smithtiffany@powers.com',
          country: 'Denmark',
          contact: '(955) 676-1076',
          name: 'Tony Herrera',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Unlimited Extended License',
        total: 3719,
        avatar: require('@src/assets/images/avatars/1-small.png').default,
        invoiceStatus: 'Paid',
        balance: 0,
        dueDate: '03 Nov 2019'
      },
      {
        id: 7013,
        issuedDate: '13 Dec 2019',
        client: {
          address: '7777 Mendez Plains',
          company: 'Hall-Robbins PLC',
          companyEmail: 'don85@johnson.com',
          country: 'USA',
          contact: '(616) 865-4180',
          name: 'Jordan Stevenson',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Software Development',
        total: 3428,
        avatar: '',
        invoiceStatus: 'Paid',
        balance: '$724',
        dueDate: '23 Apr 2019'
      },
      {
        id: 7014,
        issuedDate: '17 Jul 2019',
        client: {
          address: '04033 Wesley Wall Apt. 961',
          company: 'Mccann LLC and Sons',
          companyEmail: 'brenda49@taylor.info',
          country: 'Haiti',
          contact: '(226) 204-8287',
          name: 'Stephanie Burns',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'UI/UX Design & Development',
        total: 5219,
        avatar: require('@src/assets/images/avatars/10-small.png').default,
        invoiceStatus: 'Downloaded',
        balance: 0,
        dueDate: '15 Dec 2019'
      },
      {
        id: 7015,
        issuedDate: '19 Oct 2019',
        client: {
          address: '5345 Robert Squares',
          company: 'Leonard-Garcia and Sons',
          companyEmail: 'smithtiffany@powers.com',
          country: 'Denmark',
          contact: '(955) 676-1076',
          name: 'Tony Herrera',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Unlimited Extended License',
        total: 3719,
        avatar: require('@src/assets/images/avatars/1-small.png').default,
        invoiceStatus: 'Paid',
        balance: 0,
        dueDate: '03 Nov 2019'
      },
      {
        id: 7016,
        issuedDate: '13 Dec 2019',
        client: {
          address: '7777 Mendez Plains',
          company: 'Hall-Robbins PLC',
          companyEmail: 'don85@johnson.com',
          country: 'USA',
          contact: '(616) 865-4180',
          name: 'Jordan Stevenson',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Software Development',
        total: 3428,
        avatar: '',
        invoiceStatus: 'Paid',
        balance: '$724',
        dueDate: '23 Apr 2019'
      },
      {
        id: 7017,
        issuedDate: '17 Jul 2019',
        client: {
          address: '04033 Wesley Wall Apt. 961',
          company: 'Mccann LLC and Sons',
          companyEmail: 'brenda49@taylor.info',
          country: 'Haiti',
          contact: '(226) 204-8287',
          name: 'Stephanie Burns',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'UI/UX Design & Development',
        total: 5219,
        avatar: require('@src/assets/images/avatars/10-small.png').default,
        invoiceStatus: 'Downloaded',
        balance: 0,
        dueDate: '15 Dec 2019'
      },
      {
        id: 7018,
        issuedDate: '19 Oct 2019',
        client: {
          address: '5345 Robert Squares',
          company: 'Leonard-Garcia and Sons',
          companyEmail: 'smithtiffany@powers.com',
          country: 'Denmark',
          contact: '(955) 676-1076',
          name: 'Tony Herrera',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Unlimited Extended License',
        total: 3719,
        avatar: require('@src/assets/images/avatars/1-small.png').default,
        invoiceStatus: 'Paid',
        balance: 0,
        dueDate: '03 Nov 2019'
      },
      {
        id: 7019,
        issuedDate: '13 Dec 2019',
        client: {
          address: '7777 Mendez Plains',
          company: 'Hall-Robbins PLC',
          companyEmail: 'don85@johnson.com',
          country: 'USA',
          contact: '(616) 865-4180',
          name: 'Jordan Stevenson',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Software Development',
        total: 3428,
        avatar: '',
        invoiceStatus: 'Paid',
        balance: '$724',
        dueDate: '23 Apr 2019'
      },
      {
        id: 7020,
        issuedDate: '17 Jul 2019',
        client: {
          address: '04033 Wesley Wall Apt. 961',
          company: 'Mccann LLC and Sons',
          companyEmail: 'brenda49@taylor.info',
          country: 'Haiti',
          contact: '(226) 204-8287',
          name: 'Stephanie Burns',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'UI/UX Design & Development',
        total: 5219,
        avatar: require('@src/assets/images/avatars/10-small.png').default,
        invoiceStatus: 'Downloaded',
        balance: 0,
        dueDate: '15 Dec 2019'
      },
      {
        id: 7021,
        issuedDate: '19 Oct 2019',
        client: {
          address: '5345 Robert Squares',
          company: 'Leonard-Garcia and Sons',
          companyEmail: 'smithtiffany@powers.com',
          country: 'Denmark',
          contact: '(955) 676-1076',
          name: 'Tony Herrera',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Unlimited Extended License',
        total: 3719,
        avatar: require('@src/assets/images/avatars/1-small.png').default,
        invoiceStatus: 'Paid',
        balance: 0,
        dueDate: '03 Nov 2019'
      },
      {
        id: 7022,
        issuedDate: '13 Dec 2019',
        client: {
          address: '7777 Mendez Plains',
          company: 'Hall-Robbins PLC',
          companyEmail: 'don85@johnson.com',
          country: 'USA',
          contact: '(616) 865-4180',
          name: 'Jordan Stevenson',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Software Development',
        total: 3428,
        avatar: '',
        invoiceStatus: 'Paid',
        balance: '$724',
        dueDate: '23 Apr 2019'
      },
      {
        id: 7023,
        issuedDate: '17 Jul 2019',
        client: {
          address: '04033 Wesley Wall Apt. 961',
          company: 'Mccann LLC and Sons',
          companyEmail: 'brenda49@taylor.info',
          country: 'Haiti',
          contact: '(226) 204-8287',
          name: 'Stephanie Burns',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'UI/UX Design & Development',
        total: 5219,
        avatar: require('@src/assets/images/avatars/10-small.png').default,
        invoiceStatus: 'Downloaded',
        balance: 0,
        dueDate: '15 Dec 2019'
      },
      {
        id: 7024,
        issuedDate: '19 Oct 2019',
        client: {
          address: '5345 Robert Squares',
          company: 'Leonard-Garcia and Sons',
          companyEmail: 'smithtiffany@powers.com',
          country: 'Denmark',
          contact: '(955) 676-1076',
          name: 'Tony Herrera',
          subscriptionPlan: 'monthly',
          partnerships: '34',
          monthlyLogins: 23,
          loginTime: '2hrs'
        },
        service: 'Unlimited Extended License',
        total: 3719,
        avatar: require('@src/assets/images/avatars/1-small.png').default,
        invoiceStatus: 'Paid',
        balance: 0,
        dueDate: '03 Nov 2019'
      }
    ]
  }

  // const dispatch = useDispatch()
  // const store = useSelector(state => state.invoice)

  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [statusValue, setStatusValue] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)

  // useEffect(() => {
  //     {
  //       page: currentPage,
  //       perPage: rowsPerPage,
  //       status: statusValue,
  //       q: value
  //     }
  // }), [dummyData.length])

  // const handleFilter = val => {
  //   setValue(val)
  //     dummyData({
  //       page: currentPage,
  //       perPage: rowsPerPage,
  //       status: statusValue,
  //       q: val
  //     })
  // }

  // const handlePerPage = e => {
  //     dummyData({
  //       page: currentPage,
  //       perPage: parseInt(e.target.value),
  //       status: statusValue,
  //       q: value
  //     })
  //   setRowsPerPage(parseInt(e.target.value))
  // }

  // const handleStatusValue = e => {
  //   setStatusValue(e.target.value)
  //     dummyData({
  //       page: currentPage,
  //       perPage: rowsPerPage,
  //       status: e.target.value,
  //       q: value
  //     })
  // }

  // const handlePagination = page => {
  //     dummyData({
  //       page: page.selected + 1,
  //       perPage: rowsPerPage,
  //       status: statusValue,
  //       q: value
  //     })
  //   setCurrentPage(page.selected + 1)
  // }

  const CustomPagination = () => {
    const count = Number((dummyData.total / rowsPerPage).toFixed(0))

    return (
      <ReactPaginate
        pageCount={count || 1}
        nextLabel=''
        breakLabel='...'
        previousLabel=''
        activeClassName='active'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end p-1'}
      />
    )
  }

  const dataToRender = () => {
    const filters = {
      status: statusValue,
      q: value
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (dummyData.length > 0) {
      return dummyData
    } else if (dummyData.length === 0 && isFiltered) {
      return []
    } else {
      return dummyData.invoices.slice(0, rowsPerPage)
    }
  }

  return (
    <div className='invoice-list-wrapper manage-brands'>
      <Card>
      <h2 className="main-heading">Manage Brands</h2>
        <div className='invoice-list-dataTable'>
          <DataTable
            noHeader
            pagination
            paginationServer
            subHeader={true}
            columns={columnsManageBrands}
            responsive={true}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            defaultSortField='invoiceId'
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
            data={dataToRender()}
            subHeaderComponent={
              <CustomHeader
                value={value}
                statusValue={statusValue}
                rowsPerPage={rowsPerPage}
                // handleFilter={handleFilter}
                // handlePerPage={handlePerPage}
                // handleStatusValue={handleStatusValue}
              />
            }
          />
        <p className="showEntries">Showing 1 to {rowsPerPage} of {dummyData.total} entries</p>
        </div>
      </Card>
    </div>
  )
}

export default InvoiceListManageBrands
