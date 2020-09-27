import React, {useContext, useEffect, useRef, useState} from 'react'
import {AppState} from '../../../reducers/appReducer'
import {AppContext} from '../../AppWrapper'
import {Card, CardContent, Typography} from '@material-ui/core'
import moment from 'moment'
import styles from './EnterTime.module.css'

/*
 * Время нахождения пользователя на сайте.
 * PS. После перезагрузки страницы время будет слетать
 */
const EnterTime: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<number>(Date.now())
    const {enterTime}: AppState = useContext(AppContext)
    let interval = useRef<number>(0)

    useEffect(() => {
        interval.current = window.setInterval(() => setCurrentTime(Date.now()), 1000)
        return () => clearInterval(interval.current)
    }, [])

    const [hours, minutes, seconds] = getVisitedTime(enterTime, currentTime)

    return (
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
    )
}

export default EnterTime


function getVisitedTime(enterTime: number, currentTime: number): Array<string | number> {
    const temp = moment.duration(currentTime - enterTime),
        hours = temp.hours(),
        mins = temp.minutes(),
        secs = temp.seconds()

    return [
        hours > 9 ? hours : `0${hours}`,
        mins > 9 ? mins : `0${mins}`,
        secs > 9 ? secs : `0${secs}`
    ]
}