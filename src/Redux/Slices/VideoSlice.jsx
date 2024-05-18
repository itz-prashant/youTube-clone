import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name: "video",
    initialState: {
        video: [],
        category: "All",
        searchSuggestion: []
    },
    reducers:{
        setHomeVideo: (state, action)=>{
            state.video = action.payload
        },
        setCategory: (state,action)=>{
            state.category = action.payload
        },
    }
})
export const {setHomeVideo, setCategory} = VideoSlice.actions
export default VideoSlice.reducer