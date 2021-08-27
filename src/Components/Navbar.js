import {Link} from 'react-router-dom';

var searchText;
var getSearchText = function(event){
    searchText = event.target.value;
}

var search = function(event){
if(searchText){
    alert('Search - '+ searchText)
}
}
function Navbar()
{
    return(
        <div className="App">
          <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <Link to="/"><a class="navbar-brand" href="#">Gupta Cake House</a></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <form class="form-inline my-2 my-lg-0 ml-5">
                        <input onChange={getSearchText} class="form-control mr-sm-2" type="search" placeholder="Search cakes..." aria-label="Search" />
                        <Link to="/search"><button onClick={search} class="btn btn-success my-2 my-sm-0" type="submit">Search</button></Link>
                    </form>
                </ul>
                <div class="nav-wrapper">
                    <div class="sup-nav" style={{"paddingRight": "9px", "marginBottom": "15px", "width": "100%", "float": "left", "textAlign": "right"}}>                  
                        <img src="https://img.aazho.com/sf/tr:f-auto//desktop/contact-us/call_e3jDIEba0d.png"  style={{"height": "11px"}} /> 
                        <span style={{"paddingRight":"10px"}}>+91 - 8709874654</span> <b>Help ?</b>                        </div>
                </div>
                <div className="btn-spc">
                    <Link to="/login"><button className="btn btn-primary btn-space" type="submit">Login</button></Link>
                    <Link to="/signup"><button className="btn btn-warning btn-space" type="submit">Signup</button></Link>
                </div>
            </div>
          </nav>
        </div>
    )
}

export default Navbar