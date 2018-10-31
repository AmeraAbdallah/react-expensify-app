import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpensifyDashboard from '../components/ExpensifyDashboard';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <header>
                <Header/>
            </header>
            <Switch>
                <Route path='/' component={LoginPage} exact/>
                <PrivateRoute path='/dashboard' component={ExpensifyDashboard}/>
                <PrivateRoute path='/create' component={AddExpensePage}/>
                <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;