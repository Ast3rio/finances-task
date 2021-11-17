import React from "react"
import styles from './App.module.scss';
import socket from "./socket";
import {useEffect} from "react";
import {Tickers} from "./components/Tickers/Tickers";
import {useDispatch, useSelector} from "react-redux";
import {getTickers} from "./redux/actionCreators/actionCreators";
import {Title} from "./components/Title/Title";


const App = () => {

    const app = useSelector(state => state.app)
    const tickers = useSelector(state => state.tickers.tickers)
    const dispatch = useDispatch()

    const {loading, error} = app

    useEffect(() => {
        socket.on('connect', () => {
            console.log('connect to socket')
        })
        socket.emit('start');
        socket.on('ticker', (res, req) => dispatch(getTickers(res, req)))

        return () => {
            socket.on('disconnect', () => {
                console.log('disconnect from socket')
            })
        }
    }, [dispatch])

    if (loading) return <div>loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div className={styles.app}>
            <div className="container">
                <Title title={'Finance tickers'}/>
                <Tickers tickers={tickers}/>
            </div>
        </div>
    )
}

export default App;
