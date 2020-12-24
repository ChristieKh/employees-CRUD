import { EmployeeDataType } from '../employees-module/_types';
import { JOB_LIST } from '../../_constants';

export const getEmployeesFormatter = (values: Array<EmployeeDataType>) =>
  values.map((employee) => {
    const work = JOB_LIST.find(({ id }) => id === employee.work).text;
    return { ...employee, work };
  });
