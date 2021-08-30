import { useEffect, useState } from "react";
import axios from 'axios';
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
import { Link } from "react-router-dom";
function Search(props)
{
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

    let [cakes,setCakes] = useState([]);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#FFFFFF");

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    useEffect(()=>{
        axios({
            url: process.env.REACT_APP_BASE_API_URL+"/searchcakes?q=choco",
            method: 'get'
        }).then((response)=>{
            console.log("shubham", response.data.data);
            setCakes(response.data.data);
            setLoading(false);
        },(error)=>{
            console.log("error", error);
        })
    },[])

    return (
        <div className="row" style={stl}>
            <GridLoader color={color} loading={loading} css={override} size={15} />
            { cakes?.map((cake,index) =>( 
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
export default Search