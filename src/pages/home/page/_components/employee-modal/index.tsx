import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { Modal } from '../../../../../_components/modal';
import { Button } from '../../../../../_components/button';
import { InputForm } from '../../../../../_components/input-form';
import { SelectForm } from '../../../../../_components/select-form';
import { JOB_LIST } from '../../../_constants';
import { DatePicker } from '../../../../../_components/date-picker';
import {
  EmployeeDataType,
  getInitialEmployee,
} from '../../../_redux/employees-module';
import { ReduxStoreType } from '../../../_redux/_types';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Employee-modal';

type PropsType = {
  isModalOpened: boolean;
  text?: string;
  initialEmployee: EmployeeDataType;
  closeModal: () => void;
  onSubmit: (values: EmployeeDataType) => void;
};

export const WrappedComponent = memo(
  ({
    isModalOpened,
    closeModal,
    text,
    onSubmit,
    initialEmployee,
  }: PropsType) => (
    <Modal isShown={isModalOpened} closeModal={closeModal}>
      <div className={cn(`${COMPONENT_STYLE_NAME}__header`)}>
        <h2>{text}</h2>
      </div>
      <div className={cn(`${COMPONENT_STYLE_NAME}__content`)}>
        <Form
          initialValues={initialEmployee}
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              className={cn(`${COMPONENT_STYLE_NAME}__form`)}
            >
              <div className={cn(`${COMPONENT_STYLE_NAME}__field`)}>
                <Field
                  name="person"
                  component={InputForm}
                  id="input-name"
                  label="Имя сотрудника"
                />
              </div>
              <div className={cn(`${COMPONENT_STYLE_NAME}__field`)}>
                <Field
                  name="work"
                  component={SelectForm}
                  options={JOB_LIST}
                  id="select-job"
                  label="Должность"
                />
              </div>
              <div className={cn(`${COMPONENT_STYLE_NAME}__field`)}>
                <Field
                  name="birthday"
                  component={DatePicker}
                  label="Дата рождения"
                />
              </div>
              <div className={cn(`${COMPONENT_STYLE_NAME}__buttons`)}>
                <div className={cn(`${COMPONENT_STYLE_NAME}__button`)}>
                  <Button text="Сохранить" type="submit" />
                </div>
                <div className={cn(`${COMPONENT_STYLE_NAME}__button`)}>
                  <Button
                    text="Отмена"
                    type="button"
                    variant="interface"
                    handleClick={closeModal}
                  />
                </div>
              </div>
            </form>
          )}
        />
      </div>
    </Modal>
  ),
);

const mapStateToProps = (state: ReduxStoreType) => ({
  initialEmployee: getInitialEmployee(state),
});

export const ConnectedEmployeeModal = connect(mapStateToProps)(
  WrappedComponent,
);
