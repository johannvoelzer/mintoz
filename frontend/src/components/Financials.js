import { useState, useEffect } from 'react'
import axios from 'axios'
import InformationBox from '../styles/boxes/InformationBox'
import Details from '../styles/text/Details'

export default function Financials({symbol}) {
    const [financials, setFinancials] = useState([])

    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/financial-growth/${symbol}?period=quarter&limit=1&apikey=...`)  
        .then(response => {
            if (response && response.data && response.data.length !== 0) {
                setFinancials(response.data[0])
            }
        })
    }, [symbol])

    return (
        <InformationBox>
            <Details>
                <h4 style={{color: 'var(--darkgrey-main)', width: '40px'}}>10Y</h4>
                <h5 style={{textAlign: 'center', color: 'var(--white-main)'}}>GROWTH PER SHARE</h5>
                <h4 style={{color: 'var(--darkgrey-main)', width: '40px', textAlign: 'right'}}>3Y</h4>
            </Details>
            <Details style={{marginTop: '30px', color: 'var(--white-main)'}}>
                {financials.tenYRevenueGrowthPerShare ?
                (financials.tenYRevenueGrowthPerShare >= 0 ?
                <h4 style={{width: '60px', color: 'var(--green-main)'}}>+{Math.round(financials.tenYRevenueGrowthPerShare * 100)}%</h4> :
                <h4 style={{width: '60px', color: 'var(--red-main)'}}>{Math.round(financials.tenYRevenueGrowthPerShare * 100)}%</h4>) :
                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                <h5 style={{textAlign: 'center'}}>REVENUE</h5>
                {financials.threeYRevenueGrowthPerShare ?
                (financials.threeYRevenueGrowthPerShare >= 0 ?
                <h4 style={{width: '60px', color: 'var(--green-main)', textAlign: 'right'}}>+{Math.round(financials.threeYRevenueGrowthPerShare * 100)}%</h4> :
                <h4 style={{width: '60px', color: 'var(--red-main)', textAlign: 'right'}}>{Math.round(financials.threeYRevenueGrowthPerShare * 100)}%</h4>) :
                <h4 style={{color: 'var(--darkgrey-main)', textAlign: 'right'}}>–</h4>}
            </Details>
            <hr />
            <Details>
                {financials.tenYOperatingCFGrowthPerShare ?
                (financials.tenYOperatingCFGrowthPerShare >= 0 ?
                <h4 style={{width: '60px', color: 'var(--green-main)'}}>+{Math.round(financials.tenYOperatingCFGrowthPerShare * 100)}%</h4> :
                <h4 style={{width: '60px', color: 'var(--red-main)'}}>{Math.round(financials.tenYOperatingCFGrowthPerShare * 100)}%</h4>) :
                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                <h5 style={{textAlign: 'center'}}>CASH FLOW</h5>
                {financials.threeYOperatingCFGrowthPerShare ?
                (financials.threeYOperatingCFGrowthPerShare >= 0 ?
                <h4 style={{width: '60px', color: 'var(--green-main)', textAlign: 'right'}}>+{Math.round(financials.threeYOperatingCFGrowthPerShare * 100)}%</h4> :
                <h4 style={{width: '60px', color: 'var(--red-main)', textAlign: 'right'}}>{Math.round(financials.threeYOperatingCFGrowthPerShare * 100)}%</h4>) :
                <h4 style={{color: 'var(--darkgrey-main)', textAlign: 'right'}}>–</h4>}
            </Details>
            <hr />
            <Details>
                {financials.tenYNetIncomeGrowthPerShare ?
                (financials.tenYNetIncomeGrowthPerShare >= 0 ?
                <h4 style={{width: '60px', color: 'var(--green-main)'}}>+{Math.round(financials.tenYNetIncomeGrowthPerShare * 100)}%</h4> :
                <h4 style={{width: '60px', color: 'var(--red-main)'}}>{Math.round(financials.tenYNetIncomeGrowthPerShare * 100)}%</h4>) :
                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                <h5 style={{textAlign: 'center'}}>NET INCOME</h5>
                {financials.threeYNetIncomeGrowthPerShare ?
                (financials.threeYNetIncomeGrowthPerShare >= 0 ?
                <h4 style={{width: '60px', color: 'var(--green-main)', textAlign: 'right'}}>+{Math.round(financials.threeYNetIncomeGrowthPerShare * 100)}%</h4> :
                <h4 style={{width: '60px', color: 'var(--red-main)', textAlign: 'right'}}>{Math.round(financials.threeYNetIncomeGrowthPerShare * 100)}%</h4>) :
                <h4 style={{color: 'var(--darkgrey-main)', textAlign: 'right'}}>–</h4>}
            </Details>
            <hr />
            <Details>
                {financials.tenYShareholdersEquityGrowthPerShare ?
                (financials.tenYShareholdersEquityGrowthPerShare >= 0 ?
                <h4 style={{width: '60px', color: 'var(--green-main)'}}>+{Math.round(financials.tenYShareholdersEquityGrowthPerShare * 100)}%</h4> :
                <h4 style={{width: '60px', color: 'var(--red-main)'}}>{Math.round(financials.tenYShareholdersEquityGrowthPerShare * 100)}%</h4>) :
                <h4 style={{color: 'var(--darkgrey-main)'}}>–</h4>}
                <h5 style={{textAlign: 'center'}}>EQUITY</h5>
                {financials.threeYShareholdersEquityGrowthPerShare ?
                (financials.threeYShareholdersEquityGrowthPerShare >= 0 ?
                <h4 style={{width: '60px', color: 'var(--green-main)', textAlign: 'right'}}>+{Math.round(financials.threeYShareholdersEquityGrowthPerShare * 100)}%</h4> :
                <h4 style={{width: '60px', color: 'var(--red-main)', textAlign: 'right'}}>{Math.round(financials.threeYShareholdersEquityGrowthPerShare * 100)}%</h4>) :
                <h4 style={{color: 'var(--darkgrey-main)', textAlign: 'right'}}>–</h4>}
            </Details>
        </InformationBox>
    )
}