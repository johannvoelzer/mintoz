import { NavLink } from 'react-router-dom'
import * as ROUTES from '../constants/Routes'
import { MarketIcon, CollectionIcon, Plus, NewsIcon, ProfileIcon } from './Icons'
import NavigationBar from '../styles/navigation/NavigationBar'
import ExploreButton from '../styles/buttons/ExploreButton'

export default function Navigation() {
  return (
    <NavigationBar>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.NEWS}>
        <NewsIcon />
      </NavLink>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.MARKET}>
        <MarketIcon />
      </NavLink>
      <NavLink to={ROUTES.EXPLORE}>
          <ExploreButton>
              <Plus className="buttonClick" />
          </ExploreButton>
      </NavLink>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.COLLECTIONS}>
        <CollectionIcon />
      </NavLink>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.PORTFOLIO}>
        <ProfileIcon />
      </NavLink>
    </NavigationBar>
  )
}