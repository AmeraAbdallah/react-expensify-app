import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpensifyDashboard from '../components/ExpensifyDashboard';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <header>
                <Header/>
            </header>
            <Switch>
                <Route path='/' component={LoginPage} exact/>
                <Route path='/dashboard' component={ExpensifyDashboard}/>
                <Route path='/create' component={AddExpensePage}/>
                <Route path='/edit/:id' component={EditExpensePage}/>
                <Route path='/help' component={HelpPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;