import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    // useState 용도
    name : 'user',
    initialState: { name: 'Song', age: 17 },

    // State 수정하기
    reducers : {
        changeName (state) {
            // return { name: 'no Song', age: 17 }
            state.name = 'no Song'
        },
        // 함수를 더 추가하고싶으면 밑에 작성하면 됨
        changeAge (state, action) {
            // state 가 object/ array 면 return 없이 직접 수정해도 됨
            state.age = state.age + action.payload
        },
    }
})

export let { changeName, changeAge } = user.actions

export default user