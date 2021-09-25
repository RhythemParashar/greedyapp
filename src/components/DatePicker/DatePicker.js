import React, { useEffect, useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { changeDateRange } from '../../ReduxUtilities/DatePicker/DatePickerActions';
import moment from 'moment';

const DatePicker = ({changeDateRange}) => {

    const [dateRange, setdateRange] = useState({
        startDate: null,
        endDate: null
    });
    const [focus, setFocus] = useState(null);
    
    const { startDate, endDate } = dateRange;
    
    const handleOnDateChange = (startDate, endDate) => setdateRange(startDate, endDate);

    useEffect(() => {
        if (dateRange.startDate !== null && dateRange.endDate !== null) {
            let DateTransform = {
                startDate: moment(dateRange.startDate['_d']).format('YYYY-MM-DD'),
                endDate: moment(dateRange.endDate['_d']).format('YYYY-MM-DD')
            }
            console.log(DateTransform);
            changeDateRange(DateTransform);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateRange]);

    return (
        <div>
            <DateRangePicker
                startDate={startDate}
                startDateId="startDateForAPI"
                onDatesChange={handleOnDateChange}
                endDate={endDate}
                endDateId="endDateForAPI"
                focusedInput={focus}
                onFocusChange={focus => setFocus(focus)}
                isOutsideRange={() => false}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        DateRange: state.DatePicker.DateRange
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeDateRange: (DateRange) => {
            dispatch(changeDateRange(DateRange));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)
