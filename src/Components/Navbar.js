import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom"
import { connect } from 'react-redux';

var searchText;
var getSearchText = function(event){
    searchText = event.target.value;
}

function Navbar(props)
{
    var search = function(event){
        if(searchText){
            event.preventDefault();
            console.log(searchText);
            props.history.push('/search?q='+searchText)
        }
    }
    function logout(){
        localStorage.clear()
        window.location.reload()
    }
    
    var cakesvg = "cake.svg";
    return(
        <div className="App">
          <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <Link to="/"><a class="navbar-brand" href="#">Gupta Cake House</a></Link><img style={{"height" : "45px"}} src={cakesvg} alt="Cake Online" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <form class="form-inline my-2 my-lg-0 ml-5">
                        <input onChange={getSearchText} class="form-control mr-sm-2" type="search" placeholder="Search cakes..." aria-label="Search" />
                        <button onClick={search} class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </ul>
                
                <div class="nav-wrapper">
                    <div class="sup-nav" style={{"paddingRight": "9px", "marginBottom": "15px", "width": "100%", "float": "left", "textAlign": "right"}}>                  
                        <img src="https://img.aazho.com/sf/tr:f-auto//desktop/contact-us/call_e3jDIEba0d.png"  style={{"height": "11px"}} /> 
                        <span style={{"paddingRight":"10px"}}>+91 - 8709874654</span> <b>Help ?</b>                        </div>
                </div>
                <div className="btn-spc">
                    {console.log(props.userInfo)}
                {props.isUserLoggedIn == false && 
                <div>
                    <Link to="/login"><button className="btn btn-primary btn-space" type="submit">Login</button></Link>
                    <Link to="/signup"><button className="btn btn-warning btn-space" type="submit">Signup</button></Link>
                </div>
                }
                {props.isUserLoggedIn == true && 
                <div>
                    <Link to="/cart"><a class="btn btn-spc" data-placement="bottom" title="Cart" style={{color:"white",fontWeight:"600"}}>
                    <svg class="V3C5bO btn-spc" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                    Cart
                    </a>
                    </Link>
                    <button onClick={logout} className="btn btn-warning btn-space" type="submit">Logout</button>
                </div>
                }
                </div>
            </div>
          </nav>
        </div>
    )
}

// export default withRouter(Navbar)
Navbar = withRouter(Navbar)
export default connect(function(state, props){
    return {
        isUserLoggedIn :state.isUserLoggedIn,
        userInfo : state.user
    }
})(Navbar)