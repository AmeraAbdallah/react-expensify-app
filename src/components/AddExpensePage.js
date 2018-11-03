import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title">Add Expense</h2>
            </div>
        </div>
        <div className="content-container">
            <ExpenseForm onSubmit={(expense)=>{
                props.dispatch(startAddExpense(expense));
                props.history.push('/');
            }}/>
        </div>
    </div>
);

export default connect()(AddExpensePage); 