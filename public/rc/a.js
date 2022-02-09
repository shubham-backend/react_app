import axios from "axios"
import { requestFunction } from "../index"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../Components/Spinner/Spinner';


const notifySucess = () => toast.success('Cake added to cart successfully', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

export  function Loginthunk(data){
   return async (dispatch)=>{
       dispatch({
           type:"LOGIN_FETCH"
       })
       var result  = await  axios({
           method:"post",
           url:"https://apifromashu.herokuapp.com/api/login",
           data:data
       })
       if(result.data.token){
           localStorage.token = result.data.token;
           dispatch({
               type:"LOGIN_SUCESS",
               payload:result.data,
               token:result.data.token
           })
       }
       else{
           dispatch({
               type:"LOGIN_FAILURE"
           })
       }
   }
}

export function AddToCartthunk(data) {
    return async (dispatch) => {
      dispatch({
        type: "CART_FETCHING",
      });
      var result = await requestFunction({
        method: "post",
        url: process.env.REACT_APP_BASE_API + "/addcaketocart",
        data: data,
        headers: {
            authtoken: localStorage.token,
        },
      });
      if (result) {
        dispatch({
          type: "ADD_TO_CART_SUCCESS",
          payload: result.data,
        });
        dispatch(FetchCartthunk());
      } else {
        dispatch({
          type: "ADD_TO_CART_FAILURE",
        });
        alert("error while adding to cart")
      }
    };
}
  
export function Removeonefromcartthunk(data) {
return async (dispatch) => {
    dispatch({
    type: "CART_FETCHING",
    });
    var result = await requestFunction({
    method: "post",
    url: process.env.REACT_APP_BASE_API + "/removeonecakefromcart",
    data: data,
    });
    if (result) {
    dispatch({
        type: "REMOVE_FROM_CART_SUCCESS",
        payload: result.data,
    });
    dispatch(FetchCartthunk());
    } else {
    dispatch({
        type: "REMOVE_FROM_CART_FAILURE",
    });
    }
};
}

export function Removefromcartthunk(data) {
    return async (dispatch) => {
        dispatch({
        type: "CART_FETCHING",
        });
        var result = await requestFunction({
        method: "post",
        url: process.env.REACT_APP_BASE_API + "/removecakefromcart",
        data: data,
        });
        if (result) {
        dispatch({
            type: "REMOVE_FROM_CART_SUCCESS",
            payload: result.data,
        });
        dispatch(FetchCartthunk());
        } else {
        dispatch({
            type: "REMOVE_FROM_CART_FAILURE",
        });
        }
    };
    }
  
export function FetchCartthunk() {
    return async (dispatch) => {
        dispatch({
            type: "CART_FETCHING",
        });
        var result = await requestFunction({
            method: "post",
            url: process.env.REACT_APP_BASE_API + "/cakecart",
            data: {},
            headers: {
                authtoken: localStorage.token,
            },
        });
        if (result) {
            dispatch({
                type: "CART_SUCCESS",
                payload: result.data.data,
            });
        // alert("Cart fetched")
        } else {
        dispatch({
            type: "CART_FAILURE",
        });
        // alert("Cart fetch failed")
        }
    };
}

export function Orderthunk(data) {
    return async (dispatch) => {
        dispatch({
            type: "ORDER_FETCHING",
        });
        var result = await requestFunction({
        method: "post",
        url: process.env.REACT_APP_BASE_API + "/addcakeorder",
        data: data,
        headers: {
            authtoken: localStorage.token,
        },
        });
        if (result) {
        dispatch({
            type: "ADD_ORDER_SUCCESS",
            payload: result.data.data,
        });
        // alert("Order success")
        } else {
        dispatch({
            type: "ADD_ORDER_FAILURE",
        });
        }
    };
}

export function FetchOrderthunk() {
    return async (dispatch) => {
        dispatch({
            type: "ORDER_FETCHING",
        });
        var result = await requestFunction({
            method: "post",
            url: process.env.REACT_APP_BASE_API + "/cakeorders",
            data: {},
            headers: {
                authtoken: localStorage.token,
            },
        });
        if (result) {
            dispatch({
                type: "ORDER_SUCCESS",
                payload: result.data,
            });
            console.log("fetch Order success : " + JSON.stringify(result.data))
        } else {
            dispatch({
                type: "ORDER_FAILURE",
            });
            alert("fetch Order failed")
        }
    };
}
