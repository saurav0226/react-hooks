import React,{useState} from 'react'
import {CheckoutContext} from '../CheckoutContext'

const CheckoutProvider = ({children}) => {
    const [items, updateItems] = useState({})
return <CheckoutContext.Provider value={{items, updateItems}}>
        {children}
</CheckoutContext.Provider>

}

export default CheckoutProvider