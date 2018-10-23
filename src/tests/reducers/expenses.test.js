import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should return default state for expenses reducers',()=>{
    const state = expensesReducers(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should add expense to the expences',()=>{
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id:4,
            description: 'new mobile',
            note: '',
            amount: 99900,
            createdAt: 0
        }
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should remove expense from the expences',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense from the expences if id not find',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit an expense',()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'some thing',
        }
    };
    const state = expensesReducers(expenses, action);
    // const expectedState = expenses.map((expense)=>{
    //     if(expense.id === action.id){
    //         return {...expense, ...action.updates};
    //     }
    //     return expense;
    // });
    // expect(state).toEqual(expectedState);
    expect(state[1].description).toBe(action.updates.description)
});

test('should not edit an expense if id not exist',()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            id: '2',
            description: 'some thing',
            note: '',
            amount: 109500,
            createdAt: moment(-90000000000)
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});