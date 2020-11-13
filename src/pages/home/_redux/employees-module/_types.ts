export type EmployeesStateType = {
  employees: Array<EmployeeDataType>;
  isLoading: boolean;
};

export type EmployeeDataType = {
  id: number;
  person: string;
  work: string;
  birthday: string;
};

export type ActionsType = {
  type: string;
  payload?: Array<EmployeeDataType>;
};
