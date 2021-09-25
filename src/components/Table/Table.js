import React from 'react'
import { changeColumnStates } from '../../ReduxUtilities/Table/tableActions';
import { connect } from 'react-redux';
import { showHeader } from './TableUtilities/showHeader';
import ShowRows from './ShowRows';
import { getReports } from '../../ReduxUtilities/TableSelectors';


const Table = ({currentState, getreport, apiLoadingStatus, apiError}) => {

    const ColumnHeader = {
        Date_Column : ['Date', 'date'],
        AppName_Column : ['App Name', 'app_name'],
        ADRequest_Column : ['AD Request', 'requests'],
        ADResponce_Column : ['AD Responce', 'responses'],
        Impression_Column : ['Impression', 'impressions'],
        Clicks_Column : ['Clicks', 'clicks'],
        Revenue_Column : ['Revenue', 'revenue'],
        FillRate_Column : ['FillRate', 'fill_rate'],
        CTR_Column : ['CTR', 'ctr']
    }

    return (
        <div>
            <table key="table">
                <thead key="thead">
                    <tr key="thead_tr">
                        {showHeader(currentState, ColumnHeader)}
                    </tr>
                </thead>
                {/* <tbody key="tbody">
                    {showRow(currentState, getreport, apiLoadingStatus, apiError)}
                </tbody> */}
                <ShowRows currentState={currentState} reports={getreport} apiLoadingStatus={apiLoadingStatus} apiError={apiError} ColumnHeader={ColumnHeader} />
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentState: state.TableStates,
        apiLoadingStatus: state.ReportAPIResponce.loading,
        apiError: state.ReportAPIResponce.error,
        getreport: getReports(state.ReportAPIResponce.reports, state.AppAPIResponce.apps, state.ReportAPIResponce.loading)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeColumnStates: (ColumnName) => {
            dispatch(changeColumnStates(ColumnName));
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Table);
