import React, {useState} from 'react';
import styles from './Tickers.module.scss';
import Ticker from "./Ticker";
import {Button} from "../Button/Button";

export const Tickers = ({tickers}) => {

    const [onSort, setOnSort] = useState(false);

    return (
        <div className={styles.tickers}>
            <Button
                label='Sort by Price'
                active={onSort}
                onClick={() => setOnSort(current => !current)}
            />
            <ul className={styles.list}>
                {tickers.sort((a, b) => onSort && a.price < b.price ? 1 : -1)
                    .map(({ticker, ...tickers}) =>
                        <Ticker key={ticker} ticker={ticker} {...tickers} />
                    )}
            </ul>
        </div>
    );
};
