import './ItemDetail.css'

export const ItemDetail = ({item}) => {
    return (
        <>
            <div className="detail">
                <div className="header">
                    <div className="titulo">
                        <h1>{item.name}</h1>
                        <h2>{item.subtitulo}</h2>
                    </div>
                    <div className="imagen">
                        <img src={item.imagen} alt={item.name} className={"img-producto"}/>
                    </div>
                </div>
                <div className="body">
                    <div className={"descipcion"}>
                        <img src={item.imagenMarca} alt={item.marca}/>
                        <h3>Descripcion</h3>
                        <p>{item.description}</p>
                    </div>

                    <div className={"item-description"}>
                        <h5>Marca:</h5>
                        <p>{item.marca}</p>
                    </div>
                    <div className={"item-description"}>
                        <h5>Precio:</h5>
                        <p>${item.precio}</p>
                    </div>
                    <div className={"item-description"}>
                        <h5>Stock:</h5>
                        <p>{item.cantidad}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
