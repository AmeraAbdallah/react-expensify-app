import React from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters';
import {setStartDate,setEndDate} from '../actions/filters';




class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));

    };
    onFocusChange = calenderFocused => this.setState({ calenderFocused });
    render(){
        return(
            <div>
                <input 
                    type='text'
                    value={this.props.filters.text} 
                    onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select  
                value={this.props.filters.sortBy}
                onChange={(e)=>{
                    if(e.target.value === 'date')
                        this.props.dispatch(sortByDate());
                    if(e.target.value === 'amount')
                        this.props.dispatch(sortByAmount());
                }}>
                    <option value='amount'>Amount</option>
                    <option value='date'>Date</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate} 
                    onDatesChange={this.onDatesChange} 
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
            </div>
        );
    }

} 

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);