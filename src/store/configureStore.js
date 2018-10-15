import {createStore, combineReducers} from 'redux';
import expensesRedusers from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            expenses: expensesRedusers,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

export default configureStore;