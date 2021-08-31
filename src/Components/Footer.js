import React from 'react'
export const Footer = () => {
    let footerstyle = {
        left: 0,
        bottom: 0,
        width : "100%",
    }
    return(
        <footer className="bg-dark text-light py-3" style={footerstyle}>
            <p>
                <div class="sup-nav" style={{"paddingRight": "9px", "marginBottom": "-25px", "width": "100%"}}>   
                <span className="text-center" style={{marginRight:"-180px", margin:"auto 502px"}}>Copyright &copy; shubham-cake-shop.com</span>               
                <span style={{margin: "auto 531px"}}><img src="https://img.aazho.com/sf/tr:f-auto//desktop/contact-us/call_e3jDIEba0d.png"  style={{"height": "11px"}} /> +91 - 8709874654 <b>Help ?</b></span>                         
                </div>
            </p>
        </footer>
    )
}
