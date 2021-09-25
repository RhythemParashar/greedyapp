const initialState = {
    loading: false,
    reports: [],
    error: ''
}

const ReportAPIReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_REPORTAPI_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'FETCH_REPORTAPI_SUCCESS':
            console.log('action payload >> '+action.payload);
            return {
                loading: false,
                reports: action.payload,
                error: ''
            }

        case 'FETCH_REPORTAPI_ERROR':
            return {
                loading: false,
                reports: [],
                error: action.payload
            }


        default: return state
    }
}

export default ReportAPIReducer;