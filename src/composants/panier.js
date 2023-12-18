import React from "react";
import { useSelector } from "react-redux";
export default function Iconpanier()
{

  const cart=useSelector(data=>data.TABCart)
return(

<div>

<div type="button" class="position-relative">
<i class="fa-sharp fa-solid fa-cart-shopping"></i>
  <span style={{padding:2}} class="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
  
 {  cart.reduce((total,q)=>total+=q.quantite ,0)}
  </span>
</div>
</div>

)


}