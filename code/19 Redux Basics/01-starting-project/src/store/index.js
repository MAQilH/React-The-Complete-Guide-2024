import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialCounterState = {
    counter: 0,
    show: true
}

const counterSlice = createSlice({
    initialState: initialCounterState, 
    name: 'counter',
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter += action.payload
        },
        toggle(state) {
            state.show = !state.show
        }
    },
})

const initialAuthState = {
    isAuthentication: true
}

const authSlice = createSlice({
    initialState: initialAuthState,
    name: 'authentication',
    reducers: {
        login(state) {
            state.isAuthentication = true
        },
        logout(state) {
            state.isAuthentication = false
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store