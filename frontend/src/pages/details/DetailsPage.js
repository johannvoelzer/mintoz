import Navigation from '../../components/Navigation';
import { useParams } from 'react-router-dom';
import GetName from '../../services/GetName';
import DetailsHeader from '../../styles/details/DetailsHeader';
import BackButton from '../../components/BackButton';

const DetailsPage = () => {

    const {stockSymbol} = useParams();
    const symbol = {stockSymbol}

    return (
        <div>
            <DetailsHeader>
                <BackButton />
                <h2 style={{margin: '0'}}>{stockSymbol}</h2>
                <p>bookmark</p>
            </DetailsHeader>
                <GetName symbol={symbol} />
            <Navigation />
        </div>
    );
};

export default DetailsPage;