import { useHistory } from 'react-router-dom';
import GoBackButton from '../styles/buttons/GoBackButton';
import { BackIcon } from './Icons'; 

export default function BackButton() {
    const history = useHistory();
    return (
    <GoBackButton onClick={() => history.goBack()}>
        <BackIcon />
    </GoBackButton>
    )
};