import { NavLink } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';
import { BackIcon } from './Icons'; 

const BackButton = () => (
    <NavLink to={ROUTES.EXPLORE}>
        <BackIcon />
    </NavLink>
)

export default BackButton;