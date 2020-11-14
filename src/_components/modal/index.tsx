import React, { memo, Props } from 'react';
import classnames from 'classnames/bind';
import { Portal } from '../portal';
import { CloseIcon } from '../icons/close';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const STYLE_NAME = 'Modal';

type PropsType = {
  isShown: boolean;
  closeModal: () => void;
} & Props<any>;

export const Modal = memo(
  ({ isShown = false, children, closeModal }: PropsType) => (
    <>
      {isShown && (
        <Portal>
          <div className={cn(`${STYLE_NAME}__overlay`)}>
            <div className={cn(`${STYLE_NAME}__wrapper`)}>
              <div className={cn(`${STYLE_NAME}__content`)}>
                <div className={cn(`${STYLE_NAME}__header`)}>
                  <button
                    type="button"
                    aria-label="Close"
                    className={cn(`${STYLE_NAME}__close-button`)}
                    onClick={closeModal}
                  >
                    <CloseIcon />
                  </button>
                </div>
                <div className={cn(`${STYLE_NAME}__body`)}>{children}</div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  ),
);
