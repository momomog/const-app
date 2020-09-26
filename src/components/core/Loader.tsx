import React from 'react'
import {CircularProgress} from "@material-ui/core";

import styles from './Loader.module.css'

interface Props {
    size: number
}

/*
 * Индикатор загрузки
 */
const Loader: React.FC<Props> = ({size}) => {
    return (
        <div className={styles.wrapper}>
            <CircularProgress size={size}/>
        </div>
    )
}

export default Loader