import { NavLink } from 'react-router-dom'
import ListBox from '../styles/boxes/ListBox'
import AddToWatchlist from './AddToWatchlist'
import { ForwardIcon } from './Icons'

export default function HotStocks() {

    const stockList = [
        {name: "Apple Inc.", symbol: "APPL", uid: "APPL"},
        {name: "Tesla Inc.", symbol: "TSLA", uid: "TSLA"},
        {name: "Alphabet Inc.", symbol: "GOOG", uid: "GOOG"},
        {name: "PayPal Holdings Inc.", symbol: "PYPL", uid: "PYPL"},
        {name: "Microsoft Corp.", symbol: "MSFT", uid: "MSFT"},
        {name: "Advanced Micro Devices, Inc.", symbol: "AMD", uid: "AMD"},
        {name: "Visa, Inc.", symbol: "V", uid: "V"},
        {name: "Tencent Holdings Ltd. Unsponsored", symbol: "TCEHY", uid: "TCEHY"},
        {name: "NVIDIA Corp.", symbol: "NVDA", uid: "NVDA"},
        {name: "Alibaba Group Holding Ltd. Sponsored ADR", symbol: "BABA", uid: "BABA"},
        {name: "Plug Power Inc.", symbol: "PLUG", uid: "PLUG"},
        {name: "Shopify Inc.", symbol: "SHOP", uid: "SHOP"}
    ]

    const stockListOverview = stockList.map(result => (
        <ListBox key={JSON.stringify(result.symbol)}>
            <div style={{display: 'flex'}}>
                <AddToWatchlist symbol={result.symbol} name={result.name} />
                <NavLink to={"/details/"+result.symbol+"/"+result.name} style={{width: '400px', textDecoration: 'none'}}>
                    <div style={{margin: '12px 0 0 12px'}}>
                        <h5>{result.symbol}</h5>
                        <h4>{result.name.length >= 27 ? result.name.substr(0, 23) + "\u2026" : result.name}</h4>
                    </div>
                </NavLink>
                <NavLink to={"/details/"+result.symbol+"/"+result.name} style={{padding: '22px 16px 0 0'}}>
                    <ForwardIcon />
                </NavLink>
            </div>
        </ListBox>
    ))

    return (
        <div>
            <h6>HOT STOCKS</h6>
            {stockListOverview}
        </div>
    )
}