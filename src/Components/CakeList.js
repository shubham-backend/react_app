import Cake from "./Cake"
function CakeList()
{
    return (
        <div>
            <ul class="nav nav-tabs aa-products-tab"><li class="active"><a href="#men" data-toggle="tab">All Cakes</a></li></ul>            
            <Cake />
        </div>
    )
}

export default CakeList