// import { createSelector } from 'reselect';
import { DataStoragePartType } from './_types';

export const employeesSelector = ({ employeesStorage }: DataStoragePartType) =>
  employeesStorage || {};
