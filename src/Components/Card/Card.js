import React, {useContext} from 'react';
import useCheckout from '../Hooks/useCheckout';

const Card = ({item}) => {
    const {items ,addItem, deleteItem} = useCheckout()
    return <div className="card">
    <img src={item.image} alt="Avatar"/>
    <div className="container">
      <h4><b>{item.title}</b></h4> 
      <div>Price : Rs.{item.price}</div> 
      <div className="actions">
        <button onClick={()=> addItem(item)}>Add</button>
        <span>{" "} {items[`product-${item.id}`] && items[`product-${item.id}`].count} {" "}</span>
        {items[`product-${item.id}`] && items[`product-${item.id}`].count  && <button onClick={() => deleteItem(item)}>Delete</button>}
        </div>
    </div>
  </div>
  
}
export default Card