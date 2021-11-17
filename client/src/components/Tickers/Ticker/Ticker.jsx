import React, {useEffect, useMemo, useState} from 'react';
import styles from "./Ticker.module.scss";
import {getDate, getTime} from "../../../utils/getDate";
import {arrowIco} from "../../../assets/imagesConstants";

const different = (percent, newPercent) => {
    let result = Math.round((newPercent - percent)*100)/100;
    return result < 0 ? 1 : 0;
}

export const Ticker = ({ticker, price, change_percent, last_trade_time}) => {

    const [newPrice, setNewPrice] = useState(0)
    const [active, setActive] = useState(0)

    const percentDifferent = useMemo(() => 
        different(price, newPrice), 
        [price, newPrice]
    )

    useEffect(() => {
        setNewPrice(price)
        setActive(percentDifferent)
    }, [price])

    return (
        <li className={styles.item}>
            <div className={styles.ticker}>
                {ticker}
            </div>
            <div className={styles.price}>
                {`$ ${price}`}
            </div>
            <div className={styles.date}>
                {`${getDate(last_trade_time)} ${getTime(last_trade_time)}`}
            </div>
            <div className={`${styles.percent} ${active === 1 && styles.active}`}>
                <img className={styles.percent_img} src={arrowIco} alt="arrow"/>
                {`${change_percent} %`}
            </div>
        </li>
    );
};
