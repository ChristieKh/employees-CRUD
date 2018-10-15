import React from 'react';


export default function ItemCard(props) {
        return (
            <div>
                <div className="item1" >
                    <p className="item__person">ФИО сотрудника: {props.data ? props.data.person : null}</p>
                    <p className="item__work">Должность: {props.data ? props.data.work : null}</p>
                    <p className="item__birthday">Дата рождения: {props.data ? props.data.birthday : null}</p>
                    <p className="item__gender">Пол: {props.data ? props.data.gender === "m" ? "мужской" : "женский" : null}</p>
                    <p className="item__employ">Уволен: {props.data ? props.data.employ === true ? "да" : "нет" : null}</p>
                </div>
            </div>
        );
}