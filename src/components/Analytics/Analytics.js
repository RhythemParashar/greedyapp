import React, { useEffect } from 'react';
import Table from '../Table/Table';
import DatePicker from '../DatePicker/DatePicker';
import { changeColumnStates, applyChanges } from '../../ReduxUtilities/Table/tableActions';
import { connect } from 'react-redux';
import { fetchReports } from '../../ReduxUtilities/ReportAPI/ReportAPIActions';
import { fetchApps } from '../../ReduxUtilities/AppAPI/AppAPIActions';

const Analytics = ({changeColumnStates, applyChanges, currentState, DateRange, fetchReports, fetchApps}) => {

    useEffect(() => {
        fetchReports(DateRange);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [DateRange]);

    useEffect(() => {
        fetchApps();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className='analytics__datepicker'>
                <DatePicker />
            </div>
            <div className='analytics__tablecontrolarea'>
                <button onClick={() => changeColumnStates('Date_Column')}>Date</button>
                <button onClick={() => changeColumnStates('AppName_Column')}>App Name</button>
                <button onClick={() => changeColumnStates('ADRequest_Column')}>AD Request</button>
                <button onClick={() => changeColumnStates('ADResponce_Column')}>AD Responce</button>
                <button onClick={() => changeColumnStates('Impression_Column')}>Impression</button>
                <button onClick={() => changeColumnStates('Clicks_Column')}>Clicks</button>
                <button onClick={() => changeColumnStates('Revenue_Column')}>Revenue</button>
                <button onClick={() => changeColumnStates('FillRate_Column')}>FillRate</button>
                <button onClick={() => changeColumnStates('CTR_Column')}>CTR</button>
                <button onClick={() => applyChanges()}>Apply Changes</button>
                {console.log(currentState)}
            </div>
            <div className='analytics__table'>
                <Table />
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentState: state.TableStates,
        DateRange: state.DatePicker.DateRange
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeColumnStates: (ColumnName) => {
            dispatch(changeColumnStates(ColumnName));
        },
        applyChanges: () => {
            dispatch(applyChanges());
        },
        fetchReports: (DateRange) => {
            dispatch(fetchReports(DateRange));
        },
        fetchApps: () => {
            dispatch(fetchApps());
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Analytics)