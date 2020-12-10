import axios from 'axios'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import ChartBoxTop from '../styles/boxes/ChartBoxTop'
import Loader from '../components/Loader'

const url = 'https://www.alphavantage.co/query'
const key = process.env.ALPHA_VANTAGE_API_KEY

export default function GetYearChart({ symbol }) {
    const [loading, setLoading] = useState(true)
    const [dataSeries, setDataSeries] = useState([])
    const [timeSeries, setTimeSeries] = useState([])
    const [dataColor, setDataColor] = useState('#EEEEEE')
    
    useEffect(() => {
        axios.get(`${url}?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${key}`)  
        .then(response => {
            if (response && response.data  && response.data['Weekly Time Series']) {
                const data = response.data['Weekly Time Series']
                console.log(data)
                setDataSeries(Object.keys(data).slice(0, 54).reverse().map(timestamp => {
                    return Math.round(data[timestamp]['4. close'] * 100)/100
                }))
                setTimeSeries(Object.keys(data).slice(0, 54).reverse().map(timestamp => {
                    return timestamp
                }))
                setLoading(false)
            }
        })
    }, [symbol])

    useEffect(() => {
        if (dataSeries[0] >= dataSeries[53]) {
            setDataColor('#F43467')
        } else {
            setDataColor('#00B49F')
        }
    }, [dataSeries])

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
    
    const data = {
      labels: timeSeries,
      datasets: [
        {
            fill: false,
            lineTension: 0.2,
            backgroundColor: '#EEEEEE',
            borderColor: dataColor,
            borderCapStyle: 'round',
            borderDash: [false],
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: '#00B49F',
            pointBackgroundColor: '#00B49F',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: '#00B49F',
            pointHoverBorderColor: '#00B49F',
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 10,
            data: dataSeries,
        }
      ]
    }

    if (loading) {
        return (
            <ChartBoxTop style={{height: '100px'}}>
                <Loader />
            </ChartBoxTop>
        )
    }
    return (
        <ChartBoxTop>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4 style={{margin: '10px 20px 25px', color: 'var(--darkgrey-main)'}}>${dataSeries[53]}</h4>
                {dataSeries[0]>dataSeries[53] ? <h4 style={{margin: '10px 20px 25px', color: dataColor}}>- {Math.round((1-dataSeries[53]/dataSeries[0])*10000)/100}%</h4> : <h4 style={{margin: '10px 20px 25px', color: dataColor}}>+ {Math.round((1-dataSeries[53]/dataSeries[0])*(-10000))/100}%</h4>}
            </div>
            <Line useRefs="chart" data={data} options={options} />
        </ChartBoxTop>
    )
}