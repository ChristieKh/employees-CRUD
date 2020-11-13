import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const COMPONENT_STYLE_NAME = 'Header';

type PropsType = {
  config: Array<{ id: number; name: string }>;
};

export const Header = memo(({ config }: PropsType) => (
  <ul className={cn(COMPONENT_STYLE_NAME)}>
    {config.map(({ name, id }) => (
      <li key={id} className={cn(`${COMPONENT_STYLE_NAME}__cell-${name}`)}>
        <p>{name.toUpperCase()}</p>
      </li>
    ))}
  </ul>
));
