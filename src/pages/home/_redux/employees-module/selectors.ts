import { createSelector } from 'reselect';
import { ReduxStoreType } from '../_types';
import { initialState } from './reducer';
import { EMPLOYEES_REDUCER_NAME } from './_constants';
import { EmployeesStateType } from './_types';

export const employeesSelector = (store: ReduxStoreType) =>
  store[EMPLOYEES_REDUCER_NAME] || initialState;

export const getEmployeesSelector = createSelector(
  [employeesSelector],
  ({ employees }: EmployeesStateType) => employees,
);

export const getSelectedEmployeeSelector = createSelector(
  [employeesSelector],
  ({ selectedEmployee }: EmployeesStateType) => selectedEmployee,
);
