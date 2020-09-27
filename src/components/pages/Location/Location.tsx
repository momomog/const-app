import React, {useContext, useState} from 'react'
import {YMaps, Map, Placemark} from 'react-yandex-maps'
import {AppContext} from '../../AppWrapper'
import {Card, CardContent, Typography} from '@material-ui/core'
import {AppState} from '../../../reducers/appReducer'
import styles from './Location.module.css'
import Loader from "../../core/Loader";

/*
 * Координаторы города на яндекс-карте
 */
const Location: React.FC = () => {
    const {location}: AppState = useContext(AppContext)
    const [mapLoading, setMapLoading] = useState<boolean>(true)
    const [mapError, setMapError] = useState<boolean>(false)

    return (
        <Card>
            <CardContent>
                <Typography className={styles.title} color="textSecondary" gutterBottom>
                    Местоположение
                </Typography>
                <hr/>
                {
                    mapLoading && <Loader size={75}/>
                }
                <div className={styles.locationContainer}>
                    <YMaps>
                        <Map width={600}
                             height={400}
                             defaultState={{center: location, zoom: 12}}
                             onError={() => setMapError(true)}
                             onLoad={() => setMapLoading(false)}
                        >
                            <Placemark geometry={location}/>
                        </Map>
                    </YMaps>
                    {
                        mapError && (
                            <Typography color="textSecondary" gutterBottom>
                                При загрузке карты произошла ошибка
                            </Typography>
                        )
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default Location