import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Button } from '../../../_components/button';
import { ConnectedCardsEmployees } from './_components/connected-cards-employees';
import { ProjectMenu } from './_components/project-menu';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Page';

export const Page = memo(() => (
  <div className={cn(COMPONENT_STYLE_NAME)}>
    <div className={cn(`${COMPONENT_STYLE_NAME}__wrapper`)}>
      <div className={cn(`${COMPONENT_STYLE_NAME}__header`)}>
        <h1 className={cn('Text')}>Employees</h1>
        <Button text="Add new employee" type="button" />
      </div>
      <div className={cn(`${COMPONENT_STYLE_NAME}__content`)}>
        <div className={cn(`${COMPONENT_STYLE_NAME}__menu`)}>
          <ProjectMenu />
        </div>
        <div className={cn(`${COMPONENT_STYLE_NAME}__cards-box`)}>
          <ConnectedCardsEmployees />
        </div>
      </div>
    </div>
  </div>
));
