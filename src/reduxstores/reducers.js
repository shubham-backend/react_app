export function Reducer1(
    state={
    // samsung:0,
    // shubham:5,
    isUserLoggedIn : localStorage.token?true:false
    }, action){
    switch(action.type){
    
    case "LOGIN" :{
        state={...state}
        state["isUserLoggedIn"] = true
        return state
        //here it will modify and return the state 
    }
    case "invalidToken" :{
        state={...state}
        state.isUserLoggedIn = false
        localStorage.clear()
        return state
    }

    case "userInfo" :{
        state={...state}
        state.user = action.payload
        return state
    }

    case "GET_CART" :{
        state={...state}
        state.cartitems = action.payload
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