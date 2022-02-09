Neosoft Technologies is inviting you to a scheduled Zoom meeting.

Topic: React JS Training
Time: 8:00 AM everyday 

Join Zoom Meeting
https://us02web.zoom.us/j/87951937731?pwd=bjVVd3ZzdXg2eFhEOTFUUVB4elJiZz09

Meeting ID: 879 5193 7731
Passcode: 218760

GitHub Token -
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

what is the name of the tool used to take JSX and turn it into createElement Calls ?
Answer - Babel

var [users,setUsers] = useState([...allusers])
var search = function(e){
if(e.target.value){
users = allusers.filter((each)=>{
console.log(".... eeach ")
return each.name.includes(e.target.value)||each.email.includes(e.target.value)
})
setUsers([...users])
}
else{
setUsers([...allusers])
}
} 


Your API Url is incorrect -
First check your .env.development file
REACT_APP_BASE_API_URL="https://apifromashu.herokuapp.com/api"

After that start server again(npm start)

Then check in signup component -
Check in axios rules ->
 url: process.env.REACT_APP_BASE_API_URL +"/register",


https://github.com/HarshadaSamant/react16july/blob/4055e467513412e9f5ad31b4152647934846030c/src/ReduxStore/thunks.js#L120


https://nodejs.org/en/ -- Version 14

https://code.visualstudio.com/


Heroku Cli - 
https://devcenter.heroku.com/articles/heroku-cli 

Git 
https://github.com/


npm init -> root directory

After Downloading Nodejs 
We need to open a normal Cmd and execute command 
npm install create-react-app

After installing create-react-app we will be able to create react applications using command 
npx create-react-app appname

Example - npx create-react-app neosoftdemoapp
Once react app is created u enter into that folder into cmd 
cd neosoftdemoapp 
npm start


For testing Heroku 
We can type heroku in cmd if it shows something it is working fine if not u need to check if path is set 


Same for git 
type git in cmd if it is rnot recognized command set the path in enviornament variables 

If anyone is using Mac machine those can use sudo command before installing packag



https://www.geeksforgeeks.org/installation-of-node-js-on-linux/
(base) webwerks@Webwerks:~/Downloads$ nodejs -v
v8.10.0
(base) webwerks@Webwerks:~/Downloads$ npm -v
3.5.2
(base) webwerks@Webwerks:~/Downloads$ sudo npm cache clean -f
npm WARN using --force I sure hope you know what you are doing.
(base) webwerks@Webwerks:~/Downloads$ sudo npm install -g n
/usr/local/bin/n -> /usr/local/lib/node_modules/n/bin/n
+ n@7.3.1
updated 1 package in 0.442s
(base) webwerks@Webwerks:~/Downloads$ npm -v
3.5.2
(base) webwerks@Webwerks:~/Downloads$ sudo n stable 
installed : v14.17.5 (with npm 6.14.14)
(base) webwerks@Webwerks:~/Downloads$ nodejs -v
v8.10.0
(base) webwerks@Webwerks:~/Downloads$ 

sudo npm cache clean -f
sudo npm install -g n
sudo n stable 

sudo npm install -g n
sudo n 14.17.5 

sudo n stable
node -v

React Course - 
https://docs.google.com/spreadsheets/d/1oYxtmF8-RftjOB9f7lYwlS091mYyOKmw/edit#gid=421806467


https://shubham-cake-house.herokuapp.com/ | https://git.heroku.com/shubham-cake-house.git


dell@dell-Latitude-E5270:/var/www/html/react_app$ npm run build
dell@dell-Latitude-E5270:/var/www/html/react_app$ cd ..
dell@dell-Latitude-E5270:/var/www/html$ cd heroku_server/
dell@dell-Latitude-E5270:/var/www/html/heroku_server$ heroku login
dell@dell-Latitude-E5270:/var/www/html/heroku_server$ git init
dell@dell-Latitude-E5270:/var/www/html/heroku_server$ git status
dell@dell-Latitude-E5270:/var/www/html/heroku_server$ git add .
dell@dell-Latitude-E5270:/var/www/html/heroku_server$ git commit -m "First Commit"
dell@dell-Latitude-E5270:/var/www/html/heroku_server$ heroku create shubham-cake-house
dell@dell-Latitude-E5270:/var/www/html/heroku_server$ git push heroku master 


9654235010

1 )heroku login
2 git init
3 heroku create app-name
4 copy build folder 

5 git add .
6 git commit -m "your message"
7 git push heroku master


When you run npm start browsers open the file known as index.html and it renders a compoments inside index.js 
which is decided by index.js so basically index.js is main file which is going to be a root compomnent

when you run npm startbrowser opens the file known as index.
html and it renders the root compnent in itself decided by index.js.
All other component will go inside the root component.
][\]

when we run npm starts, browser open file (index.html) and it renders component itself 
it is decided by index.js(main file which decide which component is root component).
Root component is the component which is rendered in index.html.

when we run npm starts, browser open file index.html and it renders component. 
Root component is the component which is rendered in index.html.


what is diffrance between remove and uninstall in NPM- Remove is just an alias for the 
npm uninstall command:- $ npm remove --help- npm uninstall [<@scope>/]<pkg>[@<version>]... [--save-prod|--save-dev|--save-optional] [--no-save]- aliases: un, unlink, remove, rm, r


import {all, takeEvery , put} from "redux-saga/effects"
import axios from "axios"

function *CartGenerator(action){
console.log(">>>>>>>>>>>>>>>>>>>>>>" , action)
yield put({
type:"GET_CART_FETCH"
})
try {
var result = yield axios({
method:"post",
url:"https://apifromashu.herokuapp.com/api/cakecart1",
data:{},
headers:{
authtoken:localStorage.token
}
})
}
catch(error){
console.log("error in making axios call" , error)
}


if(result?.data?.data)
yield put({
type:"GET_CART_SUCCESS",
payload:result.data.data
})
else{
yield put({
type:"GET_CART_FAILURE"
})
}
}

function *CartSaga(){
console.log("........")
yield takeEvery('GET_CART' , CartGenerator)
}

export function *RootSaga(){
console.log("................ in root saga")
yield all([CartSaga()])
} 


case "GET_CART_FETCH" :{
state = {...state}
state["isFetching"] = true
return state
}

case "GET_CART_SUCCESS" :{
state={...state}
state["isFetching"] = false
state.cartitems = action.payload
return state
}

case "GET_CART_FAILURE" :{
state = {...state}
state["isFetching"] = false
state["error"] = "Internal Server Error"
return state
} 