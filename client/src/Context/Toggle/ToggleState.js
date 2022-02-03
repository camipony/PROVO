import React, {useReducer} from 'react'

import ToggleReducer from './ToggleReducer'
import  ToggleContext from './ToggleContext'

const ToggleState = (props) => {

    const inicialState = {
        activeToggle: false
    }

    const [state, dispatch] = useReducer(ToggleReducer, inicialState)

    const maxMinMenu = () => {
        dispatch({
            type: 'ACTIVE_TOGGLE',
            payload: !state.activeToggle
        })
    }

    return <ToggleContext.Provider value = {{
        activeToggle: state.activeToggle,
        maxMinMenu
    }} >
        {props.children}
    </ToggleContext.Provider>
}

export default ToggleState