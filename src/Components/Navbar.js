function Navbar()
{
    return(
        <div className="App">
          <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <a class="navbar-brand" href="#">Gupta Cake House</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <form class="form-inline my-2 my-lg-0 ml-5">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search cakes..." aria-label="Search" />
                        <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </ul>
                    <div class="nav-wrapper">
                        <div class="sup-nav" style={{"paddingRight": "9px", "marginBottom": "15px", "width": "100%", "float": "left", "textAlign": "right"}}>                  
                            <img src="https://img.aazho.com/sf/tr:f-auto//desktop/contact-us/call_e3jDIEba0d.png"  style={{"height": "11px"}} /> 
                            <span style={{"paddingRight":"10px"}}>+91 - 8709874654</span> <b>Help ?
</b>                        </div>
                    </div>
                   
            </div>
          </nav>
        </div>
    )
}

export default Navbar