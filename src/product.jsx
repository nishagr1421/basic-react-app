import "./product.css";

function Product({title, price, features = []}) {

    const list = features.map((feature, index) => 
        <li key={index}>{feature}</li>
    );

    let styles={backgroundColor:"red"};
    

    return (
        <div className="product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <h5>Product Description</h5>
            <ul>{list}</ul>
        </div>
    );
}

export default Product;