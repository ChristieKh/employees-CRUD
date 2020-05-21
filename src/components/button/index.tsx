import React, { memo, useCallback } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const STYLE_NAME = 'Button';

type ButtonType = 'button' | 'submit' | 'reset';

type PropsType = {
  text: string;
  type: ButtonType;
  handleClick?: () => void;
};

export const Button = memo(
  ({ text, type = 'button', handleClick }: PropsType) => {
    const onClick = useCallback(
      (event) => {
        event.stopPropagation();

        if (handleClick) {
          handleClick();
        }
      },
      [handleClick],
    );

    return (
      <button
        className={cn(STYLE_NAME)}
        type={type} //eslint-disable-line
        onClick={onClick}
      >
        {text}
      </button>
    );
  },
);
