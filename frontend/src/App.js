import { FirebaseDatabaseProvider } from "@react-firebase/database";
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import EventsPage from './pages/events/EventsPage';
import ComparePage from './pages/compare/ComparePage';
import ExplorePage from './pages/explore/ExplorePage';
import WatchlistPage from './pages/watchlist/WatchlistPage';
import ProfilePage from './pages/profile/ProfilePage';
import DetailsPage from './pages/details/DetailsPage';
import * as ROUTES from './constants/Routes';

const App = () => (
  <FirebaseDatabaseProvider>
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
      <Route path={ROUTES.WATCHLIST}>
        <WatchlistPage />
      </Route>
      <Route path={ROUTES.PROFILE}>
        <ProfilePage />
      </Route>
      <Route path={ROUTES.DETAILS}>
        <DetailsPage />
      </Route>
    </Switch>
  </FirebaseDatabaseProvider>
);

export default App;
