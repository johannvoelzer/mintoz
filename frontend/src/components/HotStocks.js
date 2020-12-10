import { NavLink } from 'react-router-dom'
import ListBox from '../styles/boxes/ListBox'

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
        {name: "Shopify Inc.", symbol: "SHOP", uid: "SHOP"},
    ]

    const stockListOverview = stockList.map(result => (
        <NavLink key={JSON.stringify(result.symbol)} to={"/details/"+result.symbol+"/"+result.name}>
            <ListBox>
                <h4>{result.symbol}</h4>
                <h5>{result.name.length >= 30 ? result.name.substr(0, 27) + "\u2026" : result.name}</h5>
            </ListBox>
        </NavLink>
    ))

    return (
        <div>
            <h2>HOT STOCKS</h2>
            {stockListOverview}
        </div>
    )
}