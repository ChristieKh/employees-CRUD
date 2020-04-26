import React from 'react';

const ItemCard = ({data, data: {id, person, work, birthday, gender, employ}, activeItem, selectItem}) => {

    const handleClick = () => selectItem(id);

    return (
        <div className={`item1 card-content ${activeItem ? "colorAdd" : ""}`} role="button"
             tabIndex={0} onClick={handleClick}>
            <p className="item__person">ФИО сотрудника: {data && person}</p>
            <p className="item__work">Должность: {data && work}</p>
            <p className="item__birthday">Дата рождения: {data && birthday}</p>
            <p className="item__gender">Пол: {data && gender === "m" ? "мужской" : "женский"}</p>
            <p className="item__employ">Уволен: {data && employ === true ? "да" : "нет"}</p>
        </div>
    );
};

export default ItemCard;