import axios from 'axios';

export const fetchAppsAPIRequest = () => {
    return {
        type: 'FETCH_APPAPI_REQUEST', 
    }
}

export const fetchAppsAPISuccess = apps => {
    return {
        type: 'FETCH_APPAPI_SUCCESS',
        payload: apps
    }
}

export const fetchAppsAPIError = error => {
    return {
        type: 'FETCH_APPAPI_ERROR',
        payload: error
    }
}

export const fetchApps = () => {
    return (dispatch) => {
        dispatch(fetchAppsAPIRequest);
        axios.get('http://go-dev.greedygame.com/v3/dummy/apps')
            .then(responce => {
                const apps = responce.data.data;
                console.log(apps);
                dispatch(fetchAppsAPISuccess(apps));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchAppsAPIError(errorMsg));
            });
    }
}