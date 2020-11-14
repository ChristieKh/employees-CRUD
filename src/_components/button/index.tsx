import React, { memo, useCallback } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const STYLE_NAME = 'Button';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'accent' | 'interface';

type PropsType = {
  text: string;
  type: ButtonType;
  handleClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
};

export const Button = memo(
  ({
    text,
    type = 'button',
    handleClick,
    variant = 'accent',
    disabled,
  }: PropsType) => {
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
        className={cn(
          STYLE_NAME,
          {
            [`${STYLE_NAME}__accent`]: variant === 'accent',
          },
          {
            [`${STYLE_NAME}__interface`]: variant === 'interface',
          },
        )}
        type={type} //eslint-disable-line
        onClick={onClick}
        disabled={disabled} // TODO: add in style
      >
        {text}
      </button>
    );
  },
);
