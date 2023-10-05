import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseJsonApi as api } from '../../services/baseApi'
import { FETCH_USER } from '../../utils/endpoints.js'

const initialState = {
    loadingUserData: false,
    userData: {},
}

export const fetchUserData = createAsyncThunk(
    'homePage/fetchUserData',
    api.get(FETCH_USER, { withCredentials: true })
)

const homePageSlice = createSlice({
    name: 'homePageSlice',
    initialState: initialState,
    reducers: {
        resetHomeRedux: (state, action) => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state, action) => {
                state.loadingUserData = true
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loadingUserData = false
                state.userData = action.payload
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loadingUserData = false
                state.userData = {}
            })
    }
})

export const { resetHomeRedux } = homePageSlice.actions;
export default homePageSlice.reducer;