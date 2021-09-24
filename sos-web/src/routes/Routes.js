import { Route, Switch } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Reports } from '../components/pages/Reports';

export const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/reports" exact>
      <Reports />
    </Route>
  </Switch>
);
