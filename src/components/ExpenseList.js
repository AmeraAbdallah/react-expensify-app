import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/visibleExpenses';
const ExpenseList = (props) => {
    return (
        <div>
            <h2>Expense List</h2>
            {(props.expenses.length > 0) ? props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense} />
            }) : <p>no expenses</p>}
            
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses,state.filters)
    };
};
export default connect (mapStateToProps)(ExpenseList);