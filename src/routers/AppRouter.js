import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpensifyDashboard from '../components/ExpensifyDashboard';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <header>
                <Header/>
            </header>
        
            <Switch>
                <Route path='/' component={ExpensifyDashboard} exact/>
                <Route path='/create' component={AddExpensePage}/>
                <Route path='/edit/:id' component={EditExpensePage}/>
                <Route path='/help' component={HelpPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;