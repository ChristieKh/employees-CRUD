import { EmployeeDataType } from '../../_redux';

export const EMPLOYEES: Array<EmployeeDataType> = [
  {
    id: 1,
    person: 'Печоринский Роман Денисович',
    work: 'Разработчик',
    birthday: '2014-02-01',
    project: 'Project 1',
  },
  {
    id: 2,
    person: 'Васильева Ирина Петровна',
    work: 'Аналитик',
    birthday: '1992-12-25',
    project: 'Project 3',
  },
  {
    id: 3,
    person: 'Данилов Кирилл Сергеевич',
    work: 'Тестировщик',
    birthday: '1994-01-01',
    project: 'Project 1',
  },
];

export const HEADER_EMPLOYEE_CARD = [
  {
    id: 1,
    name: 'employee',
  },
  {
    id: 2,
    name: 'project',
  },
  {
    id: 3,
    name: 'job',
  },
  {
    id: 4,
    name: 'birthday',
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: 'Project 1',
  },
  {
    id: 2,
    name: 'Project 2',
  },
  {
    id: 3,
    name: 'Project 3',
  },
  {
    id: 4,
    name: 'Project 4',
  },
];