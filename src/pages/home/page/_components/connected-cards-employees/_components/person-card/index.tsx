import React, { memo, useCallback } from 'react';
import classnames from 'classnames/bind';
import { EditIcon, DeleteIcon } from '../../../../../../../_components/icons';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const STYLE_NAME = 'Person-card';

type PropsType = {
  person: string;
  work: string;
  birthday: string;
  id: number;
  handleOpenDeleteModal: (id: number) => void;
  handleOpenEditModal: (id: number) => void;
};

export const PersonCard = memo(
  ({
    person,
    work,
    birthday,
    id,
    handleOpenDeleteModal,
    handleOpenEditModal,
  }: PropsType) => {
    const openDeleteModal = useCallback(() => handleOpenDeleteModal(id), [
      handleOpenDeleteModal,
      id,
    ]);

    const openEditModal = useCallback(() => handleOpenEditModal(id), [
      handleOpenEditModal,
      id,
    ]);

    return (
      <div className={cn(STYLE_NAME)}>
        <div className={cn(`${STYLE_NAME}__info`)}>
          <div className={cn(`${STYLE_NAME}__cell`, `${STYLE_NAME}__person`)}>
            <p className={cn(`${STYLE_NAME}__person-text`)}>{person}</p>
          </div>
          <div
            className={cn(`${STYLE_NAME}__cell`, `${STYLE_NAME}__job-position`)}
          >
            <p className={cn(`${STYLE_NAME}__job-position-text`)}>{work}</p>
          </div>
          <div className={cn(`${STYLE_NAME}__cell`, `${STYLE_NAME}__birthday`)}>
            <p className={cn(`${STYLE_NAME}__birthday-text`)}>{birthday}</p>
          </div>
        </div>

        <div className={cn(`${STYLE_NAME}__cell`, `${STYLE_NAME}__actions`)}>
          <button
            onClick={openEditModal}
            type="button"
            className={cn(`${STYLE_NAME}__edit`)}
          >
            <EditIcon />
          </button>
          <button
            onClick={openDeleteModal}
            type="button"
            className={cn(`${STYLE_NAME}__delete`)}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  },
);
