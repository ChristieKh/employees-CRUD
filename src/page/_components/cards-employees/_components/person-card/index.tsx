import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { EditIcon, DeleteIcon } from '../../../../../_components/icons';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Item-card';

type PropsType = {
  person: string;
  work: string;
  birthday: string;
  project: string;
};

export const PersonCard = memo(
  ({ person, work, birthday, project }: PropsType) => (
    <div className={cn(COMPONENT_STYLE_NAME)}>
      <div className={cn(`${COMPONENT_STYLE_NAME}__person`)}>
        <p className={cn(`${COMPONENT_STYLE_NAME}__person-text`)}>{person}</p>
      </div>
      <div className={cn(`${COMPONENT_STYLE_NAME}__project`)}>
        <p className={cn(`${COMPONENT_STYLE_NAME}__project-text`)}>{project}</p>
      </div>
      <div className={cn(`${COMPONENT_STYLE_NAME}__job-position`)}>
        <p className={cn(`${COMPONENT_STYLE_NAME}__job-position-text`)}>
          {work}
        </p>
      </div>
      <div className={cn(`${COMPONENT_STYLE_NAME}__birthday`)}>
        <p className={cn(`${COMPONENT_STYLE_NAME}__birthday-text`)}>
          {birthday}
        </p>
      </div>
      <div className={cn(`${COMPONENT_STYLE_NAME}__actions`)}>
        <div className={cn(`${COMPONENT_STYLE_NAME}__edit`)}>
          <EditIcon />
        </div>
        <div className={cn(`${COMPONENT_STYLE_NAME}__delete`)}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  ),
);
