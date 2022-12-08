import './ItemDetail.css'
import React, {useState} from "react";
import { useCartContext } from '../../context/CartContext';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
      <div className="cardProductDetail">
<figure><img className='imgDetail' src={`/images/products/${data.img}`} alt={data.name} /></figure>
      <div className="card w-50 bg-base-100 shadow-xl image-full imagenCard">
      
        <div className="card-body">
        <h2 className="card-title colorTexto justify-center">{data.name}</h2>
          <p className='colorTexto'>{data.description}</p>
          <p className='colorTexto'>Precio: ${data.price}</p>
          <div className="card-actions justify-center">
            {
                              goToCart
                              ? 
                              <div className='buttomsFlex'>
      
                              <div><Link to='/cart' className='button'>Ver mi carrito</Link></div>
                              <div><Link to='/' className='button'>¡Quiero seguir comprando!</Link></div>
                              
                              </div>
      
                              : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            }
          </div>
        </div>
      </div>
      </div>
    );
}

export default ItemDetail;