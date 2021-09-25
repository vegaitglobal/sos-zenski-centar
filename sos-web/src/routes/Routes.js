import { Switch } from 'react-router-dom';
import { Forms } from '../components/pages/Forms';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Reports } from '../components/pages/Reports';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const Routes = () => (
  <Switch>
    <PublicRoute path="/login" component={Login} exact />
    <PrivateRoute path="/" component={Home} exact />
    <PrivateRoute path="/reports" component={Reports} exact />
    <PrivateRoute path="/forms" component={Forms} exact />
  </Switch>
);
