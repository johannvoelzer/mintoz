import { Switch, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import EventsPage from './pages/events/EventsPage'
import ComparePage from './pages/compare/ComparePage'
import ExplorePage from './pages/explore/ExplorePage'
import NewsPage from './pages/news/NewsPage'
import PortfolioPage from './pages/portfolio/PortfolioPage'
import DetailsPage from './pages/details/DetailsPage'
import * as ROUTES from './constants/Routes'

const App = () => (
    <Switch>
      <Route path={ROUTES.LOGIN}>
        <LoginPage />
      </Route>
      <Route path={ROUTES.REGISTER}>
        <RegisterPage />
      </Route>
      <Route path={ROUTES.EVENTS}>
        <EventsPage />
      </Route>
      <Route path={ROUTES.COMPARE}>
        <ComparePage />
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
    </Switch>
);

export default App
