import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../composants/productitem";

export default function Products(){

    const produits=useSelector(data=>data.jsondata)

    console.log(produits)
return(
<div><h1>Products</h1>

<div className="row">
{produits.map((p,i)=> <ProductItem  key={i} data={p}/>)}

</div>
</div>

)

}