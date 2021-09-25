import { combineReducers } from "redux";
import tableReducer from "./Table/tableReducer";
import AppAPIReducer from "./AppAPI/AppAPIReducer";
import ReportAPIReducer from './ReportAPI/ReportAPIReducer';
import DatePickerReducer from "./DatePicker/DatePickerReducer";

const rootReducer = combineReducers({
    TableStates: tableReducer,
    AppAPIResponce: AppAPIReducer,
    ReportAPIResponce: ReportAPIReducer,
    DatePicker: DatePickerReducer
});

export default rootReducer;