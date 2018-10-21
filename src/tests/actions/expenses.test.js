import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '222-666'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '222-666'
    });
});

test('should setup edit expense action object',()=>{
    const action = editExpense('222-666-gg',{description:'somethig', amount: 55});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'222-666-gg',
        updates: {
            description:'somethig',
            amount: 55
        }
    })
});

test('should setup add expense action object with provided values',() => {
    const expenseDate = {
        description: 'Rent',
        amount: 109500,
        createdAt: 10000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseDate);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDate,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values',() => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description :'', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            
        }
    });
});