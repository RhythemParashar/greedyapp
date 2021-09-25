export const displayRowsLogic = (currentState, report) => {

    const headers = {
        Date_Column : 'date',
        AppName_Column : 'app_name',
        ADRequest_Column : 'requests',
        ADResponce_Column : 'responses',
        Impression_Column : 'impressions',
        Clicks_Column : 'clicks',
        Revenue_Column : 'revenue',
        FillRate_Column : 'fill_rate',
        CTR_Column : 'ctr'
    }

    let ColumnHeaderKeys = Object.keys(headers);
    return ColumnHeaderKeys.map((ColumnHeaders) => {
        if(!Object.keys(currentState.hiddenColumns).includes(ColumnHeaders)) {
                return <td >{report[headers[ColumnHeaders]]}</td>
        }
        else 
            return null;
    });
}