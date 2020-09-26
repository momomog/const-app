import React, {useEffect, useReducer} from 'react'
import {appReducer, AppState, initialState, setEnterTimeAction} from "../reducers/appReducer"
import App from './App'
import {BrowserRouter} from 'react-router-dom'

export const AppContext: React.Context<AppState> = React.createContext(initialState)

const AppWrapper = () => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    useEffect(() => {
        dispatch(setEnterTimeAction())
    }, [])

    return (
        <AppContext.Provider value={state}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default AppWrapper
