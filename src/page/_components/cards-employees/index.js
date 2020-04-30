import React, {memo, useCallback, useMemo} from 'react';
import { ItemCard } from './_components/item-card/ItemCard';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const COMPONENT_STYLE_NAME = 'Cards-employees';

export const CardsEmployees = memo(({employeesData, selectItem, activeItem}) => (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            {employeesData.map((employer) => {
                    const active = useMemo(() => activeItem === employer.id, [activeItem, employer]); // eslint-disable-line
                    const gender = useMemo(() => employer.gender === "m" ? "мужской" : "женский", [employer]);
                    const employ = useMemo(() => Boolean(employer.employ) ? "да" : "нет", [employer]);

                    const handleClickItem = useCallback(() => selectItem(employer.id), [employer]);

                    return (
                        <div className={cn(`${COMPONENT_STYLE_NAME}__card`, {
                            [`${COMPONENT_STYLE_NAME}__card-active`]: active
                        })}
                             key={employer.id}
                            role="button"
                             tabIndex={0}
                             onClick={handleClickItem}>
                            <ItemCard employer={employer} gender={gender} employ={employ}/>
                        </div>
                    );
                }
            )}
        </div>
    )
);