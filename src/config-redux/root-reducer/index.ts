import { combineReducers } from 'redux';
import employeesReducerModule from '../../pages/home/_redux/employees-module';
import { EMPLOYEES_REDUCER_NAME } from '../../pages/home/_redux/employees-module/_constants';

export default combineReducers({
  [EMPLOYEES_REDUCER_NAME]: employeesReducerModule,
});
