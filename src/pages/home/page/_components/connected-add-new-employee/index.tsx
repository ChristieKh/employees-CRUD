import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../../../_components/button';
import { ConnectedEmployeeModal } from '../employee-modal';
import {
  EmployeeDataType,
  addNewEmployeeAction,
} from '../../../_redux/employees-module';
import { Action } from '../../../../../config-redux/_types';
import { JOB_LIST } from '../../../_constants';

type PropsType = {
  addNewEmployee: Action<EmployeeDataType>;
};
type StateType = {};

export class WrappedComponent extends Component<PropsType, StateType> {
  state = {
    isOpened: false,
  };

  handleOpenModal = () => this.setState({ isOpened: true });

  handleCloseModal = () => this.setState({ isOpened: false });

  handleSubmit = (values: EmployeeDataType) => {
    this.props.addNewEmployee(values);
    this.handleCloseModal();
  };

  render() {
    return (
      <>
        <Button
          text="Add new employee"
          type="button"
          handleClick={this.handleOpenModal}
        />
        <ConnectedEmployeeModal
          isModalOpened={this.state.isOpened}
          closeModal={this.handleCloseModal}
          text="Добавить нового сотрудника"
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export const ConnectedAddNewEmployee = connect(null, {
  addNewEmployee: addNewEmployeeAction,
})(WrappedComponent);
