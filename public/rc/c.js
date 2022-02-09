https://apifromashu.herokuapp.com/api/login (Post)
https://apifromashu.herokuapp.com/api/register (Post)
https://apifromashu.herokuapp.com/api/recoverpassword (Post)
https://apifromashu.herokuapp.com/api/getuserdetails (Post)
https://apifromashu.herokuapp.com/api/allcakes (Get)
https://apifromashu.herokuapp.com/api/cake/cakeid (get)
https://apifromashu.herokuapp.com/api/searchcakes?q= (Get)
https://apifromashu.herokuapp.com/api/addcaketocart (Post)
https://apifromashu.herokuapp.com/api/removecakefromcart (Post)
https://apifromashu.herokuapp.com/api/removeonecakefromcart (Post)
https://apifromashu.herokuapp.com/api/addcakeorder (Post)
https://apifromashu.herokuapp.com/api/cakeorders (Post)


We Open Our Application. Application looks for a token. If token is there 
U have to make call from middleware and pass it to store first and fetch it from store 
In reducer we are initialising the state object that is default values only 
See reducer.js 

// we will fetch the details of the user from that token

post /getuserdetails {} headers :{authtoken:valueotoken}


this details api may give u error if error is there that means token is expired and u will remove that from localStorage 


// the first file which gets index.js 
in index.js what will be your first step to check for token if token is ther emake a hit otherwise 
//if user details are fetched toh kya store karana h store so what u store the data those details coming from the api 
other wise if details are not provided that means token is expired 

dispatch({
type:"invlaid",
payload:12
}) 


/addcaketocart,

post
headers :{
authtoken
}

data :{name,cakeid,price,weight,image,quantity}

/cakecart
post
data:{}
headers:{
authtoken
}

/removecakefromcart
post
data:{cakeid:idofthecake}
headers:{
authtoken
} 

if changes not reflect in your code then apply this command -
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p 

const value = 0;
{value && <span>Hello World</span>}

Hoisting in javascript
data types in javascript
    Invoked Function in JavaScript?
Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.

console.log(1+2)
console.log(0.1+0.2)
console.log(0.1+0.2==0.3)
console.log(typeof 2)
console.log(typeof '2')
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof NULL)
console.log(typeof NULL == NULL) //NULL is not defined
console.log(typeof null == null) //false
console.log(typeof NaN);  //number


for(var i= 0; i<5; i ++)
{
   console.log(setTimeout( function(){ return i;}, i*1000))
}

var person ={
    age:"20",
    name:"Boe"
}
var obj = [person, person, person];
obj[1].name ='Joe';
console.log(obj[1].name)

var obj1 = [{...person}, {...person}, {...person}];
obj1[1].name ='Joe';
console.log(obj1[1].name)


var x = 10;
var y ='20';

console.log(x+y) //"1020"
console.log(x-y) //-10

1) How to Apply Pagination in cakelist
2) How to Rating star manage conditionally css span star
3) Difference React.component and React.PureComponent

in input box the monent u started typing it shoud show the rows
 which contains those letters typed into input bpx without button click 

 Get method url is /cake/4353454 

{name: "Shubham", email: "shubham1@yopmail.com", password: "shubham1"}
email: "shubham1@yopmail.com"
name: "Shubham"
password: "shubham1"


cakeid: "1623076149741"
createdat: "2021-08-01T15:14:47.595Z"
email: "shubham@yopmail.com"
image: "https://res.cloudinary.com/ashudev/image/upload/v1623076144/x6svihz4ldsybxj5r3t1.jpg"
name: "Chocolate Cake"
price: 500
quantity: 2
weight: 2


onClick={() => remove(res)} 
onClick={() => btn_additem(index, each.cakeid)} 

const btn_additem = (id, cakeid) => { setCakelist(props.cartcakeslist) const newitmlist = cakelist.filter((cake) => { return Object.values(cake).join(" ").includes(cakeid) }) var datacake = { name: newitmlist[0].name, cakeid: newitmlist[0].cakeid, price: newitmlist[0].price, weight: newitmlist[0].weight, image: newitmlist[0].image } console.log("????", datacake) props.dispatch({ type: "Add_Cart_Item_Quantity", payload: datacake }) } 

/addcaketocart
/removeonecakefromcart {cakeid} post
/removecakefromcart {cakeid} post
/cakeorders post {} 
/addcakeorder post 
{
address,city,pincode,phone,area,cakes:[],name,price
}

/api/upload formdata file 
key- file

get url from Response
Guys please explore useReducer useSelector and useDisptach hooks 
/addcakeorder post requestobj — {name, address, area, city,pincode,phone,cakes,price} and headers - {authtoken} 