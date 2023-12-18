export  const Addtocart=(newcart)=>{
return {type:"Addtocart",playload:newcart} }
export const Delete=(id)=>{
    return{type:"delete",playload:id}
}
export const Pay=()=>{
    return{type:"pay"}
}

// export  const Delete=()=>{
//     return {type:"Delete",payload:} }
    


