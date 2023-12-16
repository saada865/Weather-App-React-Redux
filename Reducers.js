import {createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
    city: "London",
};

export const maketemp = createAction("maketemp");

export const customReducer = createReducer({ city: "London"}, (builder) => {
    builder
    .addCase(maketemp, (state) => {
        state.city = 
    })
})