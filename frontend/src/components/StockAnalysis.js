import { RangeBox, PriceBullet, Ma50Bullet, Ma50Line, Ma50Tag, Ma200Bullet, Ma200Line, Ma200Tag } from '../styles/boxes/RangeBox'
import Details from '../styles/text/Details'
import Loader from './Loader'

export default function PriceTarget({quote}) {
    const pricePosition = quote.price/quote.yearHigh*100
    const ma50Position = quote.priceAvg50/quote.yearHigh*100
    const ma200Position = quote.priceAvg200/quote.yearHigh*100

    if (quote.symbol) {
        return (
            <RangeBox>
                <Details>
                    <h4>${Math.round(quote.yearLow*100)/100}</h4>
                    <h5 style={{color: 'var(--yellow-main'}}>52W RANGE</h5>
                    <h4>${Math.round(quote.yearHigh*100)/100}</h4>
                </Details>
                <hr style={{height: '12px', backgroundColor: 'var(--darkgrey-25)'}} />
                <div style={{paddingLeft: ma50Position + '%'}}>
                    <Ma50Line>
                        <Ma50Bullet />
                        <Ma50Tag>MA50</Ma50Tag>
                    </Ma50Line>
                </div>
                <div style={{paddingLeft: ma200Position + '%'}}>
                    <Ma200Line>
                        <Ma200Bullet />
                        <Ma200Tag>MA200</Ma200Tag>
                    </Ma200Line>
                </div>
                <div style={{paddingLeft: pricePosition + '%'}}>
                    <PriceBullet />
                </div>
            </RangeBox>
        )
    }
    return <Loader />
}