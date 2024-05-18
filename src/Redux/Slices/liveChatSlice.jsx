import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name: "chat",
    initialState: {
        message: []
    },
    reducers:{
        setMessage: (state,action)=>{
            if(state.message.length >=50){
                state.message.shift()
            }
            state.message.push(action.payload)
        }
    }
})

export const {setMessage} = liveChatSlice.actions
export default liveChatSlice.reducer