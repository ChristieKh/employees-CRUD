import { EmployeeDataType } from '../_redux/employees-module/_types';

export const EMPLOYEES: Array<EmployeeDataType> = [
  {
    id: 1,
    person: 'Печоринский Роман Денисович',
    work: '1',
    birthday: '1993-03-11T00:00:00.000Z',
  },
  {
    id: 2,
    person: 'Васильева Ирина Петровна',
    work: '2',
    birthday: '1992-24-12T00:00:00.000Z',
  },
  {
    id: 3,
    person: 'Данилов Кирилл Сергеевич',
    work: '3',
    birthday: '1994-01-01T00:00:00.000Z',
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

export const JOB_LIST = [
  {
    id: '0',
    text: '',
  },
  {
    id: '1',
    text: 'Разработчик',
  },
  {
    id: '2',
    text: 'Аналитик',
  },
  {
    id: '3',
    text: 'Тестировщик',
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
