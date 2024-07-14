import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice.js';




let stock = createSlice({
    // useState 용도
    name : 'stock',
    initialState: [10, 11, 12]
})


let userItem = createSlice({
    name : 'userItem',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
    ],
    reducers : {
            changeCount (state, action) {
                let who = state.findIndex((a) => { return a.id === action.payload })
                state[who].count++
            },
            addCartItem (state, action) {
                let who = state.findIndex((a) => { return a.id === action.payload.id })
                {
                    if (who === -1) {
                        state.push(action.payload)
                    }
                }
            },
    }
})

export let { changeCount, addCartItem } = userItem.actions


export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        userItem : userItem.reducer,

    }
})
