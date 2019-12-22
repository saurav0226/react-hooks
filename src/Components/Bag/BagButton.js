import React, {useContext} from 'react';
import useCheckout from '../Hooks/useCheckout';

const BagButton = () => {
    const {count} = useCheckout()
    return <button>{count}</button>
}
export default BagButton