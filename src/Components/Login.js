import userEvent from "@testing-library/user-event"
import { useState } from "react"
import {Link, withRouter} from "react-router-dom"
import axios from "axios"
import { useHistory } from "react-router"
import { connect } from 'react-redux';

function Login(props)
{
    var[errorEmail,setErrorEmail] = useState(null)
    var[errorPassword,setErrorPassword] = useState(null)
    var [user, setUser] = useState({})
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#FFFFFF");

    function handleEmail(e){
        user.email = e.target.value
        setUser(user)
    }
    function handlePassword(e){
        user.password = e.target.value
        setUser(user)
    }
    function login(e)
    {
        e.preventDefault();
        setErrorEmail('');
        setErrorPassword('');
        if(!user.email){
            setErrorEmail("Email field is required");
        } else if(!user.password){
            setErrorPassword("Password field is required");
        }
        if(user.email && user.password){
            axios({
                url: process.env.REACT_APP_BASE_API_URL +"/login",
                method:'post',
                data:user
            }).then((response) => {
                if(response.data.token){
                    props.dispatch({
                        type:"LOGIN",
                    })
                    //props.loggedin(true);
                    localStorage.setItem('token',response.data.token)
                    setLoading(false);
                    props.history.push("/")
                } else {
                    alert('Something went wrong.');
                }
            }, (error)=>{
                console.log("Error - Login API", error)
            })
        }
    }
    return(
        <div className="Apps">
            <form>
            <b><i>Login</i></b><div className="form-group">
                    <input onChange={handleEmail} class="form-control mr-sm-2" type="text" name="email" placeholder="Enater Email" aria-label="Search" />
                    <div className="text-danger">{errorEmail}</div>
                </div>
                <div className="form-group">
                    <input onChange={handlePassword} class="form-control mr-sm-2" type="password" name="password" placeholder="Enter Password" aria-label="Search" />
                    <div className="text-danger">{errorPassword}</div>
                </div>
                <button class="btn btn-success my-2 my-sm-0" type="submit" onClick={login}>Submit</button>
                <p className="forgot" align="center"><Link to="/forgot">Forgot Password?</Link></p>
                <p className="forgot" align="center"><Link to="/signup">Not a member? Signup now</Link></p>
            </form>
        </div>
    )
}

//export default withRouter(Login)
Login = withRouter(Login)
export default connect()(Login)
