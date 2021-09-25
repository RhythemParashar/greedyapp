const initialState = {
    DateRange: {
        startDate: '2021-06-01',
        endDate: '2021-06-30'
    }
}

const DatePickerReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_DATERANGE':
            console.log(action.DateRange)
            return {
                DateRange: {
                    startDate: action.DateRange.startDate,
                    endDate: action.DateRange.endDate
                }
            }

        default: return state;
    }
}

export default DatePickerReducer;