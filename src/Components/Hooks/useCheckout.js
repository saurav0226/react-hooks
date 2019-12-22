import React, {useContext} from 'react'
import {CheckoutContext} from '../Checkout/CheckoutContext'
let total = 0
const useCheckout  = () => {
    const {items, updateItems} = useContext(CheckoutContext)
    
    const deleteItem = (item) => {
        let newItems = {...items}
        if(newItems.hasOwnProperty(`product-${item.id}`) && newItems[`product-${item.id}`].count === 1){
            delete newItems[`product-${item.id}`] 
        }else{
            newItems[`product-${item.id}`].count = newItems[`product-${item.id}`].count - 1
        }
        total = parseInt(total) - parseInt(item.price)
        updateItems(newItems)
    }
    const addItem = (item) => {
        let newItems = {...items}
        if(newItems.hasOwnProperty(`product-${item.id}`)) {
            newItems[`product-${item.id}`].count = newItems[`product-${item.id}`].count + 1
        } else {
            newItems[`product-${item.id}`] = {item: item, count: 1}
        }
        total = parseInt(item.price) + parseInt(total)
        updateItems(newItems)
    }

    return {
        items,
        deleteItem,
        addItem,
        count: Object.keys(items).length,
        total
    }
}
export default useCheckout