import React, {memo} from 'react';
import ItemCard from '../../../components/ItemCard';

export const CardsEmployees = memo(({data, selectItem, activeItem}) => (
        <div className="workers">
            {data.map((employer) =>
                <div className="card item"
                     key={employer.id}>
                    <ItemCard data={employer} activeItem={activeItem === employer.id ? activeItem : null}
                              selectItem={selectItem}/>
                </div>
            )}
        </div>
    )
);