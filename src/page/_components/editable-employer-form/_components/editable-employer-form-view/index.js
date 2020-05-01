import React, {memo} from 'react';
import {Button} from "../../../../../components/Button";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const STYLE_NAME = 'Editable-employer-form-view';

export const EditableEmployerFormView = memo(({handleAddNewEmployer, handleDeleteEmployer}) => (
    <div className={cn(STYLE_NAME)}>
        <div className={cn(`${STYLE_NAME}__buttons`)}>
            <Button text="Добавить нового сотрудника" handleClick={handleAddNewEmployer}/>
            <Button text="Удалить сотрудника" handleClick={handleDeleteEmployer}/>
        </div>
    </div>
));