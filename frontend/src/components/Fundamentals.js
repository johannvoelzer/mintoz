import InformationBox from '../styles/boxes/InformationBox'
import Details from '../styles/text/Details'
import Loader from './Loader'

export default function Fundamentals({quote, profile}) {

    if (quote.symbol && profile.symbol) {
        return (
            <InformationBox>
                <Details>
                    <h5>MKT CAP</h5>
                    {quote.marketCap >= 1000000000 ? <h4>{JSON.stringify(Math.round(quote.marketCap / 10000000) / 100)}B</h4> : <h4>{JSON.stringify(Math.round(quote.marketCap / 10000) / 100)}M</h4>}
                </Details>
                <hr />
                <Details>
                    <h5>P/E RATIO</h5>
                    {quote.pe === 'None' ? <h4>–</h4> : <h4>{JSON.stringify(Math.round(quote.pe * 100) / 100)}</h4>}
                </Details>
                <hr />
                <Details>
                    <h5>EPS</h5>
                    {quote.eps === 'None' ? <h4>–</h4> : <h4>{Math.round(quote.eps * 100)/100}</h4>}
                </Details>
                <hr />
                <Details>
                    <h5>DIV YIELD</h5>
                    {profile.lastDiv === 'None' ? <h4>–</h4> : <h4>{JSON.stringify(Math.round(profile.lastDiv/quote.price * 10000) / 100)}%</h4>}
                </Details>
                <hr />
                <Details>
                    <h5>VOLUME</h5>
                    {quote.volume === 'None' ? <h4>–</h4> : (quote.volume >= 1000000 ? <h4>{JSON.stringify(Math.round(quote.volume / 10000) / 100)}M</h4> : <h4>{JSON.stringify(Math.round(quote.volume / 10) / 100)}K</h4>)}
                </Details>
                <hr />
                <Details>
                    <h5>AVG VOLUME</h5>
                    {quote.avgVolume === 'None' ? <h4>–</h4> : (quote.avgVolume >= 1000000 ? <h4>{JSON.stringify(Math.round(quote.avgVolume / 10000) / 100)}M</h4> : <h4>{JSON.stringify(Math.round(quote.avgVolume / 10) / 100)}K</h4>)}
                </Details>
                <hr />
                <Details>
                    <h5>BETA</h5>
                    {profile.beta === 'None' ? <h4>–</h4> : <h4>{JSON.stringify(Math.round(profile.beta * 100) / 100)}</h4>}
                </Details>
            </InformationBox>
        )
    }
    return <Loader />
}
