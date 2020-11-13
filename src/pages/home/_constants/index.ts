import { EmployeeDataType } from '../_redux/employees-module/_types';

export const EMPLOYEES: Array<EmployeeDataType> = [
  {
    id: 1,
    person: 'Печоринский Роман Денисович',
    work: 'Разработчик',
    birthday: '2014-02-01',
  },
  {
    id: 2,
    person: 'Васильева Ирина Петровна',
    work: 'Аналитик',
    birthday: '1992-12-25',
  },
  {
    id: 3,
    person: 'Данилов Кирилл Сергеевич',
    work: 'Тестировщик',
    birthday: '1994-01-01',
  },
];

export const HEADER_EMPLOYEE_CARD = [
  {
    id: 1,
    name: 'person',
  },
  {
    id: 2,
    name: 'job',
  },
  {
    id: 3,
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
