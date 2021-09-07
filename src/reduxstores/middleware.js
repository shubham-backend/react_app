import axios from "axios"

export var middleware1 = function(state) {
    return function(next){
        return function(action) {
            //API Call
            if(action.type == "GET_CART") {
                axios({
                    method:"POST",
                    data:{},
                    url:process.env.REACT_APP_BASE_API_URL+"/cakecart",
                    headers: {
                        authtoken: localStorage.token,
                    }
                }).then((response)=>{
                action.payload = response.data.data;
                next(action)
                },(error) => {
                    console.log(error);
                })
            }
            next(action)
        }
    }
} 