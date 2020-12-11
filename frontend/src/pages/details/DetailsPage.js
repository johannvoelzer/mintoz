import Navigation from '../../components/Navigation'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import { useParams } from 'react-router-dom'
import StockInformation from '../../components/StockInformation'
import BookmarkToggle from '../../components/BookmarkToggle'
import DetailsHeader from '../../styles/headers/DetailsHeader'
import BackButton from '../../components/BackButton'

const DetailsPage = () => {
    const {stockSymbol, stockName} = useParams()

    const { currentUser } = useContext(AuthContext)
    if (!currentUser) {
        return <Redirect to={ROUTES.LOGIN} />
    }
    return (
        <div style={{marginBottom: '60px'}}>
            <DetailsHeader>
                <BackButton style={{marginTop: '4px'}} />
                <h2 style={{margin: '0'}}>{stockSymbol}</h2>
                <BookmarkToggle symbol={stockSymbol} name={stockName} />
            </DetailsHeader>
            <h3 style={{margin: '0 30px'}}>{stockName}</h3>
            <StockInformation symbol={stockSymbol} />
            <Navigation />
        </div>
    );
};

export default DetailsPage