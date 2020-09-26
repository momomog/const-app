import React, {useContext} from 'react'
import {YMaps, Map} from 'react-yandex-maps'
import {AppContext} from '../../AppWrapper'
import {Card, CardContent, Typography} from '@material-ui/core'
import {AppState} from '../../../reducers/appReducer'
import styles from './Location.module.css'

const Location: React.FC = () => {
    const {location}: AppState = useContext(AppContext)

    return (
        <div className={styles.wrapper}>
            <Card>
                <CardContent>
                    <Typography className={styles.title} color="textSecondary" gutterBottom>
                        Местоположение
                    </Typography>
                    <hr/>
                    <div className={styles.locationContainer}>
                        <YMaps>
                            <Map width={600}
                                 height={400}
                                 defaultState={{center: location, zoom: 12}}/>
                        </YMaps>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Location