import { Switch, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import MarketPage from './pages/market/MarketPage'
import CollectionPage from './pages/collection/CollectionPage'
import ExplorePage from './pages/explore/ExplorePage'
import NewsPage from './pages/news/NewsPage'
import PortfolioPage from './pages/portfolio/PortfolioPage'
import DetailsPage from './pages/details/DetailsPage'
import ChampionsPage from './pages/champions/ChampionsPage'
import * as ROUTES from './constants/Routes'

const App = () => (
  <Switch>
    <Route path={ROUTES.LOGIN}>
      <LoginPage />
    </Route>
    <Route path={ROUTES.REGISTER}>
      <RegisterPage />
    </Route>
    <Route path={ROUTES.MARKET}>
      <MarketPage />
    </Route>
    <Route path={ROUTES.COLLECTIONS}>
      <CollectionPage />
    </Route>
    <Route exact path={ROUTES.EXPLORE}>
      <ExplorePage />
    </Route>
    <Route path={ROUTES.NEWS}>
      <NewsPage />
    </Route>
    <Route path={ROUTES.PORTFOLIO}>
      <PortfolioPage />
    </Route>
    <Route path={ROUTES.DETAILS}>
      <DetailsPage />
    </Route>
    <Route path={ROUTES.CHAMPIONS}>
      <ChampionsPage />
    </Route>
  </Switch>
)

export default App
