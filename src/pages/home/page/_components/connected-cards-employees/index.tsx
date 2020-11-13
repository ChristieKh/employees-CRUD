import React, { Component } from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import {
  EmployeeDataType,
  getEmployeesSelector,
} from '../../../_redux/employees-module';
import { ReduxStoreType } from '../../../_redux/_types';
import { HEADER_EMPLOYEE_CARD } from '../../../_constants';
import { PersonCard } from './_components/person-card';
import { Header } from './_components/header';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Cards-employees';

type PropsType = {
  employees: Array<EmployeeDataType>;
};

// eslint-disable-next-line react/prefer-stateless-function
export class WrappedComponent extends Component<PropsType> {
  render() {
    return (
      <div className={cn(COMPONENT_STYLE_NAME)}>
        <Header config={HEADER_EMPLOYEE_CARD} />
        {this.props.employees.map(({ person, work, birthday, id }) => (
          <div
            className={cn(`${COMPONENT_STYLE_NAME}__card`, {
              [`${COMPONENT_STYLE_NAME}__card-active`]: false,
            })}
            key={id}
            role="button"
            tabIndex={0}
            onClick={() => {}}
          >
            <PersonCard person={person} work={work} birthday={birthday} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxStoreType) => ({
  employees: getEmployeesSelector(state),
});

export const ConnectedCardsEmployees = connect(mapStateToProps)(
  WrappedComponent,
);
