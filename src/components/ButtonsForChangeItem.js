import React from 'react';

const ButtonsForChangeItem = ({addItem, deleteItem}) => {
    return (
        <div className="buttons">
            <button className="btn btn-add blue"
                    onClick={addItem}>
                <span><i className="fa fa-plus"/>Добавить сотрудника</span>
            </button>
            <button className="btn btn-del blue"
                    onClick={deleteItem}>
                <span><i className="fa fa-remove"/>Удалить сотрудника</span>
            </button>
        </div>
    )
};

export default ButtonsForChangeItem;