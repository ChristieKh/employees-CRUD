import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../../../_components/button';
import { EmployeeModal } from '../employee-modal';

type PropsType = {};
type StateType = {};

export class WrappedComponent extends Component<PropsType, StateType> {
  state = {
    isOpened: true,
  };

  handleOpenModal = () => this.setState({ isOpened: true });

  handleCloseModal = () => this.setState({ isOpened: false });

  handleSubmit = (values: any) => {
      console.info('values', values)
  }

  render() {
    return (
      <>
        <Button
          text="Add new employee"
          type="button"
          handleClick={this.handleOpenModal}
        />
        <EmployeeModal
          isModalOpened={this.state.isOpened}
          closeModal={this.handleCloseModal}
          text="Добавить нового сотрудника"
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export const ConnectedAddNewEmployee = connect()(WrappedComponent);
