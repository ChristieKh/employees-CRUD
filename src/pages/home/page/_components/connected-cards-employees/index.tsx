import React, { Component } from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import {
  deleteEmployeeAction,
  EmployeeDataType,
  getEmployeesSelector,
  selectEmployeeAction,
  getSelectedEmployeeSelector,
  resetSelectedEmployeeAction,
} from '../../../_redux/employees-module';
import { ReduxStoreType } from '../../../_redux/_types';
import { HEADER_EMPLOYEE_CARD } from '../../../_constants';
import { Action, BaseAction } from '../../../../../config-redux/_types';
import { PersonCard } from './_components/person-card';
import { Header } from './_components/header';
import styles from './index.module.scss';
import { DeleteModal } from './_components/delete-modal';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Cards-employees';

type PropsType = {
  employees: Array<EmployeeDataType>;
  selectedEmployee: number;
  deleteEmployee: Action<Array<EmployeeDataType>>;
  selectEmployee: Action<number>;
  resetSelectedEmployee: BaseAction;
};

type StateType = {
  isDeleteModalOpened: boolean;
};

export class WrappedComponent extends Component<PropsType, StateType> {
  state = {
    isDeleteModalOpened: false,
  };

  handleOpenDeleteModal = (id: number) => {
    this.setState({ isDeleteModalOpened: true });
    this.props.selectEmployee(id);
  };

  handleCloseDeleteModal = () => {
    this.setState({ isDeleteModalOpened: false });
    this.props.resetSelectedEmployee();
  };

  handleDelete = () => {
    const { employees, selectedEmployee, deleteEmployee } = this.props;

    const filteredEmployees = employees.filter(
      ({ id }) => selectedEmployee !== id,
    );
    deleteEmployee(filteredEmployees);
    this.handleCloseDeleteModal();
  };

  render() {
    return (
      <>
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
              <PersonCard
                person={person}
                work={work}
                birthday={birthday}
                handleOpenDeleteModal={this.handleOpenDeleteModal}
                id={id}
              />
            </div>
          ))}
        </div>
        <DeleteModal
          isModalOpened={this.state.isDeleteModalOpened}
          closeModal={this.handleCloseDeleteModal}
          deleteEmployee={this.handleDelete}
        />
      </>
    );
  }
}

const mapStateToProps = (state: ReduxStoreType) => ({
  employees: getEmployeesSelector(state),
  selectedEmployee: getSelectedEmployeeSelector(state),
});

export const ConnectedCardsEmployees = connect(mapStateToProps, {
  deleteEmployee: deleteEmployeeAction,
  selectEmployee: selectEmployeeAction,
  resetSelectedEmployee: resetSelectedEmployeeAction,
})(WrappedComponent);
