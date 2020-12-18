import { Action, BaseAction } from '../../../../config-redux/_types';
import { EmployeeDataType } from './_types';

export const SET_EMPLOYEE_LOADING_START = 'SET_EMPLOYEE_LOADING_START';

export const SET_EMPLOYEE_LOADING_STOP = 'SET_EMPLOYEE_LOADING_STOP';

export const SET_EMPLOYEES_DATA = 'SET_EMPLOYEES_DATA';

export const DELETE_EMPLOYEE_ACTION = 'DELETE_EMPLOYEE_ACTION';
export const deleteEmployeeAction: Action<Array<EmployeeDataType>> = (
  payload,
) => ({
  type: DELETE_EMPLOYEE_ACTION,
  payload,
});

export const SELECT_EMPLOYEE_ACTION = 'SELECT_EMPLOYEE_ACTION';
export const selectEmployeeAction: Action<number> = (payload) => ({
  type: SELECT_EMPLOYEE_ACTION,
  payload,
});

export const RESET_SELECTED_EMPLOYEE_ACTION = 'RESET_SELECTED_EMPLOYEE_ACTION';
export const resetSelectedEmployeeAction: BaseAction = () => ({
  type: RESET_SELECTED_EMPLOYEE_ACTION,
});

export const ADD_NEW_EMPLOYEE_ACTION = 'ADD_NEW_EMPLOYEE_ACTION';
export const addNewEmployeeAction: Action<EmployeeDataType> = (payload) => ({
  type: ADD_NEW_EMPLOYEE_ACTION,
  payload,
});
