const initialState = {
    loading: false,
    apps: [],
    error: ''
}

const AppAPIReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_APPAPI_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'FETCH_APPAPI_SUCCESS':
            return {
                loading: false,
                apps: action.payload,
                error: ''
            }

        case 'FETCH_APPAPI_ERROR':
            return {
                loading: false,
                apps: [],
                error: action.payload
            }


        default: return state
    }
}

export default AppAPIReducer;