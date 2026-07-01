export default function Card() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://i.pinimg.com/1200x/66/65/78/66657830d1cb7468aa6153bc198d50d9.jpg" className=" size card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Zara Product</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-dark">Add to cart</a>
            </div>
        </div>
    );
}