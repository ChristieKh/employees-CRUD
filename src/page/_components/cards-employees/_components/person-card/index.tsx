import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Item-card';

type PropsType = {
  person: string;
  work: string;
  birthday: string;
  gender: string;
  employ: string;
};

export const PersonCard = memo(
  ({ person, work, birthday, gender, employ }: PropsType) => (
    <div className={cn(COMPONENT_STYLE_NAME)}>
      <div className={cn(`${COMPONENT_STYLE_NAME}__person`)}>
        <p className={cn(`${COMPONENT_STYLE_NAME}__person-text`)}>{person}</p>
      </div>
        <div className={cn(`${COMPONENT_STYLE_NAME}__project`)}>
            <p className={cn(`${COMPONENT_STYLE_NAME}__project-text`)}>{'Name Project'}</p>
        </div>
      <div className={cn(`${COMPONENT_STYLE_NAME}__job-position`)}>
        <p className={cn(`${COMPONENT_STYLE_NAME}__job-position-text`)}>{work}</p>
      </div>
      <div className={cn(`${COMPONENT_STYLE_NAME}__birthday`)}>
        <p className={cn(`${COMPONENT_STYLE_NAME}__birthday-text`)}>
          {birthday}
        </p>
      </div>
      <div className={cn(`${COMPONENT_STYLE_NAME}__actions`)}>
        <p className={cn(`${COMPONENT_STYLE_NAME}__actions-text`)}>{'actions'}</p>
      </div>
    </div>
  ),
);
