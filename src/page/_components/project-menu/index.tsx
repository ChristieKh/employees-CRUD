import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { PROJECTS } from '../../_constants';
import styles from './index.module.scss';

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
    {PROJECTS.map(({ name }) => (
      <div className={cn(`${COMPONENT_STYLE_NAME}__item`)}>
        <p>{name}</p>
      </div>
    ))}
  </div>
));
