import { useState, useEffect } from 'react'
import axios from 'axios'
import GetDayChart from '../charts/GetDayChart'
import GetWeekChart from '../charts/GetWeekChart'
import GetMonthChart from '../charts/GetMonthChart'
import GetYearChart from '../charts/GetYearChart'
import GetMaxChart from '../charts/GetMaxChart'
import ChartBox, { ChartTabs, ChartTab, ChartContent } from '../styles/boxes/ChartBox'

export default function Chart({ symbol, price, change }) {
    const [active, setActive] = useState(0)
    const [loadingDay, setLoadingDay] = useState(true)
    const [dataSeriesDay, setDataSeriesDay] = useState([])
    const [timeSeriesDay, setTimeSeriesDay] = useState([])
    const [loadingWeek, setLoadingWeek] = useState(true)
    const [dataSeriesWeek, setDataSeriesWeek] = useState([])
    const [timeSeriesWeek, setTimeSeriesWeek] = useState([])
    const [loadingMonth, setLoadingMonth] = useState(true)
    const [dataSeriesMonth, setDataSeriesMonth] = useState([])
    const [timeSeriesMonth, setTimeSeriesMonth] = useState([])
    const [loadingFull, setLoadingFull] = useState(true)
    const [dataSeriesYear, setDataSeriesYear] = useState([])
    const [timeSeriesYear, setTimeSeriesYear] = useState([])
    const [dataSeriesMax, setDataSeriesMax] = useState([])
    const [timeSeriesMax, setTimeSeriesMax] = useState([])
    
    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/5min/${symbol}?apikey=...`)
        .then(response => {
            if (response && response.data) {
                const data = response.data
                setDataSeriesDay(Object.keys(data).slice(0, 80).reverse().map(timestamp => {
                    return Math.round(data[timestamp]['close'] * 100)/100
                }))
                setTimeSeriesDay(Object.keys(data).slice(0, 80).reverse().map(timestamp => {
                    return data[timestamp]['date']
                }))
                setLoadingDay(false)
            }
        })
        axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/15min/${symbol}?apikey=...`)
        .then(response => {
            if (response && response.data) {
                const data = response.data
                setDataSeriesWeek(Object.keys(data).slice(0, 140).reverse().map(timestamp => {
                    return Math.round(data[timestamp]['close'] * 100)/100
                }))
                setTimeSeriesWeek(Object.keys(data).slice(0, 140).reverse().map(timestamp => {
                    return data[timestamp]['date']
                }))
                setLoadingWeek(false)
            }
        })
        axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/1hour/${symbol}?apikey=...`)
        .then(response => {
            if (response && response.data) {
                const data = response.data
                setDataSeriesMonth(Object.keys(data).slice(0, 140).reverse().map(timestamp => {
                    return Math.round(data[timestamp]['close'] * 100)/100
                }))
                setTimeSeriesMonth(Object.keys(data).slice(0, 140).reverse().map(timestamp => {
                    return data[timestamp]['date']
                }))
                setLoadingMonth(false)
            }
        })
        axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?serietype=line&apikey=...`) 
        .then(response => {
            if (response && response.data  && response.data.historical) {
                const data = response.data.historical
                setDataSeriesYear(Object.keys(data).slice(0, 253).reverse().map(timestamp => {
                    return Math.round(data[timestamp]['close'] * 100)/100
                }))
                setDataSeriesMax(Object.keys(data).reverse().map(timestamp => {
                    return Math.round(data[timestamp]['close'] * 100)/100
                }))
                setTimeSeriesYear(Object.keys(data).slice(0, 253).reverse().map(timestamp => {
                    return data[timestamp]['date']
                }))
                setTimeSeriesMax(Object.keys(data).reverse().map(timestamp => {
                    return data[timestamp]['date']
                }))
                setLoadingFull(false)
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

    const handleClick = event => {
        const index = parseInt(event.target.id, 0)
        if (index !== active) {
        setActive(index)
        }
    }

    const actualPrice = JSON.stringify(price)
    const actualChange = JSON.stringify(change)

    return (
        <ChartBox>
            <ChartContent active={active === 0}>
                <GetDayChart options={options} loading={loadingDay} dataSeries={dataSeriesDay} timeSeries={timeSeriesDay} actualPrice={actualPrice} actualChange={actualChange} />
            </ChartContent>
            <ChartContent active={active === 1}>
                <GetWeekChart options={options} loading={loadingWeek} dataSeries={dataSeriesWeek} timeSeries={timeSeriesWeek} actualPrice={actualPrice} />
            </ChartContent>
            <ChartContent active={active === 2}>
                <GetMonthChart options={options} loading={loadingMonth} dataSeries={dataSeriesMonth} timeSeries={timeSeriesMonth} actualPrice={actualPrice} />
            </ChartContent>
            <ChartContent active={active === 3}>
                <GetYearChart options={options} loading={loadingFull} dataSeries={dataSeriesYear} timeSeries={timeSeriesYear} actualPrice={actualPrice} />
            </ChartContent>
            <ChartContent active={active === 4}>
                <GetMaxChart options={options} loading={loadingFull} dataSeries={dataSeriesMax} timeSeries={timeSeriesMax} actualPrice={actualPrice} />
            </ChartContent>
            <ChartTabs>
                <ChartTab onClick={handleClick} active={active === 0} id={0}>
                    DAY
                </ChartTab>
                <ChartTab onClick={handleClick} active={active === 1} id={1}>
                    WEEK
                </ChartTab>
                <ChartTab onClick={handleClick} active={active === 2} id={2}>
                    MONTH
                </ChartTab>
                <ChartTab onClick={handleClick} active={active === 3} id={3}>
                    YEAR
                </ChartTab>
                <ChartTab onClick={handleClick} active={active === 4} id={4}>
                    MAX
                </ChartTab>
            </ChartTabs>
        </ChartBox>
    )
}