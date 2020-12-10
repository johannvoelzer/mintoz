import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import ChartBoxTop from '../styles/boxes/ChartBoxTop'

export default function GetDayChart({ dataSeries, timeSeries, options }) {
    const [dataColor, setDataColor] = useState('#EEEEEE')

    useEffect(() => {
        if (dataSeries[0] >= dataSeries[63]) {
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

    return (
        <ChartBoxTop>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4 style={{margin: '10px 20px 25px', color: 'var(--darkgrey-main)'}}>${dataSeries[63]}</h4>
                {dataSeries[0]>dataSeries[63] ? <h4 style={{margin: '10px 20px 25px', color: dataColor}}>- {Math.round((1-dataSeries[63]/dataSeries[0])*10000)/100}%</h4> : <h4 style={{margin: '10px 20px 25px', color: dataColor}}>+ {Math.round((1-dataSeries[63]/dataSeries[0])*(-10000))/100}%</h4>}
            </div>
            <Line useRefs="chart" data={data} options={options} />
        </ChartBoxTop>
    )
}