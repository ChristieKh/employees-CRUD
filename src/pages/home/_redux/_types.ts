export type DataStoragePartType = {
  employeesStorage: EmployeesStateType;
};

export type EmployeesStateType = {
  employees: Array<EmployeeDataType>;
  isLoading: boolean;
};

export type EmployeeDataType = {
  id: number;
  person: string;
  work: string;
  birthday: string;
  project: string;
};
