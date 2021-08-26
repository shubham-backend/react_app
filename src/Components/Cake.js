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
    width: "20em", 
    margin: "0 15px 10px 0",
    padding: "1em 0",
}

export default function Cake(props)
{
    
    return 	(
        <div className="row" style={stl}>
            { CakeList.map((cake,index) =>( 
                <div className="card hvimg" style={cakestyle} key={index}>
                    <img className="card-img-top hvimg1" src={cake.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{cake.name}</h5>
                    <p className="card-text">₹{cake.price}</p>
                    <div style={{textAlign:"center"}}>
                    <button className="btn btn-primary">Cake Details</button>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}
