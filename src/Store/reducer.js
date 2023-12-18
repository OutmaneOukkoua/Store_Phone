import porduits from "../data/produits.json"
import Cart from "../pages/cart"

const intialState={

    
    TABCart:[],
    jsondata: porduits,


}

const reducer =(state=intialState,action)=>{

switch (action.type){
    case "Addtocart" :
        const IdFind =state.TABCart.find((t)=>t.id===action.playload.id)
        if(IdFind)
        {
          

            IdFind.quantite +=action.playload.quantite
           
           const NewTabcart = state.TABCart.filter((t)=>t.id!=action.playload.id)
            return {...state,TABCart:[...NewTabcart,IdFind]}

        }
    return {...state,TABCart:[...state.TABCart,action.playload]}

    case "delete" :
         return {...state,TABCart:[...state.TABCart.filter((i)=>i.id !== parseInt(action.playload))]}
    case "pay":
        return{...state,TABCart:[]}
    default:
        return state;

}

 



}
export default  reducer 
