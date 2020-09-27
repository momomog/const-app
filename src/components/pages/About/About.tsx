import React from 'react'
import {Card, CardContent, TextField, Typography} from '@material-ui/core'
import avatar from '../../../static/avatar.png'
import styles from './About.module.css'

/*
 * Мэйн информация обо мне
 */
const About: React.FC = () => {
    const me: Array<{ prop: string, value: string }> = [{
        prop: 'Имя',
        value: 'Сергей'
    }, {
        prop: 'Фамилия',
        value: 'Фокин'
    }, {
        prop: 'Возраст',
        value: '26'
    }, {
        prop: 'Образование',
        value: 'Высшее'
    }]

    return (
        <Card>
            <CardContent className={styles.root}>
                <Typography className={styles.title} color="textSecondary" gutterBottom>
                    О себе
                </Typography>
                <hr/>
                <div className={styles.mainInfo}>
                    <img alt="me" src={avatar} className={styles.avatar}/>
                    <div className={styles.form}>
                        {
                            me.map(item => (
                                <TextField
                                    key={item.value}
                                    className={styles.textfield}
                                    label={item.prop}
                                    defaultValue={item.value}
                                    id="standard-read-only-input"
                                    InputProps={{
                                        readOnly: true
                                    }}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.description}>
                    <TextField
                        className={styles.area}
                        id="standard-multiline-static"
                        label="Описание"
                        multiline
                        rows={8}
                        InputProps={{
                            readOnly: true
                        }}
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam asperiores assumenda atque distinctio dolor id illum inventore ipsa laboriosam magnam maiores modi, nisi quibusdam quisquam repellat sequi, sint soluta voluptate voluptatem! Assumenda consequatur et ex explicabo iusto minus omnis totam velit vero voluptate? Accusantium architecto asperiores aspernatur autem beatae consequuntur cum debitis delectus deleniti dicta distinctio dolores dolorum ducimus ea harum ipsum itaque."
                    />
                </div>
            </CardContent>
        </Card>
    )
}

export default About