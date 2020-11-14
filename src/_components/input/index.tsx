import React, { ChangeEvent, memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Input';

type PropsType = {
  input?: {
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => any;
  };
  id: string;
};

export const Input = memo(({ input: { onChange, value }, id }: PropsType) => (
  <input
    className={cn(COMPONENT_STYLE_NAME)}
    onChange={onChange}
    value={value}
    id={id}
  />
));
