import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT, REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const intialState = {
        alerts: null
    };
    // or just const AlertState = null;

    // Set Alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        }) ;
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    };

    const [state, dispatch] = useReducer(AlertReducer, intialState);

    return <AlertContext.Provider value={{
        alert: state,
        setAlert
    }}
    >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;