import Product from "./product.jsx";

function ProductTab(){
    let options=["hi-tech","durable","fast"];
    return (
        <>
        <Product title="phone" price={1000} features={options}/>
        <Product title="laptop"  price={2000}/>
        <Product title="pen" price={1} />
        </>
    );
}

export default ProductTab;