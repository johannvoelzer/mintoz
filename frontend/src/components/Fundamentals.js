import { NavLink } from 'react-router-dom'
import * as ROUTES from '../constants/Routes'
import InformationBox from '../styles/boxes/InformationBox'
import Details from '../styles/text/Details'
import CompareButton from '../styles/buttons/CompareButton'
import Loader from './Loader'

export default function Fundamentals({result}) {

    if (result.MarketCapitalization) {
        return (
            <InformationBox>
                <Details>
                    <h5>MKT CAP</h5>
                    {result.MarketCapitalization >= 1000000000 ? <h4>{JSON.stringify(Math.round(result.MarketCapitalization / 10000000) / 100)}B</h4> : <h4>{JSON.stringify(Math.round(result.MarketCapitalization / 10000) / 100)}M</h4>}
                </Details>
                <hr />
                <Details>
                    <h5>EBITDA</h5>
                    {result.EBITDA === 'None' ? <h4>–</h4> : (result.EBITDA >= 1000000000 ? <h4>{JSON.stringify(Math.round(result.EBITDA / 10000000) / 100)}B</h4> : <h4>{JSON.stringify(Math.round(result.EBITDA / 10000) / 100)}M</h4>)}
                </Details>
                <hr />
                <Details>
                    <h5>ROE</h5>
                    {result.ReturnOnEquityTTM === '0' ? <h4>–</h4> : <h4>{Math.round(result.ReturnOnEquityTTM * 10000)/100}%</h4>}
                </Details>
                <hr />
                <Details>
                    <h5>P/E RATIO</h5>
                    {result.PERatio === 'None' ? <h4>–</h4> : <h4>{JSON.stringify(Math.round(result.PERatio * 100) / 100)}</h4>}
                </Details>
                <hr />
                <Details>
                    <h5>DIV YIELD</h5>
                    {result.DividendYield === 'None' ? <h4>–</h4> : <h4>{JSON.stringify(Math.round(result.DividendYield * 10000) / 100)}%</h4>}
                </Details>
                <hr />
                <Details>
                    <h5>BETA</h5>
                    {result.Beta === 'None' ? <h4>–</h4> : <h4>{JSON.stringify(Math.round(result.Beta * 100) / 100)}</h4>}
                </Details>
                <NavLink to={ROUTES.COMPARE} style={{textDecoration: 'none'}}>
                    <CompareButton>COMPARE</CompareButton>
                </NavLink>
            </InformationBox>
        )
    }
    return <Loader />
}
