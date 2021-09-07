import { useEffect, useState } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Cart(props)
{
   let [CakeCarts, setCakeCart] = useState([]);
   let [loading, setLoading] = useState(true);
   let [color, setColor] = useState("#FFFFFF");
   var total = 0;
   const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
   `;

    useEffect(()=>{
      //   axios({
      //       method:'post',
      //       url:process.env.REACT_APP_BASE_API_URL+"/cakecart",
      //   }).then((response)=>{
      //       setCakeCart(response.data.data);
      //       setLoading(false)
      //   },(error) => {
      //       console.log(error);
      //   })
      props.dispatch({
         type:"GET_CART"
      })
      setLoading(false)
    },[])

   function removeCakeFromCart(cakeid){
      setLoading(true);
      axios({
         method:'post',
         url:process.env.REACT_APP_BASE_API_URL+"/removecakefromcart",
         data:{cakeid:cakeid}
      }).then((response)=>{
         if(response.data){
            axios({
               method:'post',
               url:process.env.REACT_APP_BASE_API_URL+"/cakecart",
            }).then((response)=>{
               setCakeCart(response.data.data);
               setLoading(false)
            },(error) => {
               console.log(error);
            })
         }
      },(error) => {
            console.log(error);
      })
   }

   function removeOneCakeQuantityFromCart(cakeData){
      cakeData.quantity = cakeData.quantity - 1
      //API Call
      setLoading(true);
      axios({
         method:'post',
         url:process.env.REACT_APP_BASE_API_URL+"/removeonecakefromcart",
         data: cakeData,
         headers: {
            authtoken: localStorage.token,
         }
      }).then((response)=>{
         if(response.data){
            axios({
               method:'post',
               url:process.env.REACT_APP_BASE_API_URL+"/cakecart",
            }).then((response)=>{
               setCakeCart(response.data.data);
               setLoading(false)
            },(error) => {
               console.log(error);
            })
         }        
      },(error) => {
         console.log(error);
      }) 
  }

  function addOneCakeQuantityFromCart(cakeData){
      cakeData.quantity = cakeData.quantity +1
      //API Call
      setLoading(true);
      axios({
         url:process.env.REACT_APP_BASE_API_URL+'/addcaketocart',
         method: 'post',
         data: cakeData,
         headers: {
            authtoken: localStorage.token,
         }
      }).then((response) => {
         if(response.data){
            axios({
               method:'post',
               url:process.env.REACT_APP_BASE_API_URL+"/cakecart",
            }).then((response)=>{
               setCakeCart(response.data.data);
               setLoading(false)
            },(error) => {
                  console.log(error);
            })
         }
      },(error) => {
            console.log(error);
      })     
  }

  const placeOrder = () => {
      var datacake = {
         name: document.getElementById("InputName").value,
         address: document.getElementById("InputArea").value,
         area:document.getElementById("InputArea").value,
         city:document.getElementById("InputCity").value,
         pincode:document.getElementById("InputPincode").value,
         phone:document.getElementById("InputPhone").value,
         cakes:[...props.CakeCarts],
         price: document.getElementById("disabledPriceInput").value
      };

      axios({
         method:'post',
         url:process.env.REACT_APP_BASE_API_URL+"/addcaketocart",
         data: datacake
      }).then((response)=>{
         setLoading(false)
      },(error) => {
            console.log(error);
      })
   };

  function checkout(t_price){
     console.log('Total Price -', t_price)
     console.log('Added Cart Details -', props.CakeCarts)
     alert('checkout page');
     var data = {
        total_price : t_price,
        cake_cart : [...props.CakeCarts]
     }
     props.dispatch({
        type: "CHECKOUT",
        payload :data
     })
  }
   return (
      <div>
         {loading ? <GridLoader color={color} loading={loading} css={override} size={15} /> :
         <div class="container">
            <section class="mt-5 mb-4">
               <div class="row">
                     
                     <div class="col-lg-8">
                     <div class="card wish-list mb-4">
                        <div class="card-body">
                     <h5 class="mb-4">Cart (<span>{props.CakeCarts.length}</span> items)</h5>
                     {props.CakeCarts && props.CakeCarts?.map((cake,index) =>(
                           <div class="row mb-4">
                              <div class="col-md-5 col-lg-3 col-xl-3">
                                 <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                    <img class="img-fluid w-100" src={cake.image} alt="Sample" />
                                    <a href="#!">
                                       <div class="mask waves-effect waves-light">
                                          <img class="img-fluid w-100" src={cake.image} />
                                          <div class="mask rgba-black-slight waves-effect waves-light"></div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                              <div class="col-md-7 col-lg-9 col-xl-9">
                                 <div>
                                    <div class="d-flex justify-content-between">
                                       <div>
                                          <h5>{cake.name}</h5>
                                          {/* <p class="mb-3 text-muted text-uppercase small">Shirt - blue</p>*/}
                                          <p class="mb-2 text-muted text-uppercase small">Price: ₹ {cake.price}</p> 
                                          <p class="mb-3 text-muted text-uppercase small">Weight: {cake.weight} Kg</p>
                                       </div>
                                       <div>
                                          <div className="quantity">
                                             <button className="plus-btn" type="button" name="button" onClick={(e)=>{addOneCakeQuantityFromCart(cake)}}>
                                             <img src="plus.svg" alt="" />
                                             </button>
                                             <input type="text" name="name" value={cake.quantity} />
                                             <button className="minus-btn" type="button" name="button" onClick={(e)=>{removeOneCakeQuantityFromCart(cake)}}>
                                             <img src="minus.svg" alt="" />
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                       <div>
                                          <a href="#!" onClick={(e)=>{removeCakeFromCart(cake.cakeid)}} type="button" class="card-link-secondary small text-uppercase mr-3"><i class="fas fa-trash-alt mr-1"></i> Remove item </a>
                                          <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i class="fas fa-heart mr-1"></i> Move to wish list </a>
                                       </div>
                                       <p class="mb-0"><span><strong>₹ {cake.price * cake.quantity}</strong></span></p>
                                    </div>
                                 </div>
                              </div>
                              <span className="d-none"> {total += cake.price * cake.quantity}</span>
                           </div>
                        )) }
                        <hr class="mb-4" />
                        </div>
                     </div>
                  </div>

                  <div class="col-lg-4">
                     <div class="card mb-4">
                        <div class="card-body">
                           <h5 class="mb-3">Order summary</h5>
                           <ul class="list-group list-group-flush">
                              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                 Order Subtotal -
                                 <span>₹ {total}</span>
                              </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                 Shipping Charge -
                                 <span style={{color:"green"}}>Free</span>
                              </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                 Tax -
                                 <span style={{color:"green"}}>Free</span>
                              </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                 <div>
                                    <strong>Payable Amount</strong>
                                 </div>
                                 <span><strong>₹ {total}</strong></span>
                              </li>
                           </ul>
                           <button type="button" onClick={(e)=>{checkout(total)}} class="btn btn-primary btn-block waves-effect waves-light">Go to
                           checkout</button>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>}
         {total > 0 ? 
                    <div>
                        <div className="checkout">
                            <div>
                                <span className="total-label">Total : </span><span className="total-amount">{total}</span>
                            </div>
                        </div>
                        <div id="order_form" style={{border: "1px solid #0000003d", padding: "30px"}}>
                            <h2 style={{marginBottom:"20px"}}>Place Order</h2>
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
                                    <button type="button" className="btn btn-primary action-button-primary" onClick={placeOrder}>Place Order</button>
                                    <Link style={{float:"right"}}  type="button"  className="btn btn-primary action-button" to="/">Continue shopping</Link>
                                    <Link style={{float:"right"}}  type="button"  className="btn btn-success action-button" to="/order">View Orders</Link>
                                </div>
                            </form>
                        </div>
                    </div> 
                : 
                    <div>
                        <h1 style={{marginBottom:"30px"}}>No Items in Cart</h1>
                        <Link style={{float:"left"}}  type="button"  className="btn btn-primary action-button" to="/">Continue shopping</Link>
                        <Link style={{float:"left"}}  type="button"  className="btn btn-success action-button" to="/order">View Orders</Link>
                    </div>
                }
      </div>
   )
}
//export default Cart

export default connect(function(state, props){
   return {
      CakeCarts : state["cartitems"] || []
   }
})(Cart)