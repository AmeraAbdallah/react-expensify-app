import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup defualt filter values',()=>{
    const state = filtersReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount',()=>{
    const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
    // expect(state).toEqual({
    //     text: '',
    //     sortBy: 'amount',
    //     startDate: moment().startOf('month'),
    //     endDate: moment().endOf('month')
    // });
});

test('should set sort by to date',()=>{
    const defaultState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filtersReducer(defaultState,{type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
    // expect(state).toEqual({
    //     text: '',
    //     sortBy: 'date',
    //     startDate: moment().startOf('month'),
    //     endDate: moment().endOf('month')
    // });
});


test('should set text filter',()=>{
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'some text 22'
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: action.text,
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set start date',()=>{
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(1000)
    };
    const state = filtersReducer(undefined,action);
    // expect(state.startDate).toBe(action.startDate);
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: action.startDate,
        endDate: moment().endOf('month')
    });
});

test('should set end date',()=>{
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(1000)
    };
    const state = filtersReducer(undefined,action);
    // expect(state.endDate).toBe(action.endDate);
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: action.endDate
    });
});