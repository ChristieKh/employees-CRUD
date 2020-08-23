import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { HEADER_EMPLOYEE_CARD } from '../../../../_constants';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Header';

export const Header = memo(() => (
  <ul className={cn(COMPONENT_STYLE_NAME)}>
    {HEADER_EMPLOYEE_CARD.map(({ name, id }) => (
      <li key={id} className={cn(`${COMPONENT_STYLE_NAME}__cell-${name}`)}>
        <p>{name.toUpperCase()}</p>
      </li>
    ))}
  </ul>
));
