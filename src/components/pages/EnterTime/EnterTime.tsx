import React, {useContext, useEffect, useState} from 'react'
import {AppState} from '../../../reducers/appReducer'
import {AppContext} from '../../AppWrapper'
import {Card, CardContent, Typography} from '@material-ui/core'

import styles from './EnterTime.module.css'

let interval: number

const EnterTime: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<number>(Date.now())
    const {enterTime}: AppState = useContext(AppContext)

    useEffect(() => {
        interval = window.setInterval(() => setCurrentTime(Date.now()), 1000)
        return () => clearInterval(interval)
    }, [])

    const [hours, minutes, seconds] = getVisitTime(enterTime, currentTime)

    return (
        <div className={styles.wrapper}>
            <Card>
                <CardContent>
                    <Typography className={styles.title} color="textSecondary" gutterBottom>
                        Таймер
                    </Typography>
                    <hr/>
                    <div className={styles.timerContent}>
                        <h3>Со времени открытия сайта прошло</h3>
                        <div className={styles.timer}>
                            {`${hours} : ${minutes} : ${seconds}`}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default EnterTime


function getVisitTime(enterTime: number, currentTime: number): Array<string | number> {
    const diff = currentTime - enterTime,
        secs = Math.floor((diff / 1000) % 60),
        mins = Math.floor((diff / (1000 * 60)) % 60),
        hours = Math.floor((diff / (1000 * 60 * 60)) % 24)

    return [
        hours > 9 ? hours : `0${hours}`,
        mins > 9 ? mins : `0${mins}`,
        secs > 9 ? secs : `0${secs}`
    ]
}