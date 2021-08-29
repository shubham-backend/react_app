import { Link } from "react-router-dom";
import {useState, useEffect} from "react"
import axios from "axios"
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";

var CakeList =[
{
    name:"Truffle Cake",
    price:"100",
    image:"truffle.webp"
},{
    name:"Cream Cake",
    price:"200",
    image:"cream.webp"
}, {
    name:"Chocolate Cake",
    price:"300",
    image:"chocolate.webp"
}, {
    name:"Crunchy Cake",
    price:"400",
    image:"crunchy.webp"
}, {
    name:"Gems Cake",
    price:"500",
    image:"gems.webp"
}, {
    name:"Photo Cake",
    price:"600",
    image:"photo.webp"
}, {
    name:"Heart Cake",
    price:"700",
    image:"heart.webp"
}, {
    name:"Designer Cake",
    price:"800",
    image:"designer.webp"
}, {
    name:"Truffle Cake",
    price:"900",
    image:"truffle.webp"
},{
    name:"Truffle Cake",
    price:"1000",
    image:"truffle.webp"
}, {
    name:"Truffle Cake",
    price:"1100",
    image:"truffle.webp"
},{
    name:"Truffle Cake",
    price:"1200",
    image:"truffle.webp"
}
];

let stl = {
    display: "flex",
    "justifyContent": "center",
    "flexFlow": "wrap row",
    "alignItems": "flex-start",
    "marginTop": "40px"
}

let cakestyle = {
    width: "18em", 
    margin: "0 15px 10px 0",
    padding: "1em 0",
}
//https://www.npmjs.com/package/react-spinners
// https://www.davidhu.io/react-spinners/
export default function Cake(props)
{
    
    var[cake,setCakes]= useState([]);
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#FFFFFF");

    useEffect(() => {
        axios({
            method:'get',
            url: process.env.REACT_APP_BASE_API_URL +"/allcakes"
            }).then((response)=>{
            console.log("response from all cakes api " , response.data)
            setCakes(response.data.data)
            setLoading(false);
            }, (error)=>{
            console.log("error from api " , error)
            }) 
    }, [])
    return 	(
        <div className="row" style={stl}>
            <GridLoader color={color} loading={loading} css={override} size={15} />
            { cake?.map((cake,index) =>( 
                <div className="card hvimg" style={cakestyle} key={index}>
                    <Link to={"/cake/"+cake.cakeid}> <img className="card-img-top hvimg1" src={cake.image} alt="Card image cap"/> </Link>
                <div className="card-body">
                    <h5 className="card-title">{cake.name}</h5>
                    <p className="card-text">₹{cake.price}</p>
                    <div style={{textAlign:"center"}}>
                   <Link to={"/cake/"+cake.cakeid}> <button className="btn btn-primary">Cake Details</button> </Link>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}
