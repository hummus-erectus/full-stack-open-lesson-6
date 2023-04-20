import { createSlice } from "@reduxjs/toolkit"

const notficationSlice = createSlice({
    name: 'notification',
    initialState: 'Test notification',
    reducers: {
        setNotification(state, action) {
            return action.payload
        }
    }
})

export default notficationSlice.reducer