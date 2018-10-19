import React from 'react';
import {connect} from 'react-redux';
import expenseTotal from '../selectors/expenseTotal';
import getVisibleExpenses from '../selectors/visibleExpenses';
import numeral from 'numeral';

const ExpeneseSummery = (props) => (
    <div>
        viewing {props.expenses.length} expenses totalling {numeral(expenseTotal(props.expenses)/100).format('$0,0.00')}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpeneseSummery);