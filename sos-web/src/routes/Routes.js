import { Route, Switch } from 'react-router-dom';
import { Home } from '../components/pages/Home';

export const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
  </Switch>
);
