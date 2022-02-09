export function Reducer(
    state={
    // samsung:0,
    // shubham:5,
    isUserLoggedIn : localStorage.token?true:false
    }, action){
        console.log("action shubham", action.type);
    switch(action.type){
    case "LOGIN" :{
        console.log("action", action);
        state={...state}
        state["isUserLoggedIn"] = true
        state.userdetails = action.payload
        return state
        //here it will modify and return the state 
    }
    case "invalidToken" : {
        state={...state}
        state["isUserLoggedIn"] = false
        localStorage.clear()
        return state
    }
    case "USER_DATA" :{
        state={...state}
        state.user = action.payload
        return state
    }
    case "GET_CART" :{
        state={...state}
        state.cartitems = action.payload
        return state
    }
    case "CHECKOUT" :{
        console.log(action.payload);
        state={...state}
        state.checkout = action.payload
        return state
    }
    
    case "SAMSUNG" :{
    state={...state}
    state["samsung"]+=1
    return state
    }
    
    case "SHUBHAM":{
        state={...state}
        state["shubham"]+=1
        return state
    }
    
    default : return state
    }
    
} 