import React, { memo, useState, useCallback } from 'react';
import classnames from 'classnames/bind';
import { CardsEmployees } from './_components/cards-employees';
import { EditableEmployerForm } from './_components/editable-employer-form';
import { EMPLOYEES } from './_constants';
import { EmployeesType } from './_types';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Page';

export const Page = memo(() => {
  const [employees, setEmployees] = useState(EMPLOYEES);
  const [activePersonId, setActiveItem] = useState(0);

  const choosePerson = useCallback(
    (id) => setActiveItem(id !== activePersonId ? id : 0),
    [activePersonId],
  );

  const addNewPerson = (newEmployee: EmployeesType) =>
    setEmployees([...employees, newEmployee]);

  const deletePerson = () => {
    // console.info('employeesData', employeesData, activeItem);
    // employeesData.splice(activeItem, 1);
    // this.setState({employees});
    // e.preventDefault();
  };

  const onChangePerson = (employee: any) => {
    // const {employeesData, activeItem} = this.state;
    // let newData = employeesData;
    // const newDataItem = newData[activeItem];
    // dataItem.person ? newDataItem.person = dataItem.person : newDataItem.person = data[activeItem].person;
    // dataItem.work ? newDataItem.work = dataItem.work : newDataItem.work = data[activeItem].work;
    // dataItem.birthday ? newDataItem.birthday = dataItem.birthday : newDataItem.birthday = data[activeItem].birthday;
    // dataItem.gender ? newDataItem.gender = dataItem.gender : newDataItem.gender = data[activeItem].gender;
    // dataItem.employ ? newDataItem.employ = dataItem.employ : newDataItem.employ = data[activeItem].employ;
    // this.setState({
    //     ...this.state,
    //     data: newData
    // });
  };

  return (
    <div className={cn(COMPONENT_STYLE_NAME)}>
      <div className={cn(`${COMPONENT_STYLE_NAME}__wrapper`)}>
        <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>
          <h1 className={cn('Text')}>Список сотрудников</h1>
        </div>
        <div className={cn(`${COMPONENT_STYLE_NAME}__content`)}>
          <div className={cn(`${COMPONENT_STYLE_NAME}__cards-box`)}>
            <CardsEmployees
              employees={employees}
              choosePerson={choosePerson}
              activePersonId={activePersonId}
            />
          </div>
          <div className={cn(`${COMPONENT_STYLE_NAME}__form-box`)}>
            <EditableEmployerForm
              person={employees[activePersonId - 1]}
              addNewPerson={addNewPerson}
              deletePerson={deletePerson}
              onChangePerson={onChangePerson}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
