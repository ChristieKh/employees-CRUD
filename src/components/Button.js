import React, {memo, useCallback} from 'react';
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const STYLE_NAME = 'Button';

export const Button = memo(({text, type, handleClick}) => {

    const onClick = useCallback(
        event => {
            event.stopPropagation();

            if (Boolean(handleClick)) {
                handleClick();
            }

        }, [handleClick]);

    return(
        <button className={cn(STYLE_NAME)} type={type} onClick={onClick}>{text}</button>
    )
});