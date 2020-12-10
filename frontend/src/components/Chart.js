import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import GetDayChart from '../services/GetDayChart'
import ChartBox from '../styles/boxes/ChartBox'
import ChartBoxBottom from '../styles/boxes/ChartBoxBottom'

const url = 'https://www.alphavantage.co/query'
const key1 = process.env.ALPHA_VANTAGE_API_KEY_1
const key2 = process.env.ALPHA_VANTAGE_API_KEY_2

export default function Chart({ symbol }) {
    const [loading, setLoading] = useState(true)
    const [dataSeries, setDataSeries] = useState([])
    const [timeSeries, setTimeSeries] = useState([])
    
    useEffect(() => {
        axios.get(`${url}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=15min&apikey=${key1}`)  
        .then(response => {
            if (response && response.data  && response.data['Time Series (15min)']) {
                const data = response.data['Time Series (15min)']
                setDataSeries(Object.keys(data).slice(0, 64).reverse().map(timestamp => {
                    return Math.round(data[timestamp]['4. close'] * 100)/100
                }))
                setTimeSeries(Object.keys(data).slice(0, 64).reverse().map(timestamp => {
                    return timestamp
                }))
                setLoading(false)
            } else {
                axios.get(`${url}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=15min&apikey=${key2}`)  
                .then(response => {
                    if (response && response.data  && response.data['Time Series (15min)']) {
                        const data = response.data['Time Series (15min)']
                        setDataSeries(Object.keys(data).slice(0, 64).reverse().map(timestamp => {
                            return Math.round(data[timestamp]['4. close'] * 100)/100
                        }))
                        setTimeSeries(Object.keys(data).slice(0, 64).reverse().map(timestamp => {
                            return timestamp
                        }))
                        setLoading(false)
                    }
                })
            }
        })
    }, [symbol])

    const options = {
        tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
                label(tooltipItems) {
                return `$${tooltipItems.yLabel}`;
                },
            },
            displayColors: false,
        },
        hover: {
            mode: 'index',
            intersect: false,
        },
        maintainAspectRatio: true,
        responsive: true,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
                {
                display: false,
                },
            ],
            yAxes: [
                {
                display: false,
                ticks: {
                    callback(value) {
                    return '$' + value.toFixed(2);
                    }
                }
                }
            ]
        }
    }

    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <ChartBox>
            <GetDayChart dataSeries={dataSeries} timeSeries={timeSeries} options={options} />
            <ChartBoxBottom>
                <h5>DAY</h5>
                <h5>WEEK</h5>
                <h5>MONTH</h5>
                <h5>YEAR</h5>
                <h5>MAX</h5>
            </ChartBoxBottom>
        </ChartBox>
    )
}