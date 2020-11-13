import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { PROJECTS } from '../../../_constants';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Project-menu';

export const ProjectMenu = memo(() => (
  <div className={cn(COMPONENT_STYLE_NAME)}>
    <div className={cn(`${COMPONENT_STYLE_NAME}__text-all`)}>
      <h4>ALL EMPLOYEES</h4>
    </div>
    <div className={cn(`${COMPONENT_STYLE_NAME}__title-project`)}>
      <h4>PROJECT</h4>
    </div>
    {PROJECTS.map(({ name, id }) => (
      <div className={cn(`${COMPONENT_STYLE_NAME}__item`)} key={id}>
        <p>{name}</p>
      </div>
    ))}
  </div>
));
