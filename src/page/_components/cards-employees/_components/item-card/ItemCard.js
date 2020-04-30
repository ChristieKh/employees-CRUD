import React, {memo} from 'react';
import classnames from 'classnames/bind';
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Item-card';

export const ItemCard = memo(({employer: {person, work, birthday}, gender, employ}) => (
    <div className={cn(COMPONENT_STYLE_NAME)}>
            <div className={cn(`${COMPONENT_STYLE_NAME}__block`, `${COMPONENT_STYLE_NAME}__person`)}>
                    <p className={cn(`${COMPONENT_STYLE_NAME}__label`,
                        `${COMPONENT_STYLE_NAME}__person-label`)}>ФИО сотрудника:</p>
                    <p className={cn(`${COMPONENT_STYLE_NAME}__person-text`)}>{person}</p>
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__block`, `${COMPONENT_STYLE_NAME}__work`)}>
                    <p className={cn(`${COMPONENT_STYLE_NAME}__label`,
                        `${COMPONENT_STYLE_NAME}__work-label`)}>Должность:</p>
                    <p className={cn(`${COMPONENT_STYLE_NAME}__work-text`)}>{work}</p>
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__block`, `${COMPONENT_STYLE_NAME}__birthday`)}>
                    <p className={cn(`${COMPONENT_STYLE_NAME}__label`,
                        `${COMPONENT_STYLE_NAME}__birthday-label`)}>Дата рождения:</p>
                    <p className={cn(`${COMPONENT_STYLE_NAME}__birthday-text`)}>{birthday}</p>
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__block`, `${COMPONENT_STYLE_NAME}__gender`)}>
                    <p className={cn(`${COMPONENT_STYLE_NAME}__label`,
                        `${COMPONENT_STYLE_NAME}__gender-label`)}>Пол:</p>
                    <p className={cn(`${COMPONENT_STYLE_NAME}__gender-text`)}>{gender}</p>
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__block`, `${COMPONENT_STYLE_NAME}__employ`)}>
                    <p className={cn(`${COMPONENT_STYLE_NAME}__label`,
                        `${COMPONENT_STYLE_NAME}__employ-label`)}>Уволен:</p>
                    <p className={cn(`${COMPONENT_STYLE_NAME}__employ-text`)}>{employ}</p>
            </div>
    </div>
));