import { Link } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import './Item.css'

const Item = ({producto}) => {
  return (
   <>
   <div className="card card-compact w-96 bg-base-100 shadow-xl ">
        <figure><img src={`/images/games/${producto.img}`} alt={producto.name} /></figure>
        <div className="card-body">
            <h2 className="card-title justify-center colorTexto">{producto.name}</h2>
            <p className="colorTexto">Precio: ${producto.price}</p>
            <div className="card-actions justify-center">
                <Link to={`/item/${producto.id}`}><button className="btn btn-primary">Comprar</button></Link>
            </div>
        </div>
    </div>
   </>
  )
}

export default Item