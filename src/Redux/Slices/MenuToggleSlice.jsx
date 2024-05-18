import { createSlice } from "@reduxjs/toolkit";


export const MenuToggleSlice = createSlice({
    name: "toggle",
    initialState: {
        open: false
    },
    reducers:{
        toggleSidebar: (state,action)=>{
            state.open = action.payload
        }
    }
})

export const { toggleSidebar } =  MenuToggleSlice.actions;
export default MenuToggleSlice.reducer;
