import React, {useState} from 'react';
import styles from './Tickers.module.scss';
import {getDate, getTime} from "../../utils/getDate";

export const Tickers = ({tickers}) => {

    const [onSort, setOnSort] = useState(false);

    return (
        <div className={styles.tickers}>
            <button
                className={`${styles.btn} ${onSort && styles.active}`}
                onClick={() => setOnSort(current => !current)}
            >
                Sort by Price
            </button>
            <ul className={styles.list}>
                {tickers.sort((a, b) => onSort && a.price < b.price ? 1 : -1)
                    .map(({ticker, price, change_percent, last_trade_time}) =>
                        <li className={styles.list_item} key={ticker}>
                            <div className={styles.ticker}>
                                {ticker}
                            </div>
                            <div className={styles.price}>
                                {price}
                            </div>
                            <div className={styles.date}>
                                {getDate(last_trade_time)}
                                {' '}
                                {getTime(last_trade_time)}
                            </div>
                            <div className={styles.percent}>
                                {change_percent}
                            </div>
                        </li>
                    )}
            </ul>
        </div>
    );
};
