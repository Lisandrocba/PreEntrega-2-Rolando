import ItemCount from "../ItemCount"


const ItemDetail = ({ id, name, image, category, description, price, stock,title }) => {



    return (
        <article className="CarItem" style={{ backgroundColor: 'green', width: '80%' }} >
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={title} width={300} />
            </picture>
            <section>
                <p className="Info"> Categoria:{category}</p>
                <p className="Info">Descripcion:{description}</p>
                <p className="Info">Precio:${price}</p>
            </section>
            <footer className="ItemFooter">

                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada')} />
            </footer>
        </article>
    )
}

export default ItemDetail
