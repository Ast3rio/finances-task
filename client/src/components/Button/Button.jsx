import React from 'react';
import styles from "./Button.module.scss";

export const Button = ({label, active, onClick}) => {
    return (
        <button
            className={`${styles.btn} ${active && styles.active}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

