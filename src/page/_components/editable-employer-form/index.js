import React, {Component} from 'react';
import {EditableEmployerFormView} from "./_components/editable-employer-form-view";

export class EditableEmployerForm extends Component {

    handleAddNewEmployer = () => {};

    handleDeleteEmployer = () => {};

    render() {
        return (
            <EditableEmployerFormView handleAddNewEmployer={this.handleAddNewEmployer}
                                      handleDeleteEmployer={this.handleDeleteEmployer}/>
        );
    }
}