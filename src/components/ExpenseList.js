import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/visibleExpenses';
const ExpenseList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
                {(props.expenses.length > 0) ? props.expenses.map((expense)=>{
                    return <ExpenseListItem key={expense.id} {...expense} />
                }) : (
                    <div className="list-item list-item--messege">
                        <span>No Expenses</span>
                    </div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses,state.filters)
    };
};
export default connect (mapStateToProps)(ExpenseList);