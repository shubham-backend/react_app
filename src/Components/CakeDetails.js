import { useState, useEffect } from "react";
import axios from "axios";

function CakeDetails(props)
{
    var [cakedetails, setcakedetails] = useState({})
    useEffect(() => {
		axios({
			url: process.env.REACT_APP_BASE_API_URL+"/cake/"+props.match.params.cakeid,
			method: 'get'
		}).then((response)=>{
			console.log("Cake Details API", response.data.data);
			setcakedetails(response.data.data)
		},(error)=>{
			console.log("Cake Details API Error", error);
		})
    },[])

    return (
        <div>
            <div class="container-fluid px-sm-1 py-5 mx-auto">
                <div class="row justify-content-center">
                    <div class="d-flex">
                        <div class="card card-1">
                            <div class="pr-3 row justify-content-end">
                                <div class="fa fa-heart-o like"></div>
                            </div>
                            <div class="product-pic"> <img class="pic1" src={cakedetails.image} /> </div>
                            <h5 class="product-name">{cakedetails.name}</h5>
                            <small class="category">{cakedetails.description}</small>
                            <div class="row px-3 justify-content-between">
                                <p class="price">₹{cakedetails.price}</p>
                                <div class="stars">{cakedetails.ratings}
                                 <span class="fa fa-star star-active"></span> 
                                <span class="fa fa-star star-active"></span> 
                                <span class="fa fa-star star-active"></span> 
                                <span class="fa fa-star-o"></span> 
                                <span class="fa fa-star-o"></span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}
export default CakeDetails