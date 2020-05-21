import React, { memo, useCallback, useMemo } from 'react';
import classnames from 'classnames/bind';
import { EmployeesType } from '../../_types';
import { PersonCard } from './_components/person-card';
import styles from './index.module.scss';


const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Cards-employees';

type PropsType = {
  employees: Array<EmployeesType>;
  choosePerson: (id: number) => void;
  activePersonId: number;
};

export const CardsEmployees = memo(
  ({ employees, choosePerson, activePersonId }: PropsType) => (
    <div className={cn(COMPONENT_STYLE_NAME)}>
      {employees.map(({ person, work, birthday, gender, employ, id }) => {
        const active = useMemo(() => activePersonId === id, [id]);

        const genderPerson = useMemo(
          () => (gender === 'm' ? 'мужской' : 'женский'),
          [gender],
        );

        const employPerson = useMemo(() => (Boolean(employ) ? 'да' : 'нет'), [
          employ,
        ]);

        const handleClickItem = useCallback(() => choosePerson(id), [id]);

        return (
          <div
            className={cn(`${COMPONENT_STYLE_NAME}__card`, {
              [`${COMPONENT_STYLE_NAME}__card-active`]: active,
            })}
            key={id}
            role="button"
            tabIndex={0}
            onClick={handleClickItem}
          >
            <PersonCard
              person={person}
              work={work}
              birthday={birthday}
              gender={genderPerson}
              employ={employPerson}
            />
          </div>
        );
      })}
    </div>
  ),
);
