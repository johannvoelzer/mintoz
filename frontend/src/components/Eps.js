import { useEffect, useState } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import EpsBox from '../styles/boxes/EpsBox'
import Details from '../styles/text/Details'
import Loader from '../components/Loader'

export default function Eps({ symbol, quote }) {
    const [loading, setLoading] = useState(true)
    const [actualDataSeries, setActualDataSeries] = useState([])
    const [estimatedDataSeries, setEstimatedDataSeries] = useState([])
    const [timeSeries, setTimeSeries] = useState([])

    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/earnings-surpises/${symbol}?apikey=...`)
        .then(response => {
            if (response && response.data) {
                const data = response.data
                setActualDataSeries(Object.keys(data).slice(0, 4).reverse().map(timestamp => {
                    return Math.round(data[timestamp]['actualEarningResult'] * 100)/100
                }))
                setEstimatedDataSeries(Object.keys(data).slice(0, 4).reverse().map(timestamp => {
                    return Math.round(data[timestamp]['estimatedEarning'] * 100)/100
                }))
                setTimeSeries(Object.keys(data).slice(0, 4).reverse().map(timestamp => {
                    return data[timestamp]['date']
                }))
                setLoading(false)
            }
        })
    }, [symbol])
    
    const data = {
      labels: timeSeries,
      datasets: [
        {
            fill: false,
            lineTension: 40.0,
            borderColor: 'rgb(255, 255, 255, 0)',
            borderCapStyle: 'round',
            borderDash: [false],
            pointBackgroundColor: '#00aaff',
            pointBorderWidth: 0,
            pointHoverRadius: 9,
            pointHoverBorderWidth: 0,
            pointRadius: 9,
            data: actualDataSeries,
            label: 'actual',
        },
        {
            fill: false,
            lineTension: 40.0,
            borderColor: 'rgb(255, 255, 255, 0)',
            borderCapStyle: 'round',
            borderDash: [false],
            pointBackgroundColor: 'rgb(0, 103, 167, 0.8)',
            pointBorderWidth: 0,
            pointHoverRadius: 9,
            pointHoverBorderWidth: 0,
            pointRadius: 9,
            data: estimatedDataSeries,
            label: 'estimate',
        }
      ]
    }

    const options = {
        tooltips: {
            display: false,
            intersect: false,
            callbacks: false,
            displayColors: false,
        },
        hover: {
            display: false,
        },
        maintainAspectRatio: true,
        responsive: true,
        legend: false,
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        margin: 30,
                        fontSize: 18,
                        fontColor: 'rgb(246, 246, 246, 0.85)',
                        fontStyle: 'bold',
                        callback(value) {
                            if (value.substring(5, 7) < 4) {
                                return 'Q1 '
                            } else if (value.substring(5, 7) >= 3 && value.substring(5, 7) < 7) {
                                return 'Q2 '
                            } else if (value.substring(5, 7) >= 6 && value.substring(5, 7) < 10) {
                                return 'Q3 '
                            } else {
                                return 'Q4 '
                            }
                        }
                    }
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontSize: 16,
                        fontStyle: 'bold',
                        lineHeight: 2,
                        fontColor: '#4D616D',
                        callback(value) {
                            if (value >= 0) {
                                return '$' + value.toFixed(2) + '    '
                            } else {
                                return '-$' + value.toFixed(2).substring(1, 5) + '    '
                            }
                        }
                    }
                }
            ]
        }
    }

    if (loading) {
        return (
            <EpsBox style={{height: '210px'}}>
                <Loader />
            </EpsBox>
        )
    }
    return (
        <EpsBox>
            <Details style={{margin: '10px 8px 10px 12px'}}>
                <h5>EARNINGS</h5>
                {Math.round(quote.eps) === 0 ? <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4> : (quote.eps >= 0 ? <h4>${Math.round(quote.eps * 100)/100}</h4> : <h4>-${JSON.stringify(Math.round(quote.eps * 100)/100).substring(1, 10)}</h4>)}
            </Details>
            <hr style={{margin: '0 8px 0 12px'}}/>
            <div style={{display: 'flex', justifyContent: 'left', marginBottom: '10px'}}>
            {estimatedDataSeries.length > 0 ?
            <h5 style={{margin: '30px 12px 10px', color: '#0067A7'}}>EXPECTED EPS</h5> :
            <h5 style={{margin: '30px 12px 10px', color: '#4D616D'}}>NO EPS DATA AVAILABLE</h5>}
            {actualDataSeries.length > 0 ?
            <h5 style={{margin: '30px 12px 10px', color: '#00aaff'}}>ACTUAL EPS</h5> :
            <h5 style={{margin: '30px 12px 10px', color: '#00aaff'}}> </h5>}
            </div>
            <Line data={data} options={options} />
        </EpsBox>
    )
}