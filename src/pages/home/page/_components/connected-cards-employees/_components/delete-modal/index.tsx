import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Modal } from '../../../../../../../_components/modal';
import { Button } from '../../../../../../../_components/button';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Delete-modal';

type PropsType = {
  isModalOpened: boolean;
  closeModal: () => void;
  deleteEmployee: () => void;
};

export const DeleteModal = memo(
  ({ isModalOpened, closeModal, deleteEmployee }: PropsType) => (
    <Modal isShown={isModalOpened} closeModal={closeModal}>
      <p>Вы действительно хотите удалить сотрудника?</p>
      <div className={cn(`${COMPONENT_STYLE_NAME}__buttons`)}>
        <div className={cn(`${COMPONENT_STYLE_NAME}__button`)}>
          <Button text="Да" type="button" handleClick={deleteEmployee} />
        </div>
        <div className={cn(`${COMPONENT_STYLE_NAME}__button`)}>
          <Button
            text="Отмена"
            type="button"
            variant="interface"
            handleClick={closeModal}
          />
        </div>
      </div>
    </Modal>
  ),
);
