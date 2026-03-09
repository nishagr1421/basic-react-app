import "./product.css";
import Price from "./price.jsx";

function product({title, idx}) {
    let oldPrice=["12,493","14,493","16,493","499"];
    let newPrice=["11,993","12,493","12,883","399"];
    let descrption=[
        ["8,000 DPI","5 Programmable buttons"],
        [ "intutive surface" ,"Designed for iPad pro"], 
        ["designed for ipad pro","intutive surface"],
        ["wireless","optical orientation sensor"]
    ];
    return (
        <div className="product" >
           <h4>{title}</h4>
           <p>{descrption[idx][0]}</p>
           <p>{descrption[idx][1]}</p>
           <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default product;