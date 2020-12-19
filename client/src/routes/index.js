import { Switch, Route } from 'react-router-dom';

import AuthRoute from './AuthRoute';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute isPrivate path="/login" component={Login} />
            <AuthRoute isPrivate path="/signup" component={SignUp} />
        </Switch>
    );
};

export default Routes;
