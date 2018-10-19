import React from 'react';
import {connect} from 'react-redux';
import expenseTotal from '../selectors/expenseTotal';
import getVisibleExpenses from '../selectors/visibleExpenses';
import numeral from 'numeral';

const ExpeneseSummery = ({expenses}) => {
    const expenseWord = (expenses.length === 1)? 'expense' : 'expenses';

    return (
        <div>
            <h3>viewing {expenses.length} {expenseWord} totalling {numeral(expenseTotal(expenses)/100).format('$0,0.00')}</h3>
        </div>)
    };

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpeneseSummery);