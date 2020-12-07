import { useHistory } from 'react-router-dom';
import { BackIcon } from './Icons'; 

export default function BackButton() {
    let history = useHistory();
    return (
    <div onClick={() => history.goBack()}>
        <BackIcon />
    </div>
    )
};