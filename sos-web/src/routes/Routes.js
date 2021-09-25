import { Route, Switch } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Reports } from '../components/pages/Reports';

export const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/reports" exact>
      <Reports />
    </Route>
    <Route path="/login" exact>
      <Login />
    </Route>
  </Switch>
);
