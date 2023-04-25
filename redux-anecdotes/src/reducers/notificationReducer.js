import { createSlice } from "@reduxjs/toolkit"

const notficationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        newNotification(state, action) {
            return action.payload
        },
        removeNotification(state, action) {
            return null
        }
    }
})

export const { newNotification, removeNotification } = notficationSlice.actions

export const setNotification = (message, timeout) => {
    console.log("message", message)
    console.log("timeout", timeout)
    return dispatch => {
        dispatch(newNotification(message))
        setTimeout(() => dispatch(removeNotification()), timeout*1000)
    }
}

export default notficationSlice.reducer