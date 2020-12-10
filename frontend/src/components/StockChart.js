import axios from 'axios';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import ChartBox from '../styles/boxes/ChartBox';
import Details from '../styles/text/Details';

const url = 'https://www.alphavantage.co/query'
const key = process.env.ALPHA_VANTAGE_API_KEY

export default function StockChart({ symbol }) {

    const [chartData, setChartData] = useState([]);
    const [dataColor, setDataColor] = useState('#EEEEEE')

    useEffect(() => {
        axios.get(`${url}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${key}`)  
            .then(({ data }) => {
            setChartData(data['Time Series (5min)'])
        })
    }, [symbol]);

    const dataSeries = Object.keys(chartData).reverse().map(timestamp => {
        return Math.round(chartData[timestamp]['4. close'] * 100)/100
    })
    const timeSeries = Object.keys(chartData).reverse().map(timestamp => {
        return timestamp
    })

    useEffect(() => {
        if (dataSeries[0] >= dataSeries[99]) {
            setDataColor('#F43467')
        } else {
            setDataColor('#00B49F')
        }
    }, [dataSeries]);

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
                    },
                },
                },
            ],
        },
    };
    
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
    };

    return (
        <ChartBox>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4 style={{margin: '10px 20px 25px', color: 'var(--darkgrey-main)'}}>${dataSeries[99]}</h4>
                {dataSeries[0]>dataSeries[99] ? <h4 style={{margin: '10px 20px 25px', color: dataColor}}>- {Math.round((1-dataSeries[99]/dataSeries[0])*10000)/100}%</h4> : <h4 style={{margin: '10px 20px 25px', color: dataColor}}>+ {Math.round((1-dataSeries[99]/dataSeries[0])*(-10000))/100}%</h4>}
            </div>
            <Line useRefs="chart" data={data} options={options} />
            <hr />
            <Details style={{padding: '0 20px'}}>
                <h5>DAY</h5>
                <h5>WEEK</h5>
                <h5>MONTH</h5>
                <h5>YEAR</h5>
                <h5>MAX</h5>
            </Details>
        </ChartBox>
    );
}