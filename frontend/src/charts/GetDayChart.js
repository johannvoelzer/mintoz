import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { ChartBoxTop } from '../styles/boxes/ChartBox'
import Loader from '../components/Loader'

export default function GetWeekChart({ options, loading, dataSeries, timeSeries, actualPrice, actualChange }) {
    const [dataColor, setDataColor] = useState('#EEEEEE')

    useEffect(() => {
        if (actualChange < 0) {
            setDataColor('#F43467')
        } else {
            setDataColor('#00B49F')
        }
    }, [actualChange])
    
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
            <ChartBoxTop style={{height: '260px'}}>
                <Loader />
            </ChartBoxTop>
        )
    }
    return (
        <ChartBoxTop>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4 style={{margin: '10px 20px 25px', color: 'var(--darkgrey-main)'}}>${Math.round(actualPrice * 100) / 100}</h4>
                {actualChange >= 0 ?
                <h4 style={{margin: '10px 20px 25px 0', color: 'var(--green-main)'}}>+{actualChange}%</h4> :
                <h4 style={{margin: '10px 20px 25px 0', color: 'var(--red-main)'}}>{actualChange}%</h4>}
            </div>
            <div style={{height: '184px'}}>
                <Line useRefs="chart" data={data} options={options} />
            </div>
        </ChartBoxTop>
    )
}