import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { CardsEmployees } from './_components/cards-employees';
import { ProjectMenu } from './_components/project-menu';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Page';

export const Page = memo(() => (
  <div className={cn(COMPONENT_STYLE_NAME)}>
    <div className={cn(`${COMPONENT_STYLE_NAME}__wrapper`)}>
      <div className={cn(`${COMPONENT_STYLE_NAME}__title`)}>
        <h1 className={cn('Text')}>Employees</h1>
      </div>
      <div className={cn(`${COMPONENT_STYLE_NAME}__content`)}>
        <div className={cn(`${COMPONENT_STYLE_NAME}__menu`)}>
          <ProjectMenu />
        </div>
        <div className={cn(`${COMPONENT_STYLE_NAME}__cards-box`)}>
          <CardsEmployees />
        </div>
      </div>
    </div>
  </div>
));
