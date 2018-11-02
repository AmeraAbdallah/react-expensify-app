import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import expenseTotal from '../selectors/expenseTotal';
import getVisibleExpenses from '../selectors/visibleExpenses';
import numeral from 'numeral';

const ExpeneseSummery = ({expenses}) => {
    const expenseWord = (expenses.length === 1)? 'expense' : 'expenses';

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">viewing <span>{expenses.length}</span> {expenseWord} totalling <span>{numeral(expenseTotal(expenses)/100).format('$0,0.00')}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>)
    };

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpeneseSummery);