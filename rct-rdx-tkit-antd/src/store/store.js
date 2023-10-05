// redux toolkit store
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import your slice files here...
import homePageSice from './slices/homePage.slice';

const reducer = combineReducers({
    homePageReducer: homePageSice.reducer,
});
export const store = configureStore({
    reducer,
});
