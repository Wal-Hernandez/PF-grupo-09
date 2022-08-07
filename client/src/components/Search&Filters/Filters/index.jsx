import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterByActivity } from '../../../redux/actions/filterByActivity';
import { sortByPrice } from '../../../redux/actions/sortByPrice';
import { sortByStock } from '../../../redux/actions/sortByStock';

function Filters(props) {

    const [priceOrder, setPriceOrder] = useState("");
    const [stockOrder, setStockOrder] = useState("");
    const dispatch = useDispatch();

    function handleActivities(e){
        dispatch(filterByActivity(e.target.value, priceOrder, stockOrder))
        props.setActivity(e.target.value)
        props.setCurrentPage(1)
    }
    function handleSortByPrice(e){
        let startShortDate = ''
        let endShortDate = ''
        if(props.startDate !== ''){
            return startShortDate = props.startDate?.toISOString()
        }
        if(props.endDate !== ''){
            return endShortDate = props.endDate?.toISOString()
        }
        dispatch(sortByPrice("asc", props.city, startShortDate , endShortDate))
        setPriceOrder(e.target.value)
        props.setCurrentPage(1)
    }
    function handleSortByStock(e){
        let startShortDate = ''
        let endShortDate = ''
        if(props.startDate !== ''){
            return startShortDate = props.startDate?.toISOString()
        }
        if(props.endDate !== ''){
            return endShortDate = props.endDate?.toISOString()
        }
        dispatch(sortByStock(e.target.value, props.city, startShortDate, endShortDate))
        setStockOrder(e.target.value)
        props.setCurrentPage(1)
    }


  return (
    <div className='select-container'>
        <select className='form-select' defaultValue="" onChange={handleSortByPrice}>
            <option value="" disabled>Ordenar por precio</option>
            <option label={'Menor precio'} value="asc"></option>
            <option label={'Mayor precio'} value="desc"></option>
        </select>
        <select className="form-select" defaultValue="" onChange={handleSortByStock}>
            <option value="" disabled>Ordenar por stock</option>
            <option label={'Menor stock'} value="asc"></option>
            <option label={'Mayor stock'} value="desc"></option>
        </select>
        <select className="form-select" defaultValue="" onChange={handleActivities}>
            <option value="" disabled>Filtrar por actividades</option>
            <option value="">Mostrar todo</option>
            {props.activities?.map((e, index) => (
                <option key={index}>{e.name}</option>
            ))}
        </select>
    </div>
  )
}

export default Filters