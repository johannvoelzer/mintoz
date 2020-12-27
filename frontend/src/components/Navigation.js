import { NavLink } from 'react-router-dom'
import * as ROUTES from '../constants/Routes'
import { MarketIcon, CollectionIcon, Plus, NewsIcon, ProfileIcon } from './Icons'
import { NavigationBar, LeftTab, RightTab } from '../styles/navigation/NavigationBar'
import ExploreButton from '../styles/buttons/ExploreButton'

export default function Navigation() {
  return (
    <NavigationBar>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.NEWS}>
        <LeftTab>
          <NewsIcon />
        </LeftTab>
      </NavLink>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.MARKET}>
        <LeftTab>
          <MarketIcon />
        </LeftTab>
      </NavLink>
      <NavLink to={ROUTES.EXPLORE}>
        <ExploreButton>
          <Plus className="buttonClick" />
        </ExploreButton>
      </NavLink>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.COLLECTIONS}>
        <RightTab>
          <CollectionIcon />
        </RightTab>
      </NavLink>
      <NavLink style={{ opacity: '50%' }} activeStyle={{ opacity: '100%' }} to={ROUTES.PORTFOLIO}>
        <RightTab>
          <ProfileIcon />
        </RightTab>
      </NavLink>
    </NavigationBar>
  )
}