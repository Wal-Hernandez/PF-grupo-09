import React, {useReducer } from 'react'
import styles from './Total.module.css'
import { useSelector } from 'react-redux';

export default function Total({data}) {
    let totalaPagar
    if(localStorage.getItem("myCart")){
        let myCarttext=localStorage.getItem("myCart")
        let myCartparsed=JSON.parse(myCarttext)
        totalaPagar=0
        myCartparsed.map((el) => {
            totalaPagar=totalaPagar+el.price*el.quantity
        })
    }

    return(
        <div className={styles.totalDivStyle}>
            <p>Total:{totalaPagar}</p>
        </div> 
    )
}