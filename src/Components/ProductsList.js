import React from 'react'
import ProductCard from './cards/ProductCard'

export default function ProductsList({ prods, setSortType }) {
    const changetoAsc = () => {
        setSortType('asc');
    }
    const changetoDesc = () => {
        setSortType('desc');
    }
    return (
        <div>
            <h1>Products</h1>
            {prods.map((prod) => (
                < ProductCard prod={prod} />
            ))}
            <button onClick={changetoAsc}>Change To ASC</button>
            <button onClick={changetoDesc}>Change To DESC</button>
        </div>
    )
}
