import axios from 'axios'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { ChartBoxTop } from '../styles/boxes/ChartBox'
import Loader from '../components/Loader'

export default function GetWeekChart({ symbol, options, actualPrice }) {
    const [loading, setLoading] = useState(true)
    const [dataSeries, setDataSeries] = useState([])
    const [timeSeries, setTimeSeries] = useState([])
    const [dataColor, setDataColor] = useState('#EEEEEE')
    
    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/5min/${symbol}?apikey=***`)
        .then(response => {
            if (response && response.data) {
                const data = response.data
                setDataSeries(Object.keys(data).slice(0, 80).reverse().map(timestamp => {
                    return Math.round(data[timestamp]['close'] * 100)/100
                }))
                setTimeSeries(Object.keys(data).slice(0, 80).reverse().map(timestamp => {
                    return data[timestamp]['date']
                }))
                setLoading(false)
            }
        })
    }, [symbol])

    useEffect(() => {
        if (dataSeries[0] >= dataSeries[79]) {
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
            <ChartBoxTop style={{height: '210px'}}>
                <Loader />
            </ChartBoxTop>
        )
    }
    return (
        <ChartBoxTop>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4 style={{margin: '10px 20px 25px', color: 'var(--darkgrey-main)'}}>${actualPrice}</h4>
                {dataSeries[0]>dataSeries[79] ? <h4 style={{margin: '10px 20px 25px', color: dataColor}}>-{Math.round((1-dataSeries[79]/dataSeries[0])*10000)/100}%</h4> : <h4 style={{margin: '10px 20px 25px', color: dataColor}}>+{Math.round((1-dataSeries[79]/dataSeries[0])*(-10000))/100}%</h4>}
            </div>
            <Line useRefs="chart" data={data} options={options} />
        </ChartBoxTop>
    )
}