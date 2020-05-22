import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Header';

type PropsType = {
  cells: Array<string>;
};

export const Header = memo(({ cells }: PropsType) => (
  <div>
    {cells.map((cell) => (
      <p>{cell}</p>
    ))}
  </div>
));
