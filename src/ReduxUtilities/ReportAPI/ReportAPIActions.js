import axios from 'axios';

export const fetchReportAPIRequest = (DateRange) => {
    return {
        type: 'FETCH_REPORTAPI_REQUEST',
        DateRange 
    }
}

const fetchReportAPISuccess = reports => {
    return {
        type: 'FETCH_REPORTAPI_SUCCESS',
        payload: reports
    }
}

const fetchReportAPIError = error => {
    return {
        type: 'FETCH_REPORTAPI_ERROR',
        payload: error
    }
}

export const fetchReports = (DateRange) => {
    return (dispatch) => {
        dispatch(fetchReportAPIRequest);
        axios.get(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${DateRange.startDate}&endDate=${DateRange.endDate}`)
            .then(responce => {
                const reports = responce.data.data;
                console.log(reports);
                dispatch(fetchReportAPISuccess(reports));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchReportAPIError(errorMsg));
            });
    }
}