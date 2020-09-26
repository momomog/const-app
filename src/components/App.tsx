import React, {Suspense} from 'react'
import {Route, Switch} from 'react-router-dom'
import {CircularProgress} from '@material-ui/core'

import Header from './Header/Header'

const About = React.lazy(() => import('./pages/About/About'))
const Location = React.lazy(() => import('./pages/Location/Location'))
const EnterTime = React.lazy(() => import('./pages/EnterTime/EnterTime'))

function App() {
    return (
        <>
            <Header/>
            <Suspense fallback={<CircularProgress/>}>
                <Switch>
                    <Route exact path={['/', '/about']} component={About}/>
                    <Route path='/location' component={Location}/>
                    <Route path='/enter-time' component={EnterTime}/>
                </Switch>
            </Suspense>
        </>
    )
}

export default App
