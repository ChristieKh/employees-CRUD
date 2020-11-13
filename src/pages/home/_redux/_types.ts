import { EmployeesStateType } from './employees-module/_types';
import { EMPLOYEES_REDUCER_NAME } from './employees-module/_constants';

export type ReduxStoreType = {
  [EMPLOYEES_REDUCER_NAME]: EmployeesStateType;
};
