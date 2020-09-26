enum Actions {
    SET_ENTER_TIME = 'SET_ENTER_TIME'
}

export interface AppState {
    enterTime: number           // Время входа на сайт (ms)
    location: Array<number>     // координаты г. Ульяновск
}

export interface Action {
    type: Actions
    payload?: any
}

export const setEnterTimeAction = (): Action => ({type: Actions.SET_ENTER_TIME})


export const initialState: AppState = {
    enterTime: 0,
    location: [54.305, 48.40]
}

export const appReducer = (state: AppState, action: Action): AppState => {
    if (action.type === Actions.SET_ENTER_TIME) {
        return {
            ...state,
            enterTime: Date.now()
        }
    }
    return state
}