import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpeneseSummery from './ExpenseSummary';
const ExpensifyDashboard = () => (
    <div>
        <ExpeneseSummery/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default ExpensifyDashboard;