import React from 'react';
import ItemCard from './ItemCard';

export default function Card(props){
        var employees = props.data.map((employer, index) => {
            return (
                <div
                    className="item"
                    id={index}
                    key={index}
                    onClick={() => {props.selectItem(index)}}
                >
                    <ItemCard data={employer} index={index} />
                </div>
            );
        });

        return (
            <div className="workers">
                {employees}
            </div>
        );


}