
import React, { useState } from 'react'
import {Chart as ChartJS} from 'chart.js/auto'
import './stadistic.css'
import {Bar} from "react-chartjs-2"
const BarChart = ({chartData}) => {
  return <Bar data={chartData}/>
}

export default BarChart