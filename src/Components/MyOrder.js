import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment';

function MyOrder(){
    var [myOrder, setMyOrder] = useState([])
    useEffect(() => {
        axios({
            method:'post',
            url:process.env.REACT_APP_BASE_API_URL+"/cakeorders",
            data: {},
            headers: {
             authtoken: localStorage.token,
            }
         }).then((response)=>{
             console.log("shubham",response.data.cakeorders);
            setMyOrder(response.data.cakeorders)
         },(error) => {
               console.log(error);
         })    
    }, [])
    
    return (
        <div>            
            <div className="px-4 px-lg-0">
                <div className="container text-white py-5 text-center">
                    <h1 className="display-4">My Order</h1>
                    <p className="lead mb-0">Order Details </p>
                </div>
                {myOrder?.map((cake,index) =>(
                <div className="pb-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                        <div className="bg-dark rounded-pill px-4 py-3 text-uppercase font-weight-bold text-white">Order Id - {cake.orderid}</div>
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
        
                             {cake.cakes.map((cakes,indexs) =>(
                                <tr key={indexs}>
                                    <th scope="row" className="border-0">
                                        <div className="p-2">
                                        <img src={cakes.image} alt="" width="70" className="img-fluid rounded shadow-sm" />
                                        <div className="ml-3 d-inline-block align-middle">
                                            <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle" key={index}>{cakes.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Weight: {cakes.weight} Kg</span>
                                        </div>
                                        </div>
                                    </th>
                                    <td className="border-0 align-middle">
                                        <strong>₹ {cakes.price}</strong>
                                    </td>
                                    <td className="border-0 align-middle">
                                        <div className="quantity">
                                            <b>{cakes.quantity}</b>
                                        </div>
                                    </td>
                                    <td className="border-0 align-middle">
                                        <b>{cakes.price * cakes.quantity}</b>
                                    </td>
                                </tr>                             
                            )) }
                            <b>Shipping Details -</b> <br></br>
                              <b>{cake.name}</b> <br></br> 
                              {cake.address}, {cake.city},{cake.pincode} <br></br>
                              <b>Phone Number - </b> {cake.phone}
                            <div className="text-right">
                              <b> Amount - </b> ₹ {cake.price},<b> Mode of Payment -</b> {cake.mode} <br></br>
                              <b>Order Status - </b> {cake.pending ? 'In Progress ' : 'Delivered'}                         <b>Order Date - {cake.orderdate}</b> 
                            </div>
                            </tbody>
                            </table>
                        </div>
                            {myOrder.length === 0 && 
                            <div className="alert alert-danger" role="alert" style={{"width": "1083px"}}>
                             No Order Found.!
                            </div>} 
                        </div>
                    </div>
                    
                    </div>
                </div>
            ))}       
            </div>
        </div>
    )
}

export default MyOrder