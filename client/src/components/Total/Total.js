import React, {useReducer } from 'react'
import styles from './Total.module.css'
import { useSelector } from 'react-redux';

export default function Total({data}) {
    const { cart } = useSelector((state) => state)
    let totalaPagar=0
    cart.map((el) => {
        totalaPagar=totalaPagar+el.price*el.quantity
    })

    return(
        <div className={styles.totalDivStyle}>
            <p>Total:{totalaPagar}</p>
        </div> 
    )
}