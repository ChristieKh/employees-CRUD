import React, { memo,  useMemo } from 'react';
import classnames from 'classnames/bind';
import { EMPLOYEES } from '../../_constants';
import { PersonCard } from './_components/person-card';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Cards-employees';

export const CardsEmployees = memo(() => (
  <div className={cn(COMPONENT_STYLE_NAME)}>
    {EMPLOYEES.map(({ person, work, birthday, gender, employ, id }) => {
      const genderPerson = useMemo(
        () => (gender === 'm' ? 'мужской' : 'женский'),
        [gender],
      );

      const employPerson = useMemo(() => (Boolean(employ) ? 'да' : 'нет'), [
        employ,
      ]);

      return (
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
            gender={genderPerson}
            employ={employPerson}
          />
        </div>
      );
    })}
  </div>
));
