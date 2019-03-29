import React from 'react';

const ItemCard = ({data, data: {person, work, birthday, gender, employ}, activeItem}) => {
        return (
            <div className={`item1 card-content ${activeItem ? "colorAdd" : ""}`}>
                    <p className="item__person">ФИО сотрудника: {data && person}</p>
                    <p className="item__work">Должность: {data && work}</p>
                    <p className="item__birthday">Дата рождения: {data && birthday}</p>
                    <p className="item__gender">Пол: {data && gender === "m" ? "мужской" : "женский"}</p>
                    <p className="item__employ">Уволен: {data && employ === true ? "да" : "нет" }</p>
                </div>
        );
};

export default ItemCard;