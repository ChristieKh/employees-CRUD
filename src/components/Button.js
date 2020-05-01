import React, {memo, useCallback} from 'react';
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const STYLE_NAME = 'Button';

export const Button = memo(({text, handleClick}) => {

    const onClick = useCallback((event) => {
        event.preventDefault();
        handleClick();
    }, [handleClick]);

    return(
        <button className={cn(STYLE_NAME)} onClick={onClick}>{text}</button>
    )
});