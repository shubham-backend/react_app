import { useEffect, useState } from "react";
import axios from "axios";
function Cart()
{
    let [CakeCarts, setCakeCart] = useState([]);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#FFFFFF");
    var total = 0;

    useEffect(()=>{
        axios({
            method:'post',
            url:process.env.REACT_APP_BASE_API_URL+"/cakecart",
        }).then((response)=>{
            console.log("Cake", response.data.data);
            setCakeCart(response.data.data);
        },(error) => {
            console.log(error);
        })
    },[])

   function removeCakeFromCart(cakeid){
      axios({
         method:'post',
         url:process.env.REACT_APP_BASE_API_URL+"/removecakefromcart",
         data:{cakeid:cakeid}
      }).then((response)=>{
            console.log("Remove Cake", response.data.data);
            window.location.href="";
      },(error) => {
            console.log(error);
      })
   }
   return (
      <div>
         <div class="container">
            <section class="mt-5 mb-4">
               <div class="row">
                     
                     <div class="col-lg-8">
                     <div class="card wish-list mb-4">
                        <div class="card-body">
                     <h5 class="mb-4">Cart (<span>{CakeCarts.length}</span> items)</h5>
                     {CakeCarts && CakeCarts.map((cake,index) =>(
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
                                             <button className="plus-btn" type="button" name="button">
                                             <img src="plus.svg" alt="" />
                                             </button>
                                             <input type="text" name="name" value={cake.quantity} />
                                             <button className="minus-btn" type="button" name="button">
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
                           <button type="button" class="btn btn-primary btn-block waves-effect waves-light">Go to
                           checkout</button>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}
export default Cart