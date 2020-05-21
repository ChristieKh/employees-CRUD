import React, { Component } from 'react';
import { EditableEmployerFormView } from './_components/editable-employer-form-view';
import { EmployeesType } from '../../_types';

type PropsType = {
  person: EmployeesType;
  addNewPerson: (newEmployee: EmployeesType) => void;
  deletePerson: () => void;
  onChangePerson: (employee: any) => void;
}

export class EditableEmployerForm extends Component<PropsType> {
  handleAddNewEmployer = () => {};

  handleDeleteEmployer = () => {};

  onSubmit = (values: any) => {
    // console.info('values', values);
  };

  render() {
    return (
      <EditableEmployerFormView
        handleAddNewEmployer={this.handleAddNewEmployer}
        handleDeleteEmployer={this.handleDeleteEmployer}
        onSubmit={this.onSubmit}
      />
    );
  }
}
