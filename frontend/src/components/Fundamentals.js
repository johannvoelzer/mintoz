import InformationBox from '../styles/boxes/InformationBox'
import Details from '../styles/text/Details'
import Loader from './Loader'

export default function Fundamentals({quote, profile, ratios}) {

    if (quote.symbol && profile.symbol) {
        return (
            <InformationBox>
                <Details>
                    <h5>MKT CAP</h5>
                    {Math.round(quote.marketCap) === 0 ?
                    <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4> :
                    (quote.marketCap >= 1000000000000 ?
                    <h4>{JSON.stringify(Math.round(quote.marketCap / 10000000000) / 100)}T</h4> :
                    (quote.marketCap >= 1000000000 ? <h4>{JSON.stringify(Math.round(quote.marketCap / 10000000) / 100)}B</h4> : <h4>{JSON.stringify(Math.round(quote.marketCap / 10000) / 100)}M</h4>))}
                </Details>
                <hr />
                <Details>
                    <h5>SHARES OUT</h5>
                    {Math.round(quote.sharesOutstanding) === 0 ? <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4> : (quote.sharesOutstanding >= 1000000000 ? <h4>{JSON.stringify(Math.round(quote.sharesOutstanding / 10000000) / 100)}B</h4> : <h4>{JSON.stringify(Math.round(quote.sharesOutstanding / 10000) / 100)}M</h4>)}
                </Details>
                <hr />
                <Details>
                    <h5>P/E RATIO</h5>
                    {Math.round(quote.pe * 100) === 0 ? <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4> : <h4>{JSON.stringify(Math.round(quote.pe * 100) / 100)}</h4>}
                </Details>
                <hr />
                <Details>
                    <h5>DIV YIELD</h5>
                    {ratios ?
                    (ratios[0]['date'].substr(5, 2) === ratios[1]['date'].substr(5, 2) ?
                    <h4 style={{color: 'var(--yellow-main)'}}>{JSON.stringify(Math.round((ratios[0]['adjDividend'] / quote.price) * 10000) / 100)}%</h4> :
                    (ratios[0]['date'].substr(5, 2) === ratios[2]['date'].substr(5, 2) ?
                    <h4 style={{color: 'var(--yellow-main)'}}>{JSON.stringify(Math.round((ratios[0]['adjDividend'] / quote.price) * 20000) / 100)}%</h4> :
                    <h4 style={{color: 'var(--yellow-main)'}}>{JSON.stringify(Math.round((ratios[0]['adjDividend'] / quote.price) * 40000) / 100)}%</h4>)) :
                    <h4 style={{color: 'var(--yellow-main)'}}>0%</h4>}
                </Details>
                <hr />
                <Details>
                    <h5>VOLUME</h5>
                    {Math.round(quote.volume) === 0 ? <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4> : (quote.volume >= 1000000 ? <h4>{JSON.stringify(Math.round(quote.volume / 10000) / 100)}M</h4> : <h4>{JSON.stringify(Math.round(quote.volume / 10) / 100)}K</h4>)}
                </Details>
                <hr />
                <Details>
                    <h5>AVG VOLUME</h5>
                    {Math.round(quote.avgVolume) === 0 ? <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4> : (quote.avgVolume >= 1000000 ? <h4>{JSON.stringify(Math.round(quote.avgVolume / 10000) / 100)}M</h4> : <h4>{JSON.stringify(Math.round(quote.avgVolume / 10) / 100)}K</h4>)}
                </Details>
                <hr />
                <Details>
                    <h5>BETA</h5>
                    {Math.round(profile.beta) === 0 ? <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4> : <h4>{JSON.stringify(Math.round(profile.beta * 100) / 100)}</h4>}
                </Details>
            </InformationBox>
        )
    }
    return (
        <InformationBox style={{height: '328px'}}>
            <Loader />
        </InformationBox>
    )
}
