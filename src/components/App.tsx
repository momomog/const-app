import React, {Suspense} from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './Header/Header'
import Loader from "./core/Loader";

const About = React.lazy(() => import('./pages/About/About'))
const Location = React.lazy(() => import('./pages/Location/Location'))
const EnterTime = React.lazy(() => import('./pages/EnterTime/EnterTime'))

/*
 * Главный компонент приложения
 */
function App() {
    return (
        <>
            <Header/>
            <Suspense fallback={<Loader size={75}/>}>
                <Switch>
                    <Route exact path={['/', '/about']} component={About}/>
                    <Route path='/location' component={Location}/>
                    <Route path='/enter-time' component={EnterTime}/>
                    <Route path='*' component={About}/>
                </Switch>
            </Suspense>
        </>
    )
}

export default App
