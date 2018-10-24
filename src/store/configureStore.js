import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesRedusers from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhanccers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
    const store = createStore(
        combineReducers({
            expenses: expensesRedusers,
            filters: filtersReducer
        }),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhanccers(applyMiddleware(thunk))
    );
    return store;
}

export default configureStore;
