import GetDayChart from '../services/GetDayChart'
import ChartBox from '../styles/boxes/ChartBox'
import ChartBoxBottom from '../styles/boxes/ChartBoxBottom'

export default function Chart({ symbol }) {
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

    return (
        <ChartBox>
            <GetDayChart symbol={symbol} options={options} />
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