import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({productSelected}) => {

  
  return (
    <div className="cardProductDetail">

<div className="card w-96 bg-base-100 shadow-xl image-full imagenCard">
<figure><img className='imgDetail' src={`/images/games/${productSelected.img}`} alt={productSelected.name} /></figure>
  <div className="card-body">
  <h2 className="card-title colorTexto justify-center">{productSelected.name}</h2>
    <p className='colorTexto'>{productSelected.description}</p>
    <p className='colorTexto'>Precio: ${productSelected.price}</p>
    <div className="card-actions justify-center">
      <ItemCount/>
    </div>
  </div>
</div>



</div>
  )
}

export default ItemDetail