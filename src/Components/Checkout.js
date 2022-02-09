import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { connect } from 'react-redux';

function Checkout(props)
{
    var total = props.cartData.total_price;
    let [loading, setLoading] = useState(true);

    const placeOrder = () => {
        var datacake = {
           name: document.getElementById("InputName").value,
           address: document.getElementById("InputArea").value,
           area:document.getElementById("InputArea").value,
           city:document.getElementById("InputCity").value,
           pincode:document.getElementById("InputPincode").value,
           phone:document.getElementById("InputPhone").value,
           cakes:[...props.cartData.cake_cart],
           price: document.getElementById("disabledPriceInput").value
        };
        axios({
           method:'post',
           url:process.env.REACT_APP_BASE_API_URL+"/addcakeorder",
           data: datacake,
           headers: {
            authtoken: localStorage.token,
           }
        }).then((response)=>{
            alert("Order Placed Successfully.")
           setLoading(false)
        },(error) => {
              console.log(error);
        })
     };

    return (
        <div>
              {props.cartData.cake_cart &&
            <div className="px-4 px-lg-0">
                <div className="container text-white py-5 text-center">
                    <h1 className="display-4">My Cart</h1>
                    <p className="lead mb-0">Shopping Cart Details </p>
                </div>
                <div className="pb-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div className="bg-dark rounded-pill px-4 py-3 text-uppercase font-weight-bold text-white">Order summary </div>
                        <div className="table-responsive">
                            <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="p-2 px-3 text-uppercase">Product</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Price</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Quantity</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Total  Price</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {props.cartData.cake_cart && props.cartData.cake_cart.map((cake,index) =>(
                                <tr key={index}>
                                    <th scope="row" className="border-0">
                                        <div className="p-2">
                                        <img src={cake.image} alt="" width="70" className="img-fluid rounded shadow-sm" />
                                        <div className="ml-3 d-inline-block align-middle">
                                            <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle" key={index}>{cake.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Weight: {cake.weight} Kg</span>
                                        </div>
                                        </div>
                                    </th>
                                    <td className="border-0 align-middle">
                                        <strong>₹ {cake.price}</strong>
                                    </td>
                                    <td className="border-0 align-middle">
                                        <div className="quantity">
                                            <b>{cake.quantity}</b>
                                        </div>
                                    </td>
                                    <td className="border-0 align-middle">
                                        <b>{cake.price * cake.quantity}</b>
                                    </td>
                                </tr>
		                    )) }
                            </tbody>
                            </table>
                        </div>
                            {props.cartData.cake_cart.length === 0 && 
                            <div className="alert alert-danger" role="alert" style={{"width": "1083px"}}>
                             No Cake Found.!
                            </div>} 
                        </div>
                    </div>
                    {props.cartData.cake_cart.length > 0 &&
                    <div className="col-lg-12 py-5 p-4 bg-white rounded shadow-sm">
                        <div>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="InputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" required/>
                                    {/* <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div> */}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="InputAddress" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputArea" className="form-label">Area</label>
                                    <input type="text" className="form-control" id="InputArea" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="InputCity" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputPincode" className="form-label">Pincode</label>
                                    <input type="text" className="form-control" id="InputPincode" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputPhone" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="InputPhone" required/>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="disabledPriceInput" className="form-label">Price</label>
                                <input type="text" id="disabledPriceInput" className="form-control" value={total} readOnly/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="TermsAndCo" required/>
                                    <label className="form-check-label" htmlFor="TermsAndCo">I Agree to Privacy Policy</label>
                                </div>
                                <div>
                                    {/* <button type="button" className="btn btn-primary action-button-primary" onClick={placeOrder}>Place Order</button> */}
                                    {/* <Link style={{float:"right"}}  type="button"  className="btn btn-primary action-button" to="/">Continue shopping</Link>
                                    <Link style={{float:"right"}}  type="button"  className="btn btn-success action-button" to="/order">View Orders</Link> */}
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-12">
                        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Price Details </div>
                        <div className="p-4">
                            <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                            <ul className="list-unstyled mb-4">
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>₹ {total}.00</strong></li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>₹ 25.00</strong></li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>₹ 0.00</strong></li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                <h5 className="font-weight-bold">₹ {total+25}.00</h5>
                            </li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Mode Of Payment</strong>
                                <h5 className="font-weight-bold">Only Cash</h5>
                            </li>
                            </ul><button className="btn btn-dark rounded-pill py-2 btn-block" onClick={placeOrder}>Place Order</button>
                        </div>
                        </div>
                    </div>
                    }
                    </div>
                </div>
            </div>
            }  
      
        </div>
    )
}

//export default Checkout
export default connect(function(state, props){
    return {
        cartData : state.checkout,
    }
})(Checkout)