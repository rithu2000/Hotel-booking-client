import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { alertsSlice } from './AlertSlice'
import { userSlice } from './UserSlice'

const rootReducer = combineReducers({
    alerts: alertsSlice.reducer,
    user: userSlice.reducer
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;