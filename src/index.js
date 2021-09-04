import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyApp from './Components/MyApp';
import axios from 'axios';

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

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
