import React, { Component } from 'react';
import { EmployeeDataType } from '../../../_redux/employees-module';
import { EditableEmployerFormView } from './_components/editable-employer-form-view';

type PropsType = {
  person: EmployeeDataType;
  addNewPerson: (newEmployee: EmployeeDataType) => void;
  deletePerson: () => void;
  onChangePerson: (employee: any) => void;
};

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
