import { Link } from "react-router-dom"
export default function ProductItem(props){
return(
<div className="col-3"> 
    
<div className="card">
  <Link to ={`/details/${props.data.id}`}><img src={`./Images/${props.data.image}`} className="card-img-top" alt="..."/></Link>
  <div className="card-body">
    <h5 className="card-title">{`${props.data.marque} ${props.data.modele} `} </h5>
    <p className="card-text">{props.data.discription.slice(0,45)}...</p>
    <h3>Prix: MAD {props.data.prix} </h3>
    <p >{props.data.shipping>0?`+Shipping ${props.data.shipping}`:"Free Shipping"}</p>
  
  </div>
  </div>
</div>

)

}