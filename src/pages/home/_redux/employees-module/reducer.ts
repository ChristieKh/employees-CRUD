import { EMPLOYEES } from '../../_constants';
import {
  SET_EMPLOYEE_LOADING_START,
  SET_EMPLOYEE_LOADING_STOP,
  SET_EMPLOYEES_DATA,
} from './actions';
import { ActionsType, EmployeesStateType } from './_types';

export const initialState: EmployeesStateType = {
  isLoading: false,
  employees: EMPLOYEES,
};

const reducer = (
  state: EmployeesStateType = initialState,
  { type, payload }: ActionsType,
) => {
  switch (type) {
    case SET_EMPLOYEE_LOADING_START:
      return { ...state, isLoading: true };

    case SET_EMPLOYEE_LOADING_STOP:
      return { ...state, isLoading: false };

    case SET_EMPLOYEES_DATA:
      return { ...state, employees: payload };

    default:
      return state;
  }
};

export default reducer;
