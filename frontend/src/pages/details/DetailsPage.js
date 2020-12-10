import Navigation from '../../components/Navigation';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import { AuthContext } from '../../components/Authentication';
import { useParams } from 'react-router-dom';
import StockInformation from '../../components/StockInformation';
import Bookmark from '../../components/Bookmark';
import DetailsHeader from '../../styles/headers/DetailsHeader';
import BackButton from '../../components/BackButton';

const DetailsPage = () => {
    const {stockSymbol, stockName} = useParams();

    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to={ROUTES.LOGIN} />;
    }
    return (
        <div>
            <div style={{margin: '30px 30px 100px'}}>
                <DetailsHeader>
                    <BackButton />
                    <h2 style={{margin: '0'}}>{stockSymbol}</h2>
                    <Bookmark symbol={stockSymbol} name={stockName} />
                </DetailsHeader>
                <h3>{stockName}</h3>
                <StockInformation symbol={stockSymbol} />
            </div>
            <Navigation />
        </div>
    );
};

export default DetailsPage;