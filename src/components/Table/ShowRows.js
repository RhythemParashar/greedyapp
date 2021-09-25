import { displayRowsLogic } from './TableUtilities/rowDisplay';
import React, { useState, useMemo } from 'react';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort };
};
const ShowRows = ({currentState, reports, apiLoadingStatus, apiError, ColumnHeader}) => {

    const { items, requestSort } = useSortableData(reports);

    return (
        <tbody>
            <tr>
                {Object.entries(ColumnHeader).map((Columns, index) => {
                    if (Object.keys(currentState.hiddenColumns).find(key => key === Columns[0]) === undefined) {
                        return <td key={"tbody_" + index + Columns[1][0]}><button onClick={() => requestSort(Columns[1][1])}>↕</button></td>
                    }
                    else 
                        return null;
                })}
            </tr>

            {
                apiLoadingStatus ? (
                    < tr><td>Loading</td></tr>
                ) : apiError ? (<tr><td>{apiError}</td></tr>)
                : (
                    items.map((report, index) => {
                        console.log(report);
                        return <tr>
                            {displayRowsLogic(currentState, report, index)}
                        </tr>
                    })
                )
            }
        </tbody>
    )
}

export default ShowRows
