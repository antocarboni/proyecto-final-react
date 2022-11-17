import './ItemsListContainer.css'
import ItemList from '../ItemList/ItemList.js'
import { useEffect, useState } from "react"
import { data } from "../../data/data"
import { useParams } from 'react-router-dom'


const ItemsListContainer = () => {


const {categoriaId} = useParams();
const [productList, setProductList] = useState([]);

/* ---------------------- */

const getProducts = new Promise ((resolve, rejects)=>{
  setTimeout(()=>{
    resolve(data)
  }, 1000)
})

/* ------------------------ */

useEffect(()=>{
  getProducts.then((respuesta)=>{
    if(categoriaId){
  setProductList(respuesta.filter((data) => data.category === categoriaId ))
    } else {
      setProductList(respuesta)
    }
  });
  setTimeout(()=>{
  }, 1000)
}, [categoriaId]);

/* ------------------------------- */

  return (
   <>
   <div className='cardProduct'>

   <ItemList productList={productList}/>

   </div>
   </>
  )
}

export default ItemsListContainer