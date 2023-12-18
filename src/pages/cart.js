import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Delete,Pay } from "../Store/actions"
export default function Cart(){
  const dispatch=useDispatch()
  const cart =  useSelector(data=>data.TABCart)

  const total =cart.reduce((total,t)=>total+=t.quantite*t.prix+t.shipping ,0)

return(
    <div>
<div className="row"> 

{cart.map((cart,i)=><div key={i} className="col-3"> 
    
    <div className="card">
     <img src={`/Images/${cart.image}`} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3>Prix: MAD {cart.prix} </h3>
        <p>quantite:  {cart.quantite} </p>

        <p >{cart.shipping>0?`+Shipping ${cart.shipping}`:""}</p>
        
        <h3> Total : {(((cart.prix *cart.quantite)+cart.shipping)).toFixed(2)}</h3>
        <button className="btn btn-danger " onClick={()=>dispatch(Delete(cart.id))}>  delete  <i className="fa-solid fa-trash"></i></button>

         
                
      </div>

      </div>
    
    </div> )}

    </div>

<h1 style={{color:"blue"}}>Total : {total.toFixed(2) +" DH"}</h1> 
<button className="btn btn-primary col-4" onClick={()=>dispatch(Pay())} > Pay</button>
</div>
)

}