import { createSlice } from "@reduxjs/toolkit"

const notficationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        removeNotification(state, action) {
            return null
        }
    }
})

export const { setNotification, removeNotification } = notficationSlice.actions

export default notficationSlice.reducer