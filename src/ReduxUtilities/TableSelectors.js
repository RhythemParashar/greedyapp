import moment from "moment";

const getReports = (reports, apps, loadingFlag) => {
    let newReports = [];

    if (loadingFlag === false && reports.length > 1) {
        reports.map((report, index) => {
            apps.map((app) => {
                if(app['app_id'] === report['app_id']){
                    report['app_name'] = app['app_name'];
                    delete report['app_id'];
                    return ''
                }
                else 
                    return null;
            })
            report.date = moment(report.date).format('YYYY-MM-DD');
            report['fill_rate'] = Number(( (report.requests / report.responses) * 100 ).toFixed(2));
            report['ctr'] = Number(( ( report.clicks / report.impressions ) * 100 ).toFixed(2));
            if (report.revenue> 0) {
                report.revenue = Number((report.revenue).toFixed(2));    
            }       
            newReports.push(report);
            return '';
        })
    }
    

    return newReports;

}

export { getReports }