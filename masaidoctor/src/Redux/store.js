import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { reducer } from "./reducer";
import {thunk} from 'redux-thunk'
//thuk-middleware

let middleware=[thunk];


let rootReducer= combineReducers(reducer)
export const store = legacy_createStore(reducer,applyMiddleware(thunk))