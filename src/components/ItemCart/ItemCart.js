import React from "react";
import { useCartContext } from '../../context/CartContext';
import './itemCart.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (

<div className="card">
  <figure><img src={`/images/products/${product.img}`} alt={product.name}/></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>Cantidad: {product.quantity}</p>
      <p>Precio por unidad: ${product.price}</p>
      <p>Subtotal: ${product.quantity * product.price}</p>
      <p>Cantidad: {product.quantity}</p>
    <div className="card-actions justify-end">
    <button onClick={() => removeProduct(product.id)} className="button">Eliminar</button>
    </div>
  </div>
</div>



    )
}

export  default ItemCart;