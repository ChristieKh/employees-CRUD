import React, { memo, useMemo } from 'react';
import classnames from 'classnames/bind';
import { EMPLOYEES } from '../../_constants';
import { PersonCard } from './_components/person-card';
import { Header } from './_components/header';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Cards-employees';

export const CardsEmployees = memo(() => {
  const cells = useMemo(() => Object.keys(EMPLOYEES[0]).slice(1), []);

  return (
    <div className={cn(COMPONENT_STYLE_NAME)}>
      <Header cells={cells} />
      {EMPLOYEES.map(({ person, work, birthday, project, id }) => (
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
            project={project}
          />
        </div>
      ))}
    </div>
  );
});
