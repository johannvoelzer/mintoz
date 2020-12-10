import GetDayChart from '../services/GetDayChart'
import ChartBox from '../styles/boxes/ChartBox'
import ChartBoxBottom from '../styles/boxes/ChartBoxBottom'

export default function Chart({ symbol }) {
    return (
        <ChartBox>
            <GetDayChart symbol={symbol} />
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