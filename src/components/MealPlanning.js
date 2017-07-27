import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class MealPlanning extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            startDate : null,
            endDate : null,
            focusedInput : null
        };
    }

    render()
    {
        return(<div>
            <h2>Meal Planning</h2>

            <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
        </div>)
    }
}

export default MealPlanning;