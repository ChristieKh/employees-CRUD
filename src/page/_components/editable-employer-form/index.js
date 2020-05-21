import React, { Component } from 'react';
import { EditableEmployerFormView } from './_components/editable-employer-form-view';

export class EditableEmployerForm extends Component {
  handleAddNewEmployer = () => {};

  handleDeleteEmployer = () => {};

  onSubmit = (values) => {
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
