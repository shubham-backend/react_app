function Carousel()
{
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" id="carousel-slider">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="https://media.bakingo.com/Group 5414.jpg" alt="First slide" style={{height: "300px",width: "100px"}} />
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://media.bakingo.com/bakes_bakingo_d.jpg" alt="Second slide" style={{height: "300px",width: "100px"}} />
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://media.bakingo.com/birthday cakes d.jpg" alt="Third slide" style={{height: "300px",width: "100px"}} />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
        </div>
    )
}
export default Carousel