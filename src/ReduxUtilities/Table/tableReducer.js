const initialState = {
    columnStates: {
        Date_Column : true,
        AppName_Column : true,
        ADRequest_Column : false,
        ADResponce_Column : false,
        Impression_Column : false,
        Clicks_Column : false,
        Revenue_Column : false,
        FillRate_Column : false,
        CTR_Column : false
    },
    hiddenColumns: {
        ADRequest_Column : 'ADRequest_Column',
        ADResponce_Column : 'ADResponce_Column',
        Impression_Column : 'Impression_Column',
        Clicks_Column : 'Clicks_Column',
        Revenue_Column : 'Revenue_Column',
        FillRate_Column : 'FillRate_Column',
        CTR_Column : 'CTR_Column'
    }
}

const tableReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_COLUMN_STATE':
            
            let updatedColumnState = state.columnStates
            
            updatedColumnState[action.ColumnName] = !updatedColumnState[action.ColumnName]

            return {
                ...state,
                columnStates: updatedColumnState
            }

        case 'APPLY_CHANGES':

            let updatedHiddenColumns = {}

            Object.entries(state.columnStates).map((columns, index) => {
                if (columns[1] === false) {
                    return updatedHiddenColumns[columns[0]] = columns[0];
                }
                else return null;
            })

            return {
                ...state,
                hiddenColumns: updatedHiddenColumns
            }

        default: return state
    }
}

export default tableReducer;