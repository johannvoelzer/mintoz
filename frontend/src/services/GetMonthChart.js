import axios from 'axios'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import ChartBoxTop from '../styles/boxes/ChartBoxTop'
import Loader from '../components/Loader'

const url = 'https://www.alphavantage.co/query'
const key1 = process.env.ALPHA_VANTAGE_API_KEY_1
const key2 = process.env.ALPHA_VANTAGE_API_KEY_2

export default function GetMonthChart({ symbol, options }) {
    const [loading, setLoading] = useState(true)
    const [dataSeries, setDataSeries] = useState([])
    const [timeSeries, setTimeSeries] = useState([])
    const [dataColor, setDataColor] = useState('#EEEEEE')
    
    useEffect(() => {
        axios.get(`${url}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${key1}`)  
        .then(response => {
            if (response && response.data  && response.data['Time Series (Daily)']) {
                const data = response.data['Time Series (Daily)']
                console.log(data)
                setDataSeries(Object.keys(data).slice(0, 22).reverse().map(timestamp => {
                    return Math.round(data[timestamp]['4. close'] * 100)/100
                }))
                setTimeSeries(Object.keys(data).slice(0, 22).reverse().map(timestamp => {
                    return timestamp
                }))
                setLoading(false)
            } else {
                axios.get(`${url}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${key2}`)  
                .then(response => {
                    if (response && response.data  && response.data['Time Series (Daily)']) {
                        const data = response.data['Time Series (Daily)']
                        console.log(data)
                        setDataSeries(Object.keys(data).slice(0, 22).reverse().map(timestamp => {
                            return Math.round(data[timestamp]['4. close'] * 100)/100
                        }))
                        setTimeSeries(Object.keys(data).slice(0, 22).reverse().map(timestamp => {
                            return timestamp
                        }))
                        setLoading(false)
                    }
                })
            }
        })
    }, [symbol])

    useEffect(() => {
        if (dataSeries[0] >= dataSeries[21]) {
            setDataColor('#F43467')
        } else {
            setDataColor('#00B49F')
        }
    }, [dataSeries])
    
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
                <h4 style={{margin: '10px 20px 25px', color: 'var(--darkgrey-main)'}}>${dataSeries[21]}</h4>
                {dataSeries[0]>dataSeries[21] ? <h4 style={{margin: '10px 20px 25px', color: dataColor}}>- {Math.round((1-dataSeries[21]/dataSeries[0])*10000)/100}%</h4> : <h4 style={{margin: '10px 20px 25px', color: dataColor}}>+ {Math.round((1-dataSeries[21]/dataSeries[0])*(-10000))/100}%</h4>}
            </div>
            <Line useRefs="chart" data={data} options={options} />
        </ChartBoxTop>
    )
}