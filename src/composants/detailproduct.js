import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Addtocart } from "../Store/actions"

export default function Detailproduct() {
const [nb,setNb] = useState(1)
const total=0
    const {id}=useParams() 
    const produit= useSelector(data=>data.jsondata).find((p)=>p.id==parseInt(id))
console.log(produit)
//const newcart ={}
    

const dispatch =useDispatch()
function handleChange(e) {
    setNb(e.target.value)
    
}

function AddProducts(){

dispatch(Addtocart({id:produit.id,image:produit.image,quantite:parseInt(nb),prix:produit.prix,shipping:produit.shipping}))
//console.log(useSelector(data=>data.state.cart))


}


return (

<div className="row">
<div className="col-6">
<img style={{width:"600px",height:"500px"}} src={`/Images/${produit.image}`} />

</div>
<div className="col-6"><p>{produit.discription}</p>
<h3>Prix: {produit.prix}</h3>
<input type="number" value={nb} min="1" onChange={handleChange}/>
<p> Total: {(produit.prix*nb).toFixed(2)}</p>
<input onClick={AddProducts} type="button" className="btn btn-primary" value={"AddToCart"}/>
</div>
</div>

)


}