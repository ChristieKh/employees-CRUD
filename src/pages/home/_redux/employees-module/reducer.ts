import { EMPLOYEES } from '../../_constants';
import {
  SET_EMPLOYEE_LOADING_START,
  SET_EMPLOYEE_LOADING_STOP,
  SET_EMPLOYEES_DATA,
  SELECT_EMPLOYEE_ACTION,
  RESET_SELECTED_EMPLOYEE_ACTION,
  DELETE_EMPLOYEE_ACTION,
  ADD_NEW_EMPLOYEE_ACTION,
  CHANGE_INITIAL_EMPLOYEE_ACTION,
  EDIT_EMPLOYEE_ACTION,
} from './actions';
import { ActionsType, EmployeesStateType } from './_types';

export const initialState: EmployeesStateType = {
  isLoading: false,
  employees: EMPLOYEES,
  selectedEmployee: NaN,
  initialEmployee: {
    person: '',
    work: '',
    birthday: '',
    id: 0,
  },
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
    case DELETE_EMPLOYEE_ACTION:
      return { ...state, employees: payload };

    case SELECT_EMPLOYEE_ACTION:
      return { ...state, selectedEmployee: payload };

    case RESET_SELECTED_EMPLOYEE_ACTION:
      return { ...state, selectedEmployee: initialState.selectedEmployee };

    case ADD_NEW_EMPLOYEE_ACTION:
      return { ...state, employees: [payload, ...state.employees] };

    case CHANGE_INITIAL_EMPLOYEE_ACTION:
      return { ...state, initialEmployee: payload };

    case EDIT_EMPLOYEE_ACTION:
      return {
        ...state,
        employees: state.employees.map((employee) =>
          payload.id === employee.id ? payload : employee,
        ),
      };

    default:
      return state;
  }
};

export default reducer;
