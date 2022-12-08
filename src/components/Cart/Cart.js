import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import swal from 'sweetalert2'
import './cart.css'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();


    const order = {
        buyer: {
            name: 'Antonella',
            email: 'antonella.carboni@outlook.com',
            phone: '+54 9 11 5978 6738',
            address: 'Av. Córdoba 4100, Palermo, CABA'
        },
        items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
        swal.fire({
            title: '¡Gracias por tu compra!',
            text: 'En breves nos comunicaremos para indicarte los pasos a seguir',
            imageUrl: '../images/shop.png',
            imageWidth: 300,
            imageHeight: 300,
        });
    }

    if (cart.length === 0) {
        return (
            <>
                <p className="m-5 noElements">No hay productos en tu carrito.</p>
                <Link to='/' className="button">¡Quiero comprar!</Link>
            </>
        );
    }

    return (
        <>
            <div className='cartItems'>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            
        </div>
        

                <p>
                    TOTAL: ${totalPrice()}
                </p>
        <div className="buttonFinish flex flex-col items-center mt-10">
            
                <button onClick={handleClick} className="button">Realizar compra</button>
            </div>
        </>
    )
}

export default Cart;