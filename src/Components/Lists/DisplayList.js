import React, { useState, useEffect, useContext } from 'react';
import {getProductList} from '../../DummyData/dummy'
import Card from '../Card/Card';
const DisplayList = () => {
    const [list, SetList] = useState([])

    useEffect(() => {
        SetList(getProductList())
    }, [list])

    
    return <ul className="displayList">{
        list.map(item => <li className="listItem" key={item.title}>
        <Card item={item} />
        </li>)
    }</ul>
}
export default DisplayList