import { useState,useEffect } from "react"
// import { getProductById } from "../../asyncMock"

import ItemDetail from "../../Components/ItemDetail"
import { useParams } from "react-router-dom"





const ItemDetailContainer =()=> {
    const [products,setProducts] = useState(null)
const {itemId}= useParams()
    useEffect(()=>{
        //aca hay que cargar el producto por id(tendria que traer los datos en array)
        
    //     getProductById(itemId)
    //     .then(response => {
    //         setProducts(response)
    //     })
    //     .catch(error => {
    //         console.error(error)
    // })
}, [itemId])





return(
    <div className="ItemDetailContainer"   style={{backgroundColor:'red' ,  width: '90%'}}>
     <h1>asdfgvasdgasd</h1>
<ItemDetail {...products}/>
    </div>
)
}
export default ItemDetailContainer 