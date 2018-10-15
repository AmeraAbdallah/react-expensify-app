import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/visibleExpenses';

import 'normalize.css/normalize.css'; //make style look similar in all browsers
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({description: 'water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 500, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);




ReactDOM.render(
    <Provider store = {store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('app'
));