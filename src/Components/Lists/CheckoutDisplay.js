import React from 'react';
import useCheckout from '../Hooks/useCheckout';
import Card from '../Card/Card';

const DisplayList = () => {
    const {items, total} = useCheckout()
    const values = Object.values(items)
    return <div className="displayList">
        <h1>Checkout</h1>
        {values.length === 0 && "No Items to checkout"}
        <ul> {
            values.map(product => <li className="listItem" key={product.item.id}>
            <Card item={product.item}/>
        </li>)
    }</ul>
    <hr />
    <div>Total: {total}</div>
    </div>
}
export default DisplayList