import {createStore, applyMiddleware } from "redux"
import { Reducer1 } from "./reducers"
import { middleware1 } from "./middleware"

var store = createStore(Reducer1, applyMiddleware(middleware1))


// store.dispatch({
// type:"SAMSUNG"
// })

// store.dispatch({
// type:"SHUBHAM"
// })

// var storedata = store.getState()

// console.log("......" , storedata) 
export default store
