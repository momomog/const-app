import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Header.module.css'

export const Header = () => {
    return (
        <nav className={style.nav}>
            <NavLink to='/about' activeClassName={style.active}>
                О себе
            </NavLink>
            <NavLink to='/location' activeClassName={style.active}>
                Карта
            </NavLink>
            <NavLink to='/enter-time' activeClassName={style.active}>
                Таймер
            </NavLink>
        </nav>
    )
}

export default Header