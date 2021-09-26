import React, { useEffect } from 'react';
import Table from '../Table/Table';
import DatePicker from '../DatePicker/DatePicker';
import { changeColumnStates, applyChanges } from '../../ReduxUtilities/Table/tableActions';
import { connect } from 'react-redux';
import { fetchReports } from '../../ReduxUtilities/ReportAPI/ReportAPIActions';
import { fetchApps } from '../../ReduxUtilities/AppAPI/AppAPIActions';
import './Analytics.css';

const Analytics = ({changeColumnStates, applyChanges, currentState, DateRange, fetchReports, fetchApps}) => {

    useEffect(() => {
        fetchReports(DateRange);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [DateRange]);

    useEffect(() => {
        fetchApps();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const buttonClassPicker = (buttonId) => {
        if (currentState.columnStates[buttonId] === true) {
            return 'analytics__tableButton analytics__tableButton_active'
        }
        else {
            return 'analytics__tableButton analytics__tableButton_inactive';
        }
    }

    return (
        <div>
            <div className='analytics__datepicker'>
                <DatePicker />
            </div>
            <div className='analytics__tablecontrolarea'>
                <button className={buttonClassPicker('Date_Column')} onClick={() => changeColumnStates('Date_Column')}>Date</button>
                <button className={buttonClassPicker('AppName_Column')} onClick={() => changeColumnStates('AppName_Column')}>App Name</button>
                <button className={buttonClassPicker('ADRequest_Column')} onClick={() => changeColumnStates('ADRequest_Column')}>AD Request</button>
                <button className={buttonClassPicker('ADResponce_Column')} onClick={() => changeColumnStates('ADResponce_Column')}>AD Responce</button>
                <button className={buttonClassPicker('Impression_Column')} onClick={() => changeColumnStates('Impression_Column')}>Impression</button>
                <button className={buttonClassPicker('Clicks_Column')} onClick={() => changeColumnStates('Clicks_Column')}>Clicks</button>
                <button className={buttonClassPicker('Revenue_Column')} onClick={() => changeColumnStates('Revenue_Column')}>Revenue</button>
                <button className={buttonClassPicker('FillRate_Column')} onClick={() => changeColumnStates('FillRate_Column')}>FillRate</button>
                <button className={buttonClassPicker('CTR_Column')} onClick={() => changeColumnStates('CTR_Column')}>CTR</button>
                <button className='analytics__applyButton btn btn-primary' onClick={() => applyChanges()}>Apply Changes</button>
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