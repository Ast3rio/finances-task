import React, {useState, useEffect} from 'react'
import styles from './Tickers.module.scss'
import Ticker from './Ticker'
import {Button} from '../Button/Button'

export const Tickers = ({tickers}) => {
    const [onSort, setOnSort] = useState(false)
    const setSort = () => {
        if(!onSort) sessionStorage.setItem('sortByPrice', true)
        if(onSort) sessionStorage.setItem('sortByPrice', false)
        setOnSort(current => !current)
    }

    useEffect(() => {
        const sortParametr = sessionStorage.getItem('sortByPrice')
        if(sortParametr === 'true') setOnSort(true)
        if(sortParametr === 'false') setOnSort(false)
    }, [])

    return (
        <div className={styles.tickers}>
            <Button
                label='Sort by Price'
                active={onSort}
                onClick={setSort}
            />
            <ul className={styles.list}>
                {tickers?.sort((a, b) => onSort && a.price < b.price ? 1 : -1)
                    .map(({ticker, ...tickers}) =>
                        <Ticker key={ticker} ticker={ticker} {...tickers} />
                    )}
            </ul>
        </div>
    )
}
