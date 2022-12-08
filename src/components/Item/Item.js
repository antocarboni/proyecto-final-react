import './Item.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({ info }) => {

    return (
        <>
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={`/images/products/${info.img}`} alt={info.name} /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center colorTexto">{info.name}</h2>
                <p className="colorTexto">Precio: ${info.price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/detalle/${info.id}`}><button className="button">Comprar</button></Link>
                </div>
            </div>
        </div>
        </>
    )
};

export default Item;

