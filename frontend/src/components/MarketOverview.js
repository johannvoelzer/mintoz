import { useState, useEffect } from 'react'
import axios from 'axios'
import uuid from 'react-uuid'
import { NavLink } from 'react-router-dom'
import IndexBox, { IndexTabs, IndexTab, IndexCard, IndexContent } from '../styles/boxes/IndexBox'
import { MarketBox, MarketCard, CardDetails, DetailsChange } from '../styles/boxes/MarketBox'
import PerformanceBox from '../styles/boxes/PerformanceBox'
import Details from '../styles/text/Details'
import Loader from './Loader'

export default function MarketOverview() {
    const [active, setActive] = useState(0)
    const [indexData, setIndexData] = useState([])
    const [sectorData, setSectorData] = useState([])
    const [mostGainers, setMostGainers] = useState([])
    const [mostLosers, setMostLosers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/quotes/index?apikey=...`)     
        .then(response => {
            if (response && response.data) {
                setIndexData(response.data)
            }
        })
        axios.get(`https://financialmodelingprep.com/api/v3/historical-sectors-performance?limit=1&apikey=...`)     
        .then(response => {
            if (response && response.data) {
                setSectorData(response.data)
            }
        })
        axios.get(`https://financialmodelingprep.com/api/v3/gainers?apikey=...`)     
        .then(response => {
            if (response && response.data) {
                setMostGainers(response.data)
            }
        })
        axios.get(`https://financialmodelingprep.com/api/v3/losers?apikey=...`)     
        .then(response => {
            if (response && response.data) {
                setMostLosers(response.data)
            }
        })
        .then(setLoading(true))
    }, [])

    const gainers = mostGainers.map(result => (
        <div style={{margin: '0 0 0 30px',paddingRight: '0'}} key={uuid()}>
            <NavLink to={"/details/"+result.ticker} style={{textDecoration: 'none'}}>
                <MarketCard>
                    <h5>{result.ticker}</h5>
                    {result.companyName.length >= 21 ?
                    <h4>{result.companyName.substr(0, 18) + "\u2026"}</h4> :
                    <h4>{result.companyName}</h4>}
                    <CardDetails>
                        <h4 style={{marginTop: '20px'}}>${result.price}</h4>
                        {result.changesPercentage.substring(1, result.changesPercentage.length-2) >= 0 ?
                        <DetailsChange style={{background: 'var(--green-10)', color: 'var(--green-main)'}}>{result.changesPercentage.substring(1, result.changesPercentage.length-1).substr(0, 8)}</DetailsChange> :
                        <DetailsChange style={{background: 'var(--red-12)', color: 'var(--red-main)'}}>{result.changesPercentage.substring(1, result.changesPercentage.length-1).substr(0, 8)}</DetailsChange>}
                    </CardDetails>
                </MarketCard>
            </NavLink>
        </div>
    ))

    const losers = mostLosers.map(result => (
        <div style={{margin: '0 0 0 30px',paddingRight: '0'}} key={uuid()}>
            <NavLink to={"/details/"+result.ticker} style={{textDecoration: 'none'}}>
                <MarketCard>
                    <h5>{result.ticker}</h5>
                    {result.companyName.length >= 21 ?
                    <h4>{result.companyName.substr(0, 18) + "\u2026"}</h4> :
                    <h4>{result.companyName}</h4>}
                    <CardDetails>
                        <h4 style={{marginTop: '20px'}}>${result.price}</h4>
                        {result.changesPercentage.substring(1, result.changesPercentage.length-2) >= 0 ?
                        <DetailsChange style={{background: 'var(--green-10)', color: 'var(--green-main)'}}>{result.changesPercentage.substring(1, result.changesPercentage.length-1).substr(0, 8)}</DetailsChange> :
                        <DetailsChange style={{background: 'var(--red-12)', color: 'var(--red-main)'}}>{result.changesPercentage.substring(1, result.changesPercentage.length-1).substr(0, 8)}</DetailsChange>}
                    </CardDetails>
                </MarketCard>
            </NavLink>
        </div>
    ))

    const handleClick = event => {
        const index = parseInt(event.target.id, 0)
        if (index !== active) {
        setActive(index)
        }
    }

    const dowData = indexData.filter(obj => {
        return obj.symbol === "^DJI"
    })

    const spData = indexData.filter(obj => {
        return obj.symbol === "^GSPC"
    })

    const nasdaqData = indexData.filter(obj => {
        return obj.symbol === "^IXIC"
    })

    const ftseData = indexData.filter(obj => {
        return obj.symbol === "^FTSE"
    })

    const daxData = indexData.filter(obj => {
        return obj.symbol === "^GDAXI"
    })

    const cacData = indexData.filter(obj => {
        return obj.symbol === "^FCHI"
    })

    const nikkeiData = indexData.filter(obj => {
        return obj.symbol === "^N225"
    })

    const hangData = indexData.filter(obj => {
        return obj.symbol === "^HSI"
    })

    const shanghaiData = indexData.filter(obj => {
        return obj.symbol === "000001.SS"
    })

    if (loading && indexData.length !== 0 && sectorData.length !== 0) {
        return (
            <div>
                <IndexBox>
                    <IndexContent active={active === 0}>
                        <IndexCard>
                            <Details>
                                <h4 style={{color: 'var(--darkgrey-main)'}}>DOW JONES</h4>
                                {dowData[0] ?
                                (dowData[0]['changesPercentage'] >= 0 ?
                                (dowData[0]['changesPercentage'] === 0 ?
                                <h4 style={{color: 'var(--darkgrey-main)'}}>{dowData[0]['changesPercentage']}%</h4> :
                                <h4 style={{color: 'var(--green-main)'}}>+{dowData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--red-main)'}}>{dowData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                            </Details>
                            <Details>
                                {dowData[0] ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(dowData[0]['price'] * 100) / 100}</h5> :
                                <h5>–</h5>}
                                {dowData[0] ?
                                (dowData[0]['change'] >= 0 ?
                                (dowData[0]['change'] === 0 ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(dowData[0]['change'] * 100) / 100}</h5> :
                                <h5 style={{fontWeight: '500'}}>+{Math.round(dowData[0]['change'] * 100) / 100}</h5>) :
                                <h5 style={{fontWeight: '500'}}>{Math.round(dowData[0]['change'] * 100) / 100}</h5>) :
                                <h5>–</h5>}
                            </Details>
                        </IndexCard>
                        <IndexCard>
                            <Details>
                                <h4 style={{color: 'var(--darkgrey-main)'}}>S&P 500</h4>
                                {spData[0] ?
                                (spData[0]['changesPercentage'] >= 0 ?
                                (spData[0]['changesPercentage'] === 0 ?
                                <h4 style={{color: 'var(--darkgrey-main)'}}>{spData[0]['changesPercentage']}%</h4> :
                                <h4 style={{color: 'var(--green-main)'}}>+{spData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--red-main)'}}>{spData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                            </Details>
                            <Details>
                                {spData[0] ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(spData[0]['price'] * 100) / 100}</h5> :
                                <h5>–</h5>}
                                {spData[0] ?
                                (spData[0]['change'] >= 0 ?
                                (spData[0]['change'] === 0 ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(spData[0]['change'] * 100) / 100}</h5> :
                                <h5 style={{fontWeight: '500'}}>+{Math.round(spData[0]['change'] * 100) / 100}</h5>) :
                                <h5 style={{fontWeight: '500'}}>{Math.round(spData[0]['change'] * 100) / 100}</h5>) :
                                <h5>–</h5>}
                            </Details>
                        </IndexCard>
                        <IndexCard>
                            <Details>
                                <h4 style={{color: 'var(--darkgrey-main)'}}>NASDAQ</h4>
                                {nasdaqData[0] ?
                                (nasdaqData[0]['changesPercentage'] >= 0 ?
                                (nasdaqData[0]['changesPercentage'] === 0 ?
                                <h4 style={{color: 'var(--darkgrey-main)'}}>{nasdaqData[0]['changesPercentage']}%</h4> :
                                <h4 style={{color: 'var(--green-main)'}}>+{nasdaqData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--red-main)'}}>{nasdaqData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                            </Details>
                            <Details>
                                {nasdaqData[0] ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(nasdaqData[0]['price'] * 100) / 100}</h5> :
                                <h5>–</h5>}
                                {nasdaqData[0] ?
                                (nasdaqData[0]['change'] >= 0 ?
                                (nasdaqData[0]['change'] === 0 ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(nasdaqData[0]['change'] * 100) / 100}</h5> :
                                <h5 style={{fontWeight: '500'}}>+{Math.round(nasdaqData[0]['change'] * 100) / 100}</h5>) :
                                <h5 style={{fontWeight: '500'}}>{Math.round(nasdaqData[0]['change'] * 100) / 100}</h5>) :
                                <h5>–</h5>}
                            </Details>
                        </IndexCard>
                    </IndexContent>
                    <IndexContent active={active === 1}>
                        <IndexCard>
                            <Details>
                                <h4 style={{color: 'var(--darkgrey-main)'}}>FTSE 100</h4>
                                {ftseData[0] ?
                                (ftseData[0]['changesPercentage'] >= 0 ?
                                (ftseData[0]['changesPercentage'] === 0 ?
                                <h4 style={{color: 'var(--darkgrey-main)'}}>{ftseData[0]['changesPercentage']}%</h4> :
                                <h4 style={{color: 'var(--green-main)'}}>+{ftseData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--red-main)'}}>{ftseData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                            </Details>
                            <Details>
                                {ftseData[0] ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(ftseData[0]['price'] * 100) / 100}</h5> :
                                <h5>–</h5>}
                                {ftseData[0] ?
                                (ftseData[0]['change'] >= 0 ?
                                (ftseData[0]['change'] === 0 ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(ftseData[0]['change'] * 100) / 100}</h5> :
                                <h5 style={{fontWeight: '500'}}>+{Math.round(ftseData[0]['change'] * 100) / 100}</h5>) :
                                <h5 style={{fontWeight: '500'}}>{Math.round(ftseData[0]['change'] * 100) / 100}</h5>) :
                                <h5>–</h5>}
                            </Details>
                        </IndexCard>
                        <IndexCard>
                            <Details>
                                <h4 style={{color: 'var(--darkgrey-main)'}}>DAX</h4>
                                {daxData[0] ?
                                (daxData[0]['changesPercentage'] >= 0 ?
                                (daxData[0]['changesPercentage'] === 0 ?
                                <h4 style={{color: 'var(--darkgrey-main)'}}>{daxData[0]['changesPercentage']}%</h4> :
                                <h4 style={{color: 'var(--green-main)'}}>+{daxData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--red-main)'}}>{daxData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                            </Details>
                            <Details>
                                {daxData[0] ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(daxData[0]['price'] * 100) / 100}</h5> :
                                <h5>–</h5>}
                                {daxData[0] ?
                                (daxData[0]['change'] >= 0 ?
                                (daxData[0]['change'] === 0 ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(daxData[0]['change'] * 100) / 100}</h5> :
                                <h5 style={{fontWeight: '500'}}>+{Math.round(daxData[0]['change'] * 100) / 100}</h5>) :
                                <h5 style={{fontWeight: '500'}}>{Math.round(daxData[0]['change'] * 100) / 100}</h5>) :
                                <h5>–</h5>}
                            </Details>
                        </IndexCard>
                        <IndexCard>
                            <Details>
                                <h4 style={{color: 'var(--darkgrey-main)'}}>CAC 40</h4>
                                {cacData[0] ?
                                (cacData[0]['changesPercentage'] >= 0 ?
                                (cacData[0]['changesPercentage'] === 0 ?
                                <h4 style={{color: 'var(--darkgrey-main)'}}>{cacData[0]['changesPercentage']}%</h4> :
                                <h4 style={{color: 'var(--green-main)'}}>+{cacData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--red-main)'}}>{cacData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                            </Details>
                            <Details>
                                {cacData[0] ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(cacData[0]['price'] * 100) / 100}</h5> :
                                <h5>–</h5>}
                                {cacData[0] ?
                                (cacData[0]['change'] >= 0 ?
                                (cacData[0]['change'] === 0 ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(cacData[0]['change'] * 100) / 100}</h5> :
                                <h5 style={{fontWeight: '500'}}>+{Math.round(cacData[0]['change'] * 100) / 100}</h5>) :
                                <h5 style={{fontWeight: '500'}}>{Math.round(cacData[0]['change'] * 100) / 100}</h5>) :
                                <h5>–</h5>}
                            </Details>
                        </IndexCard>
                    </IndexContent>
                    <IndexContent active={active === 2}>
                        <IndexCard>
                            <Details>
                                <h4 style={{color: 'var(--darkgrey-main)'}}>NIKKEI</h4>
                                {nikkeiData[0] ?
                                (nikkeiData[0]['changesPercentage'] >= 0 ?
                                (nikkeiData[0]['changesPercentage'] === 0 ?
                                <h4 style={{color: 'var(--darkgrey-main)'}}>{nikkeiData[0]['changesPercentage']}%</h4> :
                                <h4 style={{color: 'var(--green-main)'}}>+{nikkeiData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--red-main)'}}>{nikkeiData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                            </Details>
                            <Details>
                                {nikkeiData[0] ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(nikkeiData[0]['price'] * 100) / 100}</h5> :
                                <h5>–</h5>}
                                {nikkeiData[0] ?
                                (nikkeiData[0]['change'] >= 0 ?
                                (nikkeiData[0]['change'] === 0 ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(nikkeiData[0]['change'] * 100) / 100}</h5> :
                                <h5 style={{fontWeight: '500'}}>+{Math.round(nikkeiData[0]['change'] * 100) / 100}</h5>) :
                                <h5 style={{fontWeight: '500'}}>{Math.round(nikkeiData[0]['change'] * 100) / 100}</h5>) :
                                <h5>–</h5>}
                            </Details>
                        </IndexCard>
                        <IndexCard>
                            <Details>
                                <h4 style={{color: 'var(--darkgrey-main)'}}>HANG SENG</h4>
                                {hangData[0] ?
                                (hangData[0]['changesPercentage'] >= 0 ?
                                (hangData[0]['changesPercentage'] === 0 ?
                                <h4 style={{color: 'var(--darkgrey-main)'}}>{hangData[0]['changesPercentage']}%</h4> :
                                <h4 style={{color: 'var(--green-main)'}}>+{hangData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--red-main)'}}>{hangData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                            </Details>
                            <Details>
                                {hangData[0] ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(hangData[0]['price'] * 100) / 100}</h5> :
                                <h5>–</h5>}
                                {hangData[0] ?
                                (hangData[0]['change'] >= 0 ?
                                (hangData[0]['change'] === 0 ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(hangData[0]['change'] * 100) / 100}</h5> :
                                <h5 style={{fontWeight: '500'}}>+{Math.round(hangData[0]['change'] * 100) / 100}</h5>) :
                                <h5 style={{fontWeight: '500'}}>{Math.round(hangData[0]['change'] * 100) / 100}</h5>) :
                                <h5>–</h5>}
                            </Details>
                        </IndexCard>
                        <IndexCard>
                            <Details>
                                <h4 style={{color: 'var(--darkgrey-main)'}}>SHANGHAI</h4>
                                {shanghaiData[0] ?
                                (shanghaiData[0]['changesPercentage'] >= 0 ?
                                (shanghaiData[0]['changesPercentage'] === 0 ?
                                <h4 style={{color: 'var(--darkgrey-main)'}}>{shanghaiData[0]['changesPercentage']}%</h4> :
                                <h4 style={{color: 'var(--green-main)'}}>+{shanghaiData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--red-main)'}}>{shanghaiData[0]['changesPercentage']}%</h4>) :
                                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                            </Details>
                            <Details>
                                {shanghaiData[0] ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(shanghaiData[0]['price'] * 100) / 100}</h5> :
                                <h5>–</h5>}
                                {shanghaiData[0] ?
                                (shanghaiData[0]['change'] >= 0 ?
                                (shanghaiData[0]['change'] === 0 ?
                                <h5 style={{fontWeight: '500'}}>{Math.round(shanghaiData[0]['change'] * 100) / 100}</h5> :
                                <h5 style={{fontWeight: '500'}}>+{Math.round(shanghaiData[0]['change'] * 100) / 100}</h5>) :
                                <h5 style={{fontWeight: '500'}}>{Math.round(shanghaiData[0]['change'] * 100) / 100}</h5>) :
                                <h5>–</h5>}
                            </Details>
                        </IndexCard>
                    </IndexContent>
                    <IndexTabs>
                        <IndexTab style={{opacity: `${props => (props.active ? '100%' : '40%')}`}} onClick={handleClick} active={active === 0} id={0}>
                            USA
                        </IndexTab>
                        <IndexTab onClick={handleClick} active={active === 1} id={1}>
                            EUROPE
                        </IndexTab>
                        <IndexTab onClick={handleClick} active={active === 2} id={2}>
                            ASIA
                        </IndexTab>
                    </IndexTabs>
                </IndexBox>
                <div>
                    <PerformanceBox>
                        <Details>
                            <h5>BASIC MATERIALS</h5>
                            {sectorData[0]['basicMaterialsChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['basicMaterialsChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['basicMaterialsChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>COMMUNICATION SERVICES</h5>
                            {sectorData[0]['communicationServicesChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['communicationServicesChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['communicationServicesChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>CONGLOMERATES</h5>
                            {sectorData[0]['conglomeratesChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['conglomeratesChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['conglomeratesChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>CONSUMER CYCLICAL</h5>
                            {sectorData[0]['consumerCyclicalChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['consumerCyclicalChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['consumerCyclicalChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>CONSUMER DEFENSIVE</h5>
                            {sectorData[0]['consumerDefensiveChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['consumerDefensiveChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['consumerDefensiveChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>ENERGY</h5>
                            {sectorData[0]['energyChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['energyChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['energyChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>FINANCIAL</h5>
                            {sectorData[0]['financialChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['financialChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['financialChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>FINANCIAL SERVICES</h5>
                            {sectorData[0]['financialServicesChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['financialServicesChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['financialServicesChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>HEALTHCARE</h5>
                            {sectorData[0]['healthcareChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['healthcareChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['healthcareChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>INDUSTRIAL GOODS</h5>
                            {sectorData[0]['industrialGoodsChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['industrialGoodsChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['industrialGoodsChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>INDUSTRIALS</h5>
                            {sectorData[0]['industrialsChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['industrialsChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['industrialsChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>REAL ESTATE</h5>
                            {sectorData[0]['realEstateChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['realEstateChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['realEstateChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>SERVICES</h5>
                            {sectorData[0]['servicesChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['servicesChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['servicesChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>TECHNOLOGY</h5>
                            {sectorData[0]['technologyChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['technologyChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['technologyChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                    <PerformanceBox>
                        <Details>
                            <h5>UTILITIES</h5>
                            {sectorData[0]['utilitiesChangesPercentage'] >= 0 ?
                            <h4 style={{color: 'var(--green-main)'}}>+{Math.round(sectorData[0]['utilitiesChangesPercentage'] * 100) / 100}%</h4> :
                            <h4 style={{color: 'var(--red-main)'}}>{Math.round(sectorData[0]['utilitiesChangesPercentage'] * 100) / 100}%</h4>}
                        </Details>
                    </PerformanceBox>
                </div>
                <MarketBox>
                    <h4 style={{color: 'var(--green-main)'}}>GAINERS</h4>
                    <div style={{padding: '20px 0', display: 'flex', overflow: 'auto'}}>
                        {gainers}
                    </div>
                </MarketBox>
                <MarketBox>
                    <h4 style={{color: 'var(--red-main)'}}>LOSERS</h4>
                    <div style={{padding: '20px 0', display: 'flex', overflow: 'auto'}}>
                        {losers}
                    </div>
                </MarketBox>
            </div>
        )
    }
    return (
        <Loader />
    )
}