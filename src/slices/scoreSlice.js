import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    scores: [{id: 1, score: 100, name: "sahil", date: new Date(2022, 0, 1).toDateString()}, {id: 2, score: 90, name: "rahul", date: new Date(2023, 4, 8).toDateString()}]
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        addScore: (state, action) => {
            const score = {
                id: nanoid(), 
                score: action.payload.score,
                name: action.payload.name,
                date: new Date().toDateString()

            }
            state.scores.push(score)
        },
    }
})

export const {addScore} = scoreSlice.actions

export default scoreSlice.reducer