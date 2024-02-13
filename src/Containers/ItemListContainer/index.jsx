import { useEffect, useState } from 'react';
import ItemList from '../../Components/ItemList';
import { useParams } from "react-router-dom"


// https://fakestoreapi.com/docs

function ItemListContainer() {
  
    const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])
    const { id } = useParams()

    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProductos(data)
            })
            .catch(e => console.error(e))

  

    }, [])
    useEffect(() => {
        if (id)
        {
            fetch(`https://fakestoreapi.com/products/category/${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProductos(data)
                })
                .catch(e => console.error(e))
        }
    }, [id])


    return (
        <div className="App" style={{backgroundColor:'purple' }}>
            <header className="App-header">
                <div>
                    <ItemList productos={productos} cart={cart} setCart={setCart}  />
                </div>
            </header>
        </div>
    );
}
export default ItemListContainer



// video clase 9 desde min 1-15-20  aprox empieza a explicar filtro caegorriA
