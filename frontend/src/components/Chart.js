import { useState } from 'react'
import GetDayChart from '../charts/GetDayChart'
import GetWeekChart from '../charts/GetWeekChart'
import GetMonthChart from '../charts/GetMonthChart'
import GetYearChart from '../charts/GetYearChart'
import GetMaxChart from '../charts/GetMaxChart'
import ChartBox, { ChartTabs, ChartTab, ChartContent } from '../styles/boxes/ChartBox'

export default function Chart({ symbol, price }) {
    const [active, setActive] = useState(0)

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

    return (
        <ChartBox>
            <ChartContent active={active === 0}>
                <GetDayChart symbol={symbol} options={options} actualPrice={actualPrice} />
            </ChartContent>
            <ChartContent active={active === 1}>
                <GetWeekChart symbol={symbol} options={options} actualPrice={actualPrice} />
            </ChartContent>
            <ChartContent active={active === 2}>
                <GetMonthChart symbol={symbol} options={options} actualPrice={actualPrice} />
            </ChartContent>
            <ChartContent active={active === 3}>
                <GetYearChart symbol={symbol} options={options} actualPrice={actualPrice} />
            </ChartContent>
            <ChartContent active={active === 4}>
                <GetMaxChart symbol={symbol} options={options} actualPrice={actualPrice} />
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