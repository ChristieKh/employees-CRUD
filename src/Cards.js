import React from 'react';
import ItemCard from './ItemCard';

export default function Card({data, selectItem}) {

    let employees = data.map((employer, index) => {
        return (
            <div className="card item"
                 id={index}
                 key={index}
                 onClick={() => {selectItem(index)}}>
                <ItemCard data={employer} index={index}/>
            </div>
        );
    });

    return (
        <div className="workers">
            {employees}
        </div>
    );
}