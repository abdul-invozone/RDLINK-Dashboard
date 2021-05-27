// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import chat from '@src/views/apps/chat/store/reducer'
import chatAdmin from '@src/views/apps/chatAdmin/store/reducer'
import chatBrands from '@src/views/apps/chatBrands/store/reducer'
import chatRd from '@src/views/apps/chatRd/store/reducer'
import todo from '@src/views/apps/todo/store/reducer'
import todoAdmin from '@src/views/apps/todoAdmin/store/reducer'
import todoBrands from '@src/views/apps/todoBrands/store/reducer'
import todoRd from '@src/views/apps/todoRd/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import email from '@src/views/apps/email/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
import calendarBrands from '@src/views/apps/calendarBrands/store/reducer'
import calendarRd from '@src/views/apps/calendarRd/store/reducer'
import ecommerce from '@src/views/apps/ecommerce/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'

const rootReducer = combineReducers({
  auth,
  todo,
  todoAdmin,
  todoBrands,
  todoRd,
  chat,
  chatAdmin,
  chatBrands,
  chatRd,
  email,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  calendarBrands,
  calendarRd,
  ecommerce,
  dataTables
})

export default rootReducer
