import { useState,useEffect } from "react"
// import { getProductById } from "../../asyncMock"

import ItemDetail from "../../Components/ItemDetail"
import { useParams } from "react-router-dom"





const ItemDetailContainer =()=> {
    const [products,setProducts] = useState(null)
const {itemId}= useParams()
    useEffect(()=>{

}, [itemId])





return(
    <div className="ItemDetailContainer"   style={{backgroundColor:'red' ,  width: '90%'}}>
     <h1>asdfgvasdgasd</h1>
<ItemDetail {...products}/>
    </div>
)
}
export default ItemDetailContainer 