
import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    add: null,
    val: null,
    edit: null,
    count: null
}

export const CompoSlice = createSlice({
    name:'rohan',
    initialState,
    reducers:{

        deleting: (state,action) => {
          state.val =  action.payload
        },

        addData: (state,action) => {
            state.add = action.payload
        },
      
        edit: (state,action) => {
            state.edit = action.payload
        },

        count: (state,action) => {
            state.count = action.payload
        }

    }
})

export const {  deleting, addData, edit, count } = CompoSlice.actions

export default CompoSlice.reducer
