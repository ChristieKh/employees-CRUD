import React, { Component } from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import {
  EmployeeDataType,
  getEmployeesSelector,
} from '../../../_redux/employees-module';
import { ReduxStoreType } from '../../../_redux/_types';
import { HEADER_EMPLOYEE_CARD } from '../../../_constants';
import { Modal } from '../../../../../_components/modal';
import { PersonCard } from './_components/person-card';
import { Header } from './_components/header';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Cards-employees';

type PropsType = {
  employees: Array<EmployeeDataType>;
};

type StateType = {
  isDeleteModalOpened: boolean;
};

export class WrappedComponent extends Component<PropsType, StateType> {
  state = {
    isDeleteModalOpened: false,
  };

  handleOpenDeleteModal = () => this.setState({ isDeleteModalOpened: true });

  handleCloseDeleteModal = () => this.setState({ isDeleteModalOpened: false });

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
              />
            </div>
          ))}
        </div>
        <Modal
          isShown={this.state.isDeleteModalOpened}
          closeModal={this.handleCloseDeleteModal}
        >
          <p>Вы действительно хотите удалить сотрудника?</p>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state: ReduxStoreType) => ({
  employees: getEmployeesSelector(state),
});

export const ConnectedCardsEmployees = connect(mapStateToProps)(
  WrappedComponent,
);
