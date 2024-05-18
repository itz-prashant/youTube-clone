import { configureStore } from "@reduxjs/toolkit"
import toggleReducer from '../Slices/MenuToggleSlice'
import chatReducer from '../Slices/liveChatSlice'
import videoReducer from '../Slices/VideoSlice'

const store = configureStore({
    reducer:{
        toggle: toggleReducer,
        chat: chatReducer,
        video: videoReducer
    }
})

export default store;