import { NavLink } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';
import { EventsIcon, CompareIcon, Plus, WatchlistIcon, ProfileIcon } from './Icons';
import NavigationBar from '../styles/navigation/NavigationBar';
import ExploreButton from '../styles/buttons/ExploreButton';

export default function Navigation() {
  return (
    <NavigationBar>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.EVENTS}>
        <EventsIcon />
      </NavLink>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.COMPARE}>
        <CompareIcon />
      </NavLink>
      <NavLink to={ROUTES.EXPLORE}>
          <ExploreButton>
              <Plus className="buttonClick" />
          </ExploreButton>
      </NavLink>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.WATCHLIST}>
        <WatchlistIcon />
      </NavLink>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.PROFILE}>
        <ProfileIcon />
      </NavLink>
    </NavigationBar>
  );
};