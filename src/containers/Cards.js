import React from 'react';
import ItemCard from '../components/ItemCard';

export default function Card({data, selectItem, activeItem}) {

   const employees = data.map((employer) => {
       const {id} = employer;
        return (
            <div className="card item"
                 key={id}
                 onClick={() => {selectItem(id)}}>
                <ItemCard data={employer} activeItem={activeItem === id ? activeItem : null}/>
            </div>
        );
    });

    return (
        <div className="workers">
            {employees}
        </div>
    );
}