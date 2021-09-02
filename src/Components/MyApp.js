import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Signup from "./Signup"
import Login from "./Login";
import Forgot from "./Forgot";
import Search from "./Search";
import Admin from "./Admin";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Pagenotfound from "./Pagenotfound";
import CakeDetails from "./CakeDetails";
import { useState } from "react";
function MyApp()
{
    var [isUserLoggedIn, setUserLogin] = useState(localStorage.token ? true : false)

    return(
        <div>
            <BrowserRouter>
            <Navbar isUserLoggedIn={isUserLoggedIn} />
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/forgot" component={Forgot}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/cake/:cakeid" component={CakeDetails}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
            <Route exact path="/*" component={Pagenotfound}></Route>

            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default MyApp