import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyApp from './Components/MyApp';
import axios from 'axios';
import  store from"./reduxstores/stores"
import {Provider} from "react-redux"
import {dispatch} from "react"

axios.interceptors.request.use((request)=>{
  //alert(request.url);
  if(request.url.includes('cart')){
    console.log("request", request.headers.authtoken);
    if(localStorage.token){
      request['headers']['authtoken'] = localStorage.token
      return request
    } else {
      return Promise.reject;
    }
  } else {
    return request
  }
})

// axios({
//   method:'get',
//   url:process.env.REACT_APP_BASE_API_URL+"/getuserdetails",
//   headers : {
//     authtoken : localStorage.token
//   }
// }).then((response)=>{
//   console.log("User Details -",response.data)
//   if(response.data){
//     dispatch({
//       type:"userInfo",
//       payload: response.data.data,
//     })
//   } else{
//     dispatch({
//       type: "invalidToken"
//     })
//   }
// },(error) => {
//   console.log(error);
// })

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <MyApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
