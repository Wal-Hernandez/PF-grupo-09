import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterByDestiny } from '../../redux/actions/filterByDestiny';
import { sortByPrice } from '../../redux/actions/sortByPrice';
import { sortByStock } from '../../redux/actions/sortByStock';

function Filters({ setCurrentPage }) {

    const cities = useSelector(state => state.cities);
    const dispatch = useDispatch();
    const [priceOrder, setPriceOrder] = useState('');
    const [stockOrder, setStockOrder] = useState('');

    function handleCities(e) {
        dispatch(filterByDestiny(e.target.value, priceOrder, stockOrder))
        setCurrentPage(1)
    }
    function handleSortByPrice(e) {
        dispatch(sortByPrice(e.target.value))
        setPriceOrder(e.target.value)
        setCurrentPage(1)
    }
    function handleSortByStock(e) {
        dispatch(sortByStock(e.target.value))
        setStockOrder(e.target.value)
        setCurrentPage(1)
    }


    return (
        <div className='select-container'>
            <select class="form-select" defaultValue="" onChange={handleSortByPrice}>
                <option value="" disabled>Sort by price</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <select class="form-select" defaultValue="" onChange={handleSortByStock}>
                <option value="" disabled>Sort by stock</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <select class="form-select" defaultValue="" onChange={handleCities}>
                <option value="" disabled>Filter by destination city</option>
                <option value="">Show all</option>
                {cities.map((e, index) => (
                    <option key={index}>{e.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Filters