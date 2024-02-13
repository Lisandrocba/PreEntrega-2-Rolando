import ItemCount from "../ItemCount"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="CarItem" style={{ backgroundColor: 'green', width: '80%' }} >
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt="" />
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
