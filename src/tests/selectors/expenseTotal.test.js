import getExpensesTotal from '../../selectors/expenseTotal';
import expenses from '../fixtures/expenses';

const oneExpense = [{
        id: '1',
        description: 'Credit Card',
        note: '',
        amount: 50,
        createdAt: 0
    }
];

test('should return all expenses total',()=>{
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114125);
});

test('should return zero total when array empty',()=>{
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('should return correct total when one element in array',()=>{
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(125);
});